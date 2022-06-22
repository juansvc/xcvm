import { FC, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export const Input: FC<InputProps> = ({id, ...rest}) => {
  return (
    <>
      <input id={id} {...rest}></input>
    </>
  )
}