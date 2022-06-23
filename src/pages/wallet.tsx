import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/components';
import { Layout } from '@/components/layout/Layout';
import { Wallet } from '@/components/Organisms/Wallet';

import { getToken } from "@/defi/Tokens";


export default function InitWallet() {
  const [ step, setStep ] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  }

  const nextStep = () => {
    setStep(step + 1);
  }

  const Connect = () => (
    <Wallet 
      title='Wallets'
      subtitle='Connect your Dotsama, EVM and Cosmos wallets to continue'
      image={<Image alt='' src="/images/face3.png" height={128} width={128} />}
      >
        <>
          <div className='flex flex-row items-start p-0 order-2'>
            <Button className='w-[350px] h-[72px]' icon={
              <div className='inline-flex'>
                <div className='pt-1'><Image src={getToken('dot_alt').iconGray as string} alt='' height={20} width={20} /></div>
                <div className='mx-2 pt-1'><Image src={getToken('eth_alt').iconGray as string} alt='' height={20} width={20} /></div>
                <div className='pt-1'><Image src={getToken('cosmos_alt').iconGray as string} alt='' height={20} width={20} /></div>
              </div>
            } variant='outline' onClick={nextStep}>Connect</Button>
          </div>
          {/* TODO: Component for Mini Stepper */}
          <div className='flex flex-row p-0 order-3 items-center justify-center'>
            <Image src={getToken('dot_alt').iconEmpty as string} alt='' height={24} width={24} />
            <div className='w-24 pb-[2px]'><div className='absolute border-2 border-white/20 w-24'></div></div>
            <Image src={getToken('eth_alt').iconEmpty as string} alt='' height={24} width={24} />
            <div className='w-24 pb-[2px]'><div className='absolute border-2 border-white/20 w-24'></div></div>
            <Image src={getToken('cosmos_alt').iconEmpty as string} alt='' height={24} width={24} />
          </div>
        </>
    </Wallet>
  );

  const Dotsama = () => (
    <Wallet 
      title='Dotsama'
      subtitle='Select your Dotsama wallet'
      image={<Image src={getToken('dot_alt').icon} alt='' height={64} width={64} />}
      back={prevStep}
      >
        <>
          <div className='flex flex-row items-start p-0 order-2'>
            <Button className='w-[350px] h-[72px]' icon={
              <div className='pt-1'><Image src='/icons/polkadotjs.svg' alt='' height={20} width={20} /></div>
            } variant='outline' onClick={nextStep}>Polkadot.js</Button>
          </div>
          {/* TODO: Component for Mini Stepper */}
          <div className='flex flex-row p-0 order-3 items-center justify-center'>
            <Image src={getToken('dot_alt').icon} alt='' height={24} width={24} />
            <div className='w-24 pb-[2px]'><div className='absolute border-2 border-white/60 w-24'></div></div>
            <Image src={getToken('eth_alt').iconEmpty as string} alt='' height={24} width={24} />
            <div className='w-24 pb-[2px]'><div className='absolute border-2 border-white/20 w-24'></div></div>
            <Image src={getToken('cosmos_alt').iconEmpty as string} alt='' height={24} width={24} />
          </div>
        </>
    </Wallet>
  );

  const Evm = () => (
    <Wallet 
      title='EVM'
      subtitle='Select your EVM wallet'
      image={<Image src={getToken('eth_alt').icon} alt='' height={64} width={64} />}
      back={prevStep}
      >
        <>
          <div className='flex flex-row items-start p-0 order-2'>
            <Button className='w-[350px] h-[72px]' icon={
              <div className='pt-1'><Image src='/icons/metamask.svg' alt='' height={20} width={20} /></div>
            } variant='outline'>Metamask</Button>
          </div>
          {/* TODO: Component for Mini Stepper */}
          <div className='flex flex-row p-0 order-3 items-center justify-center'>
            <Image src={getToken('dot_alt').icon} alt='' height={24} width={24} />
            <div className='w-24 pb-[2px]'><div className='absolute border-2 border-white/60 w-24'></div></div>
            <Image src={getToken('eth_alt').icon} alt='' height={24} width={24} />
            <div className='w-24 pb-[2px]'><div className='absolute border-2 border-white/60 w-24'></div></div>
            <Image src={getToken('cosmos_alt').iconEmpty as string} alt='' height={24} width={24} />
          </div>
        </>
    </Wallet>
  );

  return (
    <Layout>
      <main>
        <section className='flex flex-row justify-center items-center pt-16 gap-3'>
          {
            {
              1: <Connect />,
              2: <Dotsama />,
              3: <Evm />
            }[step]
          }
        </section>
      </main>
    </Layout>
  );
}