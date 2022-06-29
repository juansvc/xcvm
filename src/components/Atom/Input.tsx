import { FC, InputHTMLAttributes } from "react";

import clsxm from "@/lib/clsxm";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  className?: string;
}

export const Input: FC<InputProps> = ({id, className, ...rest}) => {
  return (
    <>
      <input id={id} autoFocus={true} className={clsxm(
          'bg-transparent rounded-3xl border-white/25 border-2',
          'placeholder:text-white/60 placeholder:hover:text-white placeholder:active:text-white placeholder:focus:text-white',
          'focus:border-white/25',
          'disabled:opacity-20 disabled:border-gradient-r-gradient-light-transparent',
          className
        )} {...rest}></input>
    </>
  )
}