import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Atom";

export default function HomePage() {


  return (
    <div className="flex w-[100vw] h-[100vh] px-[8%] justify-center items-center box">
      <div className="absolute left-0 top-0 right-0 bottom-auto z-[1] flex w-[100%] h-[120px] p-[8%] justify-between items-center">
        <div className="flex w-[200px] justify-center items-center">
          <Image src="/svg/xcvm.svg" width={200} height={200} loading="lazy" alt="" className="max-w-[100%] align-middle inline-block"/>
        </div>
        <Link href='/compose' passHref>
          <a className="flex py-5 px-16 justify-center items-center">
            <Button className='py-0 w-80 h-[85px] rounded-[24px] text-xl'>Launch XCVM</Button>
          </a>
        </Link>
      </div>
      <div className="relative z-[1] flex flex-col items-center">
        <h1 className="my-0 text-9xl">xcvm</h1>
        <p className="h6 centered">Composing interoperable DeFi through cross-chain smart contracts</p>
      </div>
      <div className="absolute w-[100%] h-[100%] opacity-[0.46] blur-[20px] mix-blend-normal overflow-hidden">
        <video autoPlay={true} loop={true} muted={true} playsInline={true}
        className="bg-cover bg-[50% 50%] absolute m-auto w-[100%] h-[100%] right-[-100%] bottom-[-100%] top-[-100%] left-[-100%] object-cover z-[-100] inline-block align-baseline">
          <source src="/images/background-xcvm.mp4"/>
            <source src="/images/background-xcvm.webm"/>
        </video>
      </div>
    </div>
  );
}
