import { Dialog as HeadlesDialog, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react';

export interface DialogProps {
  title: string;
  children: ReactNode;
  onClose: (value: boolean) => void;
  show: boolean;
}

export const Dialog: FC<DialogProps> = ({
  title,
  children,
  onClose,
  show
}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <HeadlesDialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gradient-to-t from-modal-50 via-modal-100 to-modal-200 drop-shadow-modal shadow-modal " />
        </Transition.Child>
      
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlesDialog.Panel className="w-full sm:max-w-sm md:max-w-[1320px] lg:max-w-[1320px] xl:max-w-[1320px] transform overflow-hidden text-center align-middle transition-all">
                <HeadlesDialog.Title
                  as="h3"
                >
                  {title}
                </HeadlesDialog.Title>
                {children}
              </HeadlesDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlesDialog>
    </Transition>
  )
}