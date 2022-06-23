import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiPercent,FiPlus } from "react-icons/fi";
import { GoLinkExternal } from 'react-icons/go';
import { RiFileCopyLine } from "react-icons/ri";

import clsxm from '@/lib/clsxm';

import { Button } from '@/components';
import { Layout } from '@/components/layout/Layout';
import { Dialog } from '@/components/Molecules/Dialog';
import { Disclosure } from '@/components/Molecules/Disclosure';
import { InputAsset } from '@/components/Molecules/InputAsset';
import { Search } from '@/components/Molecules/Search';

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
  { id: 4, label: 'ksm' },
  { id: 5, label: 'dot'},
  { id: 6, label: 'cosmos'},
];

export default function Compose() {
  const [isOpenNetwork, setIsOpenNetwork] = useState(false)
  const [isOpenAsset, setIsOpenAsset] = useState(false)
  const [stepper, setStepper] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [enableExecute, setEnableExecute] = useState(true)
  const [selectedNetworkFrom, setSelectedNetworkFrom] = useState('')
  const [selectedAssetFrom, setSelectedAssetFrom] = useState('')
  const [selectedNetworkInto, setSelectedNetworkInto] = useState('')
  const [selectedAssetInto, setSelectedAssetInto] = useState('')
  const [selected, setSelected] = useState('')

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
                    <h5 className='text-white/60 mb-5'>from</h5>
                    <div className='flex justify-between'>
                      <InputAsset assetIcon={selectedAssetFrom !== '' ? selectedAssetFrom : undefined} id='input-asset' className='w-11/12'>
                        <>
                          {(selectedNetworkFrom !== '' && selectedAssetFrom !== '') &&
                            <Button className='h-10 px-4 mx-2' variant='secondary' onClick={() => ({})}><FiPercent width={18} height={18}/></Button>
                          }
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
                      <Button className='w-[72px] h-36' variant='outline'><FiPlus width={24} height={24}/></Button>     
                    </div>
                  </div>
                  <div className={clsxm(
                      'w-full mt-28',
                      disabled && 'cursor-not-allowed'
                    )}>
                    <div className='flex justify-between'>
                      <h5 className='text-white/60 mb-5'>Into</h5>
  
                    </div>
                    <div className='flex justify-between'>
                      <InputAsset disabled={disabled} assetIcon={selectedAssetInto !== '' ? selectedAssetInto : undefined} id='input-asset' className='w-11/12'>
                      <>
                          {(selectedNetworkInto !== '' && selectedAssetInto !== '') &&
                            <Button disabled={disabled} className='h-10 px-4 mx-2' variant='secondary' onClick={() => ({})}><FiPercent width={18} height={18}/></Button>
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
                        </>
                      </InputAsset> 
                      <Button disabled={disabled} className='w-[72px] h-36' variant='outline'><FiPlus width={24} height={24}/></Button>     
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
                <div className='flex justify-between p my-3'>
                  <span className='text-white/60'>Deadline</span>
                  <span>5 mins</span>
                </div>
                <div className='flex justify-between p my-3'>
                  <span className='text-white/60'>AMM</span>
                  <span>Uniswap, Sushiswap</span>
                </div>
                <div className='flex justify-between p'>
                  <span className='text-white/60'>Slippage</span>
                  <span>0.1%</span>
                </div>
              </Disclosure>
              <Button variant='primary' className='w-full mt-8' disabled={enableExecute}>Execute</Button>
            </div>
          </section>
        </main>
      </Layout>

      <Dialog show={isOpenNetwork} onClose={() => setIsOpenNetwork(false)} title='Select Network'>
        <div className="mt-12">
          <Search/>
        </div>
        <div className="mt-[72px]">
          {networks.map(({ id, label }) => (
            <Button 
              key={id} 
              className={`w-[424px] ${id === 2 && 'm-6'} inline-flex justify-start pl-8`} 
              variant='outline' 
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
          <Search/>
        </div>
        <div className="mt-[72px]">
          {assets.map(({ id, label }) => (
            <Button 
              key={id} 
              className={`w-[424px] h-24 ${(id === 2 || id === 5) && 'mx-6 my-4'} justify-between relative inline-flex pl-8`} 
              variant='outline' 
              icon={<div className='pt-1'><Image src={getToken(label).icon} width={32} height={32} alt='' /></div>}
              onClick={() => { setIsOpenAsset(false); selected === 'from' ? setSelectedAssetFrom(label) :  selected === 'into' ? setSelectedAssetInto(label) : undefined}}
            >
                <h6 className='absolute left-20'>{getToken(label).name}</h6>
                <div className='flex-col flex mr-8'>
                  <h6>76,546</h6>
                  <span>$76,546</span>
                </div>
            </Button>
          ))}
        </div>
      </Dialog>
  </>
  );
}
