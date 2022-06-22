import { Disclosure as DisclosureHeadless } from "@headlessui/react";
import { FC, ReactNode } from "react";
import { FiChevronUp } from "react-icons/fi";

import clsxm from "@/lib/clsxm";

export interface DisclosureProps {
  title: string;
  children: ReactNode;
  disabled?: boolean;
}

export const Disclosure: FC<DisclosureProps> = ({
  title,
  children,
  disabled
}) => {
  return (
    <div className={`pt-8 mx-auto rounded-3xl ${disabled && 'cursor-not-allowed pointer-events-none select-none'}`}>
      <DisclosureHeadless>
        {({ open }) => (
          <>
            <DisclosureHeadless.Button className={clsxm(
                  'flex w-full justify-between  bg-white/5 h-16 px-6 py-5 text-white/60 p',
                  open ? 'rounded-b-none rounded-t-3xl' :
                  'rounded-3xl'
                )}>
              <span>{title}</span>
              <FiChevronUp
                className={clsxm(
                  'h-6 w-6 text-white',
                  open ? 'rotate-180 transform' : ''
                )}
              />
            </DisclosureHeadless.Button>
            <DisclosureHeadless.Panel className='px-6 py-5 bg-white/5 rounded-b-3xl text-white/60 p'>
                {children}
            </DisclosureHeadless.Panel>
          </>
        )}
      </DisclosureHeadless>
    </div>
  )
}