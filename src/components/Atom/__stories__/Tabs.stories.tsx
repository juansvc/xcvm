import { Tab } from '@headlessui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { Tabs } from '@/components/Atom/Tabs';

export default {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  args: {
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [categories] = React.useState({
    
    //#region  //*=========== DUMMY REPLACE API ===========
    'Global': [
      {
        id: 1,
        owner: '0xslenderman',
        action: 'Compose',
        chain: 'Picasso',
        from: 'USDC',
        into: 'ETH',
        amount: 700,
        time: '1 day'
      },
      {
        id: 2,
        owner: "juan.vivanco",
        action: 'Compose',
        chain: 'Picasso',
        from: 'ETH',
        into: 'PICA',
        amount: 300,
        time: '1 day'
      },
    ],
    'My Transactions': [
      {
        id: 1,
        owner: '0xbrainjar',
        action: 'Compose',
        chain: 'Ethereum',
        from: 'ETH',
        into: 'PICA',
        amount: 400,
        time: '1 day'
      },
      {
        id: 2,
        owner: 'Cor',
        action: 'Compose',
        chain: 'Arbitrum',
        from: 'USDC',
        into: 'ETH',
        amount: 700,
        time: '1 day'
      },
    ],

    //#endregion  //*=========== DUMMY REPLACE API ===========
  })
  
  return(
    <Tabs categories={categories}>
      {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={clsxm(
                'rounded-xl py-20',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
                {posts.map((post) => (
                  <div className='pb-4'  key={post.id}>
                    <div className='bg-white/5 rounded-3xl py-6 pl-10'>
                      Demo Tabs
                    </div>
                  </div>
                ))}
            </Tab.Panel>
          ))}
    </Tabs>
  )
};

export const Default = Template.bind({});
Default.args = {};
