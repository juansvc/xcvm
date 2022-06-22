import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiChevronUp,FiPercent,FiPlus } from "react-icons/fi";

import clsxm from '@/lib/clsxm';

import { Button } from '@/components';
import Layout from '@/components/layout/Layout';
import { Dialog } from '@/components/Molecules/Dialog';
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
  const [disabled, setDisabled] = useState(true)
  const [enableExecute, setEnableExecute] = useState(false)
  const [selectedNetworkFrom, setSelectedNetworkFrom] = useState('')
  const [selectedAssetFrom, setSelectedAssetFrom] = useState('')
  const [selectedNetworkInto, setSelectedNetworkInto] = useState('')
  const [selectedAssetInto, setSelectedAssetInto] = useState('')
  const [selected, setSelected] = useState('')

  useEffect(() => {
    if (selectedNetworkFrom !== '' && selectedAssetFrom !== '') {
      setDisabled(false);
    }
    if (selectedNetworkFrom !== '' && selectedAssetFrom !== '' && selectedNetworkInto !== '' && selectedAssetInto !== '') {
      setEnableExecute(true);
    }
    
  }, [selectedAssetFrom, selectedNetworkFrom, selectedAssetInto, selectedNetworkInto]);

  return (
    <>
      <Layout>
        <main>
          <section className='w-8/12 mx-auto mt-8'>
            <div className='flex text-left'>
              <h3 className='mt-4 font-normal'>
                COMPOSE
              </h3>
            </div>
            <div>
              <div className='mt-10'>
                <div className='w-full h-32 mt-6'>
                  <h5 className='text-white/60 mb-5'>from</h5>
                  <div className='flex justify-between'>
                    <InputAsset id='input-asset' className='w-11/12'>
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
                    disabled && 'opacity-40 cursor-not-allowed'
                  )}>
                  <div className='flex justify-between'>
                    <h5 className='text-white/60 mb-5'>Into</h5>

                  </div>
                  <div className='flex justify-between'>
                    <InputAsset disabled={disabled} id='input-asset' className='w-11/12'>
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
                    <Button className='w-[72px] h-36' variant='outline'><FiPlus width={24} height={24}/></Button>     
                  </div>
                </div>
              </div>
            </div>

      <div className=" pt-8 mx-auto rounded-3xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <FiChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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
