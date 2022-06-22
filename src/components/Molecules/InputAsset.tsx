import { FC, useState } from "react";

import { Input, InputProps } from "@/components/Atom";

export interface InputAssetProps extends InputProps{
  children?: React.ReactNode;
  icon?: JSX.Element;
  label?: string;
}

export const InputAsset: FC<InputAssetProps> = (
  {
    children,
    icon,
    className,
    disabled
  }
) => {
  const [value, setValue] = useState('');

  return (
    <div className={`border border-gray-300 rounded-3xl h-36 px-3 py-2 relative ${className}`}>
      <label htmlFor="name" className="block text-sm mt-5 ml-6 text-white/60">
        Amount
      </label>
      <Input
        type="number"
        id="input-asset"
        className="block w-full border-0 bg-transparent p-0 text-white/60 placeholder-white/60 focus:ring-0 text-2xl mt-5 ml-6"
        placeholder="0.0"
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
      />
      <label htmlFor="name" className="block text-sm mt-1 ml-6 text-white/60">
        ${value === '' ? '0.0' : value}
      </label>
      <div className='absolute bottom-5 right-5'>
        {children}
      </div>
    </div> 
  )
}