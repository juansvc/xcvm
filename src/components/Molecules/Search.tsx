import { FC } from "react";
import { FiSearch } from "react-icons/fi";

import clsxm from "@/lib/clsxm";

import { Input } from "@/components/Atom";

export interface SearchProps {
  placeholder?: string;
}

export const Search: FC<SearchProps> = ({placeholder = 'Search...'}) => {
  return (
    <div className="group focus-within:stroke-white relative">
        <div className="focus-within:stroke-white flex absolute inset-y-0 left-4 items-center pl-3 ">
            <FiSearch className="stroke-white/60 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white w-[20px] h-[20px]" width='20px' height='20px'/>
        </div>
        <Input id="default-search" type="search" placeholder={placeholder} autoFocus={true} className={clsxm(
          'block w-full mb-16 text-white text-left pl-[70px] placeholder:text-white/60 placeholder:hover:text-white placeholder:active:text-white placeholder:focus:text-white h-16 ',
        )}/>
    </div>
  )
}