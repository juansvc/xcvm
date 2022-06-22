import Image from 'next/image';
import { FC, useState } from "react";

import clsxm from "@/lib/clsxm";

import { Input, InputProps } from "@/components/Atom";

import { getToken } from "@/defi/Tokens";

export interface InputAssetProps extends InputProps{
  children?: React.ReactNode;
  assetIcon?: string;
  label?: string;
}

export const InputAsset: FC<InputAssetProps> = (
  {
    children,
    assetIcon,
    className,
    disabled
  }
) => {
  const [value, setValue] = useState('');

  return (
    <div className={clsxm(
      'border rounded-3xl h-36 px-3 py-2 relative',
      className,
      disabled ? 'border-gray-300/30 text-white/30' :
      'border-gray-300 text-white/60'
    )}>
      <label htmlFor="name" className="block text-sm mt-5 ml-6">
        Amount
      </label>
      {assetIcon &&
        <div className='inline-flex ml-6'><Image src={getToken(assetIcon).icon} width={20} height={20} alt='' /></div>
      }
      <div className='inline-flex flex-col'>
        <Input
          type="number"
          id="input-asset"
          className={`block w-full border-0 bg-transparent p-0 focus:ring-0 text-2xl mt-5 ml-6 
          ${disabled ? 'placeholder-white/30' : 'placeholder-white/60'}`}
          placeholder="0.0"
          onChange={e => setValue(e.target.value)}
          disabled={disabled}
        />
        <label htmlFor="name" className="block text-sm mt-1 ml-6">
          ${value === '' ? '0.0' : value}
        </label>
      </div>
      <div className='absolute bottom-5 right-5'>
        {children}
      </div>
    </div> 
  )
}