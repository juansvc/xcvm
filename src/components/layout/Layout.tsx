import { Popover } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
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
      <div className='static float-right w-fit -mt-24 mr-16'>
        {
          connected ?
            <Popover className="relative z-10">
              {({ open }) => (
                <>
                  <Popover.Button className='inline-flex items-center w-[64px] h-[64px] justify-center rounded-3xl py-6 border-gradient-r-gradient-light-transparent gradient-border-2 hover:border-gradient-r-gradient-light-colored'>
                    <FaWallet className='fill-white' height={20} width={20} />
                  </Popover.Button>
                  <Popover.Panel as="div" className="absolute left-1/2 mt-3 w-screen max-w-sm -translate-x-1/2 px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                      <>
                        <Wallet 
                          title='$684,265'
                          subtitle='[XCVM] 0xUsername'
                          image={<Image alt='' src="/images/face3.png" height={128} width={128} />}
                        >
                        <>
                          <div className='flex flex-col items-start p-0 order-2'>
                            {/* TODO: Make summary from API */}
                            <Button className='w-[350px] h-[72px]' icon={
                              <Image src={getToken('dot_alt').icon as string} alt='' height={24} width={24} />
                            } variant='outline'>Dotsama</Button>
                            <Button className='w-[350px] h-[72px] my-8' icon={
                              <Image src={getToken('eth_alt').icon as string} alt='' height={24} width={24} />
                            } variant='outline'>EVM</Button>
                            <Button className='w-[350px] h-[72px]' icon={
                              <Image src={getToken('cosmos_alt').icon as string} alt='' height={24} width={24} />
                            } variant='outline'>Cosmos</Button>
                          </div>
                          <div className='flex flex-row p-0 order-3 items-center justify-center'>
                            <a onClick={() => setConnected(false)}>Disconect all</a>
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
              <Link href='/wallet' passHref>
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
