import { Tab } from '@headlessui/react'

import clsxm from '@/lib/clsxm';

export interface TabsProps {
  vertical?: boolean;
  disabled?: boolean;
  categories: Record<never, never>;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  categories,
  children
}) => {
  return (
  <div className="w-full px-2 py-16 sm:px-0">
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-3xl border-2 border-white/25">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              clsxm(
                'text-white/60 w-full rounded-3xl py-4 gradient-border-2',
                selected
                  ? 'border-gradient-r-gradient-light-transparent text-white' : 
                  'hover:border-gradient-r-gradient-light-transparent hover:text-white',
                  'active:border-gradient-r-gradient-light-transparent active:text-white',
                  'focus:border-gradient-r-gradient-light-transparent focus:text-white',
                  'disabled:opacity-20 disabled:border-gradient-r-gradient-light-transparent disabled:text-white',
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {children}
      </Tab.Panels>
    </Tab.Group>
  </div>
  )
}