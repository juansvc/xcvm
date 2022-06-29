import { Popover } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode, useState } from 'react';
import { FaWallet } from 'react-icons/fa';

import { Button } from '@/components/Atom/Button';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Wallet } from '@/components/Organisms/Wallet';
import { getToken } from '@/defi/Tokens';
import { useConnectStorage } from '@/storage/useConnectStorage';


export interface LayoutProps {
  children: ReactNode;
}



export const Layout: FC<LayoutProps> = ({
  children,
}) => {

  const [connected, setConnected] = useConnectStorage(true, 'connected');
  
  
  return (
    <>
      <Header/>
      <div className='static float-right w-fit -mt-24 mr-[72px]'>
        {
          connected ?
            <Popover className="relative z-10">
              {({ open }) => (
                <>
                  <Popover.Button className='inline-flex items-center w-[64px] h-[64px] justify-center rounded-3xl py-6 border-gradient-r-gradient-light-transparent gradient-border-2 hover:border-gradient-r-gradient-light-colored'>
                    <FaWallet className='fill-white' height={20} width={20} />
                  </Popover.Button>
                  <Popover.Panel as="div" className="absolute left-[66px] mt-3 max-w-[446px] w-[446px] -translate-x-[446px] sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                      <>
                        <Wallet 
                          title='$0'
                          subtitle='[XCVM] 0xUsername'
                          image={<Image alt='' src="/images/face3.png" height={88} width={88} />}
                        >
                        <>
                          <div className='flex flex-col items-start p-0 order-2'>
                            {/* TODO: Make summary from API */}
                            <Button className='w-[350px] h-[72px] justify-between' icon={
                             <div className='flex'><div className='ml-8 mr-4 -mb-4'><Image src={getToken('dot_alt').icon as string} alt='' height={24} width={24} /></div>Dotsama</div>
                            } variant='outline'>
                              <div className='justify-end mr-8'>$0</div>
                            </Button>
                            <Button className='w-[350px] h-[72px] my-8 justify-between' icon={
                                <div className='flex'><div className='ml-8 mr-4 -mb-4'><Image src={getToken('eth_alt').icon as string} alt='' height={24} width={24} /></div>EVM</div>
                            } variant='outline'>
                              <div className='justify-end mr-8'>$0</div>
                            </Button>
                            <Button className='w-[350px] h-[72px] justify-between' icon={
                                <div className='flex'><div className='ml-8 mr-4 -mb-4'><Image src={getToken('cosmos_alt').icon as string} alt='' height={24} width={24} /></div>Cosmos</div>
                              } variant='outline'>
                                <div className='justify-end mr-8'>$0</div>
                              </Button>
                          </div>
                          <div className='flex flex-row -mt-6 p-0 order-3 items-center justify-center'>
                            <a className='text-white/60 hover:text-white' onClick={() => setConnected(false)}>Disconnect all</a>
                          </div>
                        </>
                        </Wallet>
                      </>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          :
            <div className='relative z-10'>
              <Link href='/' passHref>
                <a><Button className='py-0 w-[64px] h-[64px] rounded-[24px]' variant='outline' icon={<FaWallet className='fill-white' height={20} width={20} />}/></a>
              </Link>
            </div>
        }
      </div>
      {children}
      <Footer/>
    </>
  );
}
