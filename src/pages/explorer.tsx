import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { GoLinkExternal } from "react-icons/go";

import { Tabs } from '@/components';
import { Layout } from '@/components/layout/Layout';
import { Search } from '@/components/Molecules/Search';

import { getNetwork } from '@/defi/Networks';
import { getToken } from '@/defi/Tokens';

export default function Explorer() {
  return (
    <Layout>
      <main>
        <section className='w-8/12 mx-auto mt-8'>
          <div className='flex text-left'>
            <h3 className='mt-4'>
              EXPLORER
            </h3>
          </div>
          <div>
            <ExplorerContainer/>
          </div>
        </section>
      </main>
    </Layout>
  );
}


export function ExplorerContainer() {
  const [categories] = useState({
    
    //#region  //*=========== DUMMY REPLACE API ===========
    'Global': [
      {
        id: 1,
        owner: '0xslenderman',
        action: 'Compose',
        chain: 'picasso',
        from: 'usdc',
        into: 'eth',
        amount: 700,
        time: '1 day'
      },
      {
        id: 2,
        owner: "juan.vivanco",
        action: 'Compose',
        chain: 'picasso',
        from: 'eth',
        into: 'pica',
        amount: 300,
        time: '1 day'
      },
    ],
    'My Transactions': [
      {
        id: 1,
        owner: '0xbrainjar',
        action: 'Compose',
        chain: 'cosmos',
        from: 'eth',
        into: 'pica',
        amount: 400,
        time: '1 day'
      },
      {
        id: 2,
        owner: 'Cor',
        action: 'Compose',
        chain: 'arbitrum',
        from: 'usdc',
        into: 'eth',
        amount: 700,
        time: '1 day'
      },
    ],

    //#endregion  //*=========== DUMMY REPLACE API ===========
  })

  return (
    <Tabs categories={categories}>
      {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className='pt-16'
            >
              <form>   
                <Search/>
              </form>
              {posts.map((post) => (
                <div className='pb-4'  key={post.id}>
                  <div className='bg-white/5 rounded-3xl border-2 border-transparent hover: py-6 pl-10'>
                    <table className="table-fixed w-full">
                        <thead>
                          <tr className='text-left text-white/60'>
                            <th>Owner</th>
                            <th>Action</th>
                            <th>Chain</th>
                            <th>From</th>
                            <th>Into</th>
                            <th>Amount</th>
                            <th>Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{post.owner}</td>
                            <td>{post.action}</td>
                            <td>
                              <div className='mr-2 inline-flex relative top-[3px]'><Image src={getNetwork(post.chain).icon} width={20} height={20} alt='' /></div>
                              {getNetwork(post.chain).name}
                            </td>
                            <td>
                              <div className='mr-2 inline-flex relative top-[3px]'><Image src={getToken(post.from).icon} width={20} height={20} alt='' /></div>
                              {getToken(post.from).symbol}
                              <GoLinkExternal className='inline-flex ml-2 mb-[3px]'/>
                            </td>
                            <td>
                              <div className='mr-2 inline-flex relative top-[3px]'><Image src={getToken(post.into).icon} width={20} height={20} alt='' /></div>
                              {getToken(post.into).symbol}
                              <GoLinkExternal className='inline-flex ml-2 mb-[3px]'/>
                            </td>
                            <td>
                              <div className='mr-2 inline-flex relative top-[3px]'><Image src={getToken('usdc').icon} width={20} height={20} alt='' /></div>
                              {post.amount} USDC
                            </td>
                            <td>{post.time} ago</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
    </Tabs>
  )
}