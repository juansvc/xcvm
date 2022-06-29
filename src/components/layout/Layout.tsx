import { Web3Provider } from '@ethersproject/providers';
import { Popover } from '@headlessui/react';
import { useWeb3React } from '@web3-react/core';
import BN from 'bn.js';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode, useState } from 'react';
import { FaWallet } from 'react-icons/fa';

import { Button } from '@/components/Atom/Button';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Wallet } from '@/components/Organisms/Wallet';

import { getToken } from '@/defi/Tokens';
import { getNewConnection } from '@/pages/api/connectionHelper';
import { sendAndWaitForSuccess } from '@/pages/api/polkadot';
import { useConnectStorage } from '@/storage/useConnectStorage';

import { EthBalance } from '../Defi/EthBalance';

export interface LayoutProps {
  children: ReactNode;
}

//#region  //*=========== fetch balance eth ===========


export const Balance = () => {
  const { active } = useWeb3React<Web3Provider>()

  return (
    <div>
      {active && EthBalance()}
    </div>
  )
}

//#endregion  //*=========== fetch balance eth ===========


export const Layout: FC<LayoutProps> = ({
  children,
}) => {

  const [connected, setConnected] = useConnectStorage(true, 'connected');
  //#region  //*=========== fetch balance dot ===========
  const [balanceDot, setBalanceDot] = useState('0');
  
  const test = async () => {
  
    
    const { newClient, newKeyring } = await getNewConnection();
    const api = newClient;  
    const prom = await newClient.rpc.assets.balanceOf('1', '5yNZjX24n2eg7W6EVamaTXNQbWCwchhThEaSWB7V3GRjtHeL');
    console.log("Prom Result",prom.toString());
  
    setBalanceDot(prom.toString())
  
    const walletAlice = newKeyring.addFromUri("//Alice");
    const walletBob = newKeyring.addFromUri("//Bob");
  
    const paraAsset = 1;
    const paraDest = walletBob.publicKey;
    const paraAmount = api.createType('u128', new BN("100000000000"));
    const paraKeepAlive = true;
  
    const {data:[result]} = await sendAndWaitForSuccess(
      api,
      walletAlice,
      api.events.balances.Deposit.is,
      api.tx.assets.transfer(paraAsset, paraDest, paraAmount, paraKeepAlive)
    );
      console.log("transaction result", result.toString())    
  }
  
  //#endregion  //*=========== fetch balance dot ===========
  test()
  
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
                          title={balanceDot}
                          subtitle='[XCVM] 0xUsername'
                          image={<Image alt='' src="/images/face3.png" height={128} width={128} />}
                        >
                        <>
                          <div className='flex flex-col items-start p-0 order-2'>
                            {/* TODO: Make summary from API */}
                            <Button className='w-[350px] h-[72px] justify-between' icon={
                             <div className='flex'><div className='ml-8 mr-4 -mb-4'><Image src={getToken('dot_alt').icon as string} alt='' height={24} width={24} /></div>Dotsama</div>
                            } variant='outline'>
                              <div className='justify-end mr-8'>{balanceDot}</div>
                            </Button>
                            <Button className='w-[350px] h-[72px] my-8 justify-between' icon={
                                <div className='flex'><div className='ml-8 mr-4 -mb-4'><Image src={getToken('eth_alt').icon as string} alt='' height={24} width={24} /></div>EVM</div>
                            } variant='outline'>
                              <div className='justify-end mr-8'><Balance/></div>
                            </Button>
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
