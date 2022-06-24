import { FC } from "react";

import clsxm from "@/lib/clsxm";

import { Input } from "@/components/Atom";

// export type SearchProps = InputProps;

export const Search: FC = () => {
  return (
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="ml-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <Input id="default-search" type="search" placeholder="Search..." autoFocus={true} className={clsxm(
          'block w-full mb-16 text-white text-center placeholder:text-white h-16 ',
        )}/>
    </div>
  )
}