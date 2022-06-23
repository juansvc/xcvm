import { FC } from "react";
import { FaChevronLeft } from "react-icons/fa";

export interface WalletProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
  image: JSX.Element;
  back?: () => void;
  className?: string;
}

export const Wallet: FC<WalletProps> = ({
  title,
  subtitle,
  children, 
  image,
  back,
  className
}) => {

  return (
    <div className={`w-[480px] h-[700px] bg-white/5 rounded-3xl shadow backdrop-blur flex items-center justify-center ${className}`}>
      <>
        {back ? 
          <FaChevronLeft className='absolute top-12 left-14 hover:cursor-pointer w-5 h-5' onClick={back} />
        :undefined}
        <div className='flex flex-col items-center p-0 gap-12'>
          <div className='flex flex-col items-center p-0 gap-4 w-[310px] h-[266] order-1'>
            <div className='flex flex-col items-center p-0'>
              {image}
            </div>
            <div className='flex flex-col items-center p-0 text-center'>
              <h4>{title}</h4>
              <h6 className='text-white/60 pt-4'>{subtitle}</h6>
            </div>
          </div>
          {children}
        </div>
      </>
    </div>
  );
}
