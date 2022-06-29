import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiTwotoneSetting } from "react-icons/ai";
import { FiCheck,FiPlus } from "react-icons/fi";
import { GoLinkExternal } from 'react-icons/go';
import { RiFileCopyLine } from "react-icons/ri";

import clsxm from '@/lib/clsxm';

import { Button, Input, Tabs } from '@/components';
import { Layout } from '@/components/layout/Layout';
import { Dialog } from '@/components/Molecules/Dialog';
import { Disclosure } from '@/components/Molecules/Disclosure';
import { InputAsset } from '@/components/Molecules/InputAsset';
import { Search } from '@/components/Molecules/Search';

import { getAMM } from '@/defi/AMMs';
import { getNetwork } from '@/defi/Networks';
import { getToken } from '@/defi/Tokens';


const networks = [
  { id: 1, label: 'picasso'},
  { id: 2, label: 'ethereum'},
  { id: 3, label: 'arbitrum'},
];

const assets = [
  { id: 1, label: 'pica'},
  { id: 2, label: 'eth'},
  { id: 3, label: 'usdc'},
];

interface valueType {
  1?: string;
  2?: string;
}

export default function Compose() {
  const [isOpenNetwork, setIsOpenNetwork] = useState(false)
  const [isOpenAsset, setIsOpenAsset] = useState(false)
  const [isOpenAssetSettings, setIsOpenAssetSettings] = useState(false)
  const [isOpenTransactionSettings, setIsOpenTransactionSettings] = useState(false)
  const [stepper, setStepper] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [enableExecute, setEnableExecute] = useState(true)
  const [enableOtherAsset, setEnableOtherAsset] = useState(false)
  const [selectedNetworkFrom, setSelectedNetworkFrom] = useState('')
  const [selectedAssetFrom, setSelectedAssetFrom] = useState('')
  const [selectedNetworkInto, setSelectedNetworkInto] = useState('')
  const [selectedAssetInto, setSelectedAssetInto] = useState('')
  const [selected, setSelected] = useState('')
  const [deadline, setDeadline] = useState('5 mins')
  const [slippage, setSlippage] = useState('0.5%')
  const [selectedAMM, setSelectedAMM] = useState<valueType>({
    1: '',
    2: '',
  });
  const [valueAddress, setValueAddress] = useState<valueType>({
    1: '',
    2: '',
  });

  const [categories] = useState({
    'AMMs': [
      {
        id: 1,
        label: 'uniswap',
      },
      {
        id: 2,
        label: 'sushiswap',
      },
    ],
    'Custom destination': [],
    'Slippage': [
      {
        id: 1,
        label: '0.5%',
      },
      {
        id: 2,
        label: '1%',
      },
      {
        id: 3,
        label: '2%',
      },
      {
        id: 4,
        label: '5%',
      },
    ],
  })

  const [categoriesComposition] = useState({
    'Transaction deadline': [
      {
        id: 1,
        label: '5 mins',
      },
      {
        id: 2,
        label: '15 mins',
      },
      {
        id: 3,
        label: '30 mins',
      },
      {
        id: 4,
        label: '60 mins',
      },
    ],
  })

  useEffect(() => {
    if (selectedNetworkFrom !== '' && selectedAssetFrom !== '') {
      setDisabled(false);
      setStepper(true);
    }
    if (selectedNetworkFrom !== '' && selectedAssetFrom !== '' && selectedNetworkInto !== '' && selectedAssetInto !== '') {
      setEnableExecute(false);
    }
    
  }, [selectedAssetFrom, selectedNetworkFrom, selectedAssetInto, selectedNetworkInto]);

  return (
    <>
      <Layout>
        <main>
          <section className='flex mx-auto mt-12'>
            {
              stepper ?
                <div className='w-3/12 mx-auto'>
                  <div className='bg-white/5 rounded-3xl border-2 border-transparent hover: py-4 pl-10'>
                    Compose from {selectedNetworkFrom.charAt(0).toUpperCase() + selectedNetworkFrom.slice(1)}
                    <div className='flex mt-2 '>
                      <div className='mr-2 inline-flex'><Image src={getToken(selectedAssetFrom).icon} width={18} height={18} alt=''/></div> 
                      <div className='inline-flex'>
                        0.0 {getToken(selectedAssetFrom).name}
                      </div>
                    </div>
                  </div>
                  {
                    selectedAssetInto ?
                      <div className='flex justify-end'>
                        <div className='bg-white/5 rounded-3xl border-2 border-transparent hover: py-4 pl-10 mt-8 w-10/12'>
                          Spawn on {selectedNetworkInto.charAt(0).toUpperCase() + selectedNetworkInto.slice(1)}
                          <div className='flex mt-2 '>
                            <div className='mr-2 inline-flex'><Image src={getToken(selectedAssetInto).icon} width={18} height={18} alt=''/></div> 
                            <div className='inline-flex'>
                              0.0 {getToken(selectedAssetInto).name}
                            </div>
                          </div>
                        </div>
                      </div>
                    : undefined
                  }
                  <div className='text-white/40 text-center mt-8'>
                    Composed route<GoLinkExternal className='inline-flex ml-2 mb-[3px]'/><RiFileCopyLine className='inline-flex ml-2 mb-[3px]'/>
                  </div>
                </div>
              : undefined
            }
            <div className={clsxm(
                      stepper ? 'w-8/12 mr-10' :
                      'w-8/12 mx-auto',
                    )}>
              <div>
                <div className='flex text-left'>
                  <h3 className='font-normal'>
                    COMPOSE
                  </h3>
                </div>
                <div className='mt-10'>
                  <div className='w-full h-32 mt-6'>
                    <h5 className='text-white/60 mb-8'>From</h5>
                    <div className='flex justify-between'>
                      <InputAsset assetIcon={selectedAssetFrom !== '' ? selectedAssetFrom : undefined} id='input-asset' className='w-11/12 relative'>
                        <>
                          {selectedNetworkFrom === '' ?
                            <Button className='h-10 px-4 mx-2' variant='outline' onClick={() => {setIsOpenNetwork(true);setSelected('from')}}>Select network</Button>
                          :
                            <Button className='h-10 px-4 mx-2' variant='secondary' onClick={() => {setIsOpenNetwork(true);setSelected('from')}} icon={<div className='-mb-1'><Image src={getNetwork(selectedNetworkFrom).icon} width={18} height={18} alt=''/></div>}>
                              {getNetwork(selectedNetworkFrom).name}
                            </Button>
                          }
                          {selectedAssetFrom === '' ?
                            <Button className='h-10 px-4 mx-2' variant='outline' onClick={() => {setIsOpenAsset(true);setSelected('from')}}>Select asset</Button>
                          :
                            <Button className='h-10 px-4 mx-2' variant='secondary' onClick={() => {setIsOpenAsset(true);setSelected('from')}} icon={<div className='-mb-1'><Image src={getToken(selectedAssetFrom).icon} width={18} height={18} alt=''/></div>}>
                              {getToken(selectedAssetFrom).name}
                            </Button>
                          }
                        </>
                      </InputAsset> 
                      {/* Disabled for DEMO */}
                      <Button disabled={true} className='w-[72px] h-36' variant='outline'><FiPlus className='w-[24px] h-[24px]' width={24} height={24}/></Button>     
                    </div>
                  </div>
                  <div className={clsxm(
                      'w-full mt-32',
                      disabled && 'cursor-not-allowed'
                    )}>
                    <div className='flex justify-between'>
                      <div className='flex'>
                        <h5 className='text-white/60 mb-8'>Into</h5>
                      </div>
                      <div className='flex -mt-3'>
                        <Button disabled={disabled} className='w-14 h-14 p-0 text-white/60 hover:text-white' variant='secondary' onClick={() => {setIsOpenAssetSettings(true)}}><AiTwotoneSetting width={24} height={24}/></Button>     
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <InputAsset disabled={disabled} assetIcon={selectedAssetInto !== '' ? selectedAssetInto : undefined} id='input-asset' className={`relative ${enableOtherAsset ? 'w-[45.25%]' : 'w-11/12'}`}>
                      <div className={`${enableOtherAsset ? 'w-[275px] flex justify-end' : ''}`}>
                          {(selectedNetworkInto !== '' && selectedAssetInto !== '') &&
                            <Button className='h-10 px-4 mx-2 absolute top-0 right-0 text-white/60 hover:text-white' variant='text' onClick={() => (setIsOpenTransactionSettings(true))}><AiTwotoneSetting width={18} height={18}/></Button>
                          }
                          {selectedNetworkInto === '' ?
                            <Button disabled={disabled} className='h-10 px-4 mx-2' variant='outline' onClick={() => {setIsOpenNetwork(true);setSelected('into')}}>Select network</Button>
                          :
                            <Button disabled={disabled} className='h-10 px-4 mx-2' variant='secondary' onClick={() => {setIsOpenNetwork(true);setSelected('into')}} icon={<div className='-mb-1'><Image src={getNetwork(selectedNetworkInto).icon} width={18} height={18} alt=''/></div>}>
                              {getNetwork(selectedNetworkInto).name}
                            </Button>
                          }
                          {selectedAssetInto === '' ?
                            <Button disabled={disabled} className='h-10 px-4 mx-2' variant='outline' onClick={() => {setIsOpenAsset(true);setSelected('into')}}>Select asset</Button>
                          :
                            <Button disabled={disabled} className='h-10 px-4 mx-2' variant='secondary' onClick={() => {setIsOpenAsset(true);setSelected('into')}} icon={<div className='-mb-1'><Image src={getToken(selectedAssetInto).icon} width={18} height={18} alt=''/></div>}>
                              {getToken(selectedAssetInto).name}
                            </Button>
                          }
                        </div>
                      </InputAsset> 
                      {enableOtherAsset ?

<InputAsset assetIcon={selectedAssetInto !== '' ? selectedAssetInto : undefined} id='input-asset2' className='relative w-[45.25%]'>
<div className='w-[275px] flex justify-end'>
    {(selectedNetworkInto !== '' && selectedAssetInto !== '') &&
      <Button className='h-10 px-4 mx-2 absolute top-0 right-0 text-white/60 hover:text-white' variant='text' onClick={() => (setIsOpenTransactionSettings(true))}><AiTwotoneSetting width={18} height={18}/></Button>
    }
    {selectedNetworkInto === '' ?
      <Button disabled={disabled} className='h-10 px-4 mx-2' variant='outline' onClick={() => {setIsOpenNetwork(true);setSelected('into')}}>Select network</Button>
    :
      <Button disabled={disabled} className='h-10 px-4 mx-2' variant='secondary' onClick={() => {setIsOpenNetwork(true);setSelected('into')}} icon={<div className='-mb-1'><Image src={getNetwork(selectedNetworkInto).icon} width={18} height={18} alt=''/></div>}>
        {getNetwork(selectedNetworkInto).name}
      </Button>
    }
    {selectedAssetInto === '' ?
      <Button disabled={disabled} className='h-10 px-4 mx-2' variant='outline' onClick={() => {setIsOpenAsset(true);setSelected('into')}}>Select asset</Button>
    :
      <Button disabled={disabled} className='h-10 px-4 mx-2' variant='secondary' onClick={() => {setIsOpenAsset(true);setSelected('into')}} icon={<div className='-mb-1'><Image src={getToken(selectedAssetInto).icon} width={18} height={18} alt=''/></div>}>
        {getToken(selectedAssetInto).name}
      </Button>
    }
  </div>
</InputAsset> 
:undefined

                      }
                      <Button onClick={() => setEnableOtherAsset(true)} disabled={disabled} className='w-[72px] h-36' variant='outline'><FiPlus className='w-[24px] h-[24px]' width={24} height={24}/></Button>     
                    </div>
                  </div>
                </div>
              </div>
              {/* TODO: Change with API */}
              <Disclosure disabled={enableExecute} title='Transaction details'>
                <div className='flex justify-between p'>
                  <span className='text-white/60'>Transaction fee</span>
                  <span>0.2 PICA</span>
                </div>
                {valueAddress[1] !== '' && valueAddress[1] !== undefined &&
                  <div className='flex justify-between p my-3'>
                    <span className='text-white/60'>Custom address 1</span>
                    <span>{valueAddress[1]}</span>
                  </div>
                }
                {valueAddress[2] !== '' && valueAddress[2] !== undefined &&
                  <div className='flex justify-between p my-3'>
                    <span className='text-white/60'>Custom address 2</span>
                    <span>{valueAddress[2]}</span>
                  </div>
                }
                <div className='flex justify-between p my-3'>
                  <span className='text-white/60'>Deadline</span>
                  <span>{deadline}</span>
                </div>
                <div className='flex justify-between p my-3'>
                  <span className='text-white/60'>AMM</span>
                  <span>{selectedAMM[1]}
                  {(selectedAMM[2] !== '' && selectedAMM[2] !== undefined) ? `, ${selectedAMM[2]}` : undefined}
                  </span>
                </div>
                <div className='flex justify-between p'>
                  <span className='text-white/60'>Slippage</span>
                  <span>{slippage}</span>
                </div>
              </Disclosure>
              <Button variant='primary' className='w-full mt-8' disabled={enableExecute}>Execute</Button>
            </div>
          </section>
        </main>
      </Layout>

      <Dialog show={isOpenNetwork} onClose={() => setIsOpenNetwork(false)} title='Select Network'>
        <div className="mt-12">
          <Search placeholder='Search for networks'/>
        </div>
        <div className="-mt-8">
          {networks.map(({ id, label }) => (
            <Button 
              key={id} 
              className={`w-[424px] ${id === 2 && 'm-6'} inline-flex justify-start pl-8`} 
              variant='soft' 
              icon={<Image src={getNetwork(label).icon} width={32} height={32} alt=''/>}
              onClick={() => { setIsOpenNetwork(false); selected === 'from' ? setSelectedNetworkFrom(label) :  selected === 'into' ? setSelectedNetworkInto(label) : undefined}}
            >
                <h6>{getNetwork(label).name}</h6>
            </Button>
          ))}
        </div>
      </Dialog>

      <Dialog show={isOpenAsset} onClose={() => setIsOpenAsset(false)} title='Select Asset'>
        <div className="mt-12">
          <Search placeholder='Search for assets'/>
        </div>
        <div className="-mt-8">
          {assets.map(({ id, label }) => (
            <Button 
              key={id} 
              className={`w-[424px] h-24 ${(id === 2) && 'mx-6 my-4'} justify-between relative inline-flex pl-8`} 
              variant='soft' 
              icon={<div className='pt-1'><Image src={getToken(label).icon} width={32} height={32} alt='' /></div>}
              onClick={() => { setIsOpenAsset(false); selected === 'from' ? setSelectedAssetFrom(label) :  selected === 'into' ? setSelectedAssetInto(label) : undefined}}
            >
                <h6 className='absolute left-20'>{getToken(label).name}</h6>
                <div className='flex-col flex mr-8'>
                  <h6>76,546</h6>
                  <span className='text-white/60'>$76,546</span>
                </div>
            </Button>
          ))}
        </div>
      </Dialog>

      <Dialog show={isOpenAssetSettings} onClose={() => setIsOpenAssetSettings(false)} title='Asset Settings'>
        <Tabs categories={categories}>
          {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className='pt-16'
                >
                  {
                    idx === 0 ?
                      <>
                        <form>   
                          <Search placeholder='Search for AMMs'/>
                        </form>
                        <div className='flex justify-between'>
                          {
                          posts.map((post, idx) => (
                            <Button 
                              key={post.id}
                              active={post.label === selectedAMM[1]}
                              className={clsxm(
                                'w-[49%] justify-start pl-[32px]',
                              )}
                              variant='soft'
                              onClick={() => {setSelectedAMM({1: post.label})}}
                              icon={
                                // @ts-expect-error post.label for uniswap/sushiswap
                                <Image src={getAMM(post.label).icon} width={32} height={32} alt=''/>
                              }
                            >
                                <h6>{
                                  // @ts-expect-error post.label for uniswap/sushiswap
                                  getAMM(post.label).label
                                }</h6>
                            </Button>
                          ))}
                        </div>
                      </>
                    : idx === 1 ?
                      <div className='flex justify-between'>
                        <Input id="custom-address" value={valueAddress[1]} onChange={e => setValueAddress({1: e.target.value})} className='w-full h-32 mr-8 text-left h5 pl-6 placeholder:text-white/60' autoFocus={true} type="text" placeholder="ERC-20 address"/>
                        <Button disabled={valueAddress[1] === '' && valueAddress[1] !== undefined} onClick={() => setIsOpenAssetSettings(false)} className='w-[72px] h-32' variant='outline'><FiCheck width={24} height={24}/></Button>  
                      </div>   
                    :
                    <>
                <div className='flex justify-between'>
                  {posts.map((post) => (
                       <Button 
                              key={post.id}
                              active={post.label === slippage}
                              className={clsxm(
                                'w-[24%] flex rounded-3xl h-[96px]',
                                'justify-start',
                              )}
                              variant='soft'
                              onClick={() => setSlippage(post.label)}
                            >
                              <div className='flex items-center text-white ml-8'> 
                                  <h5>{post.label}</h5>
                              </div>
                            </Button>
                  ))}
                </div>
                <div className='flex w-full'>
                      <div className='flex justify-between mt-10 w-full'>
                        <Input id="custom-slippage" value={slippage} onChange={e => setSlippage(e.target.value)} className='after:[] w-full h-32 mr-8 text-left h5 pl-6 placeholder:text-white/60' autoFocus={true} type="number" placeholder="Custom slippage"/>
                        <Button disabled={slippage === '' && slippage !== undefined} onClick={() => setIsOpenAssetSettings(false)} className='w-[72px] h-32' variant='outline'><FiCheck width={24} height={24}/></Button>  
                      </div>   
                </div>
                </>
                  }
                </Tab.Panel>
              ))}
        </Tabs>
      </Dialog>

      <Dialog show={isOpenTransactionSettings} onClose={() => setIsOpenTransactionSettings(false)} title='Transaction deadline'>
          {Object.values(categoriesComposition).map((posts, idx) => (
            
            <div key={idx}>

{
                    idx === 0 ?
<>
                <div className='flex mt-16 justify-between'>
                  {posts.map((post) => (
                    <Button 
                      key={post.id}
                      active={post.label === deadline}
                      className={clsxm(
                        'w-[24%] flex rounded-3xl h-[96px]',
                        'justify-start',
                      )}
                      variant='soft'
                      onClick={() => setDeadline(post.label)}
                    >
                      <div className='flex items-center text-white ml-8'> 
                          <h5>{post.label}</h5>
                      </div>
                    </Button>
                  ))}
                </div>
                <div className='flex w-full'>
                      <div className='flex justify-between mt-10 w-full'>
                        <Input id="custom-deadline" value={deadline} onChange={e => setDeadline(e.target.value)} className='after:[] w-full h-32 mr-8 text-left h5 pl-6 placeholder:text-white/60' autoFocus={true} type="number" placeholder="Custom deadline (mins)"/>
                        <Button disabled={deadline === '' && deadline !== undefined} onClick={() => setIsOpenAssetSettings(false)} className='w-[72px] h-32' variant='outline'><FiCheck width={24} height={24}/></Button>  
                      </div>   
                </div>
                </>
:undefined
}
            </div>

              ))}
      </Dialog>
  </>
  );
}
