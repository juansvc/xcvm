import Image from 'next/image';
import Link from 'next/link';
import { FaWallet } from "react-icons/fa";

import clsxm from '@/lib/clsxm';

import { Button } from '@/components/Atom/Button';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/compose', label: 'Compose', enabled: true },
  { href: '/explorer', label: 'Explorer', enabled: true },
  { href: '/', label: 'Earn' },
];

export default function Header() {
  return (
    <header className='sticky top-0z-50 select-none'>
      <div className='w-11/12 mx-auto flex h-32 items-center justify-between'>
        <Link href='/' passHref>
          <a><Image className='w-44 object-contain' alt='' src="/svg/xcvm.svg" height={26} width={70} /></a>
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label, enabled }) => (
              <li key={`${href}${label}`}>
                <h6 className={clsxm(
                    'text-white/60 mx-16',
                    'active:text-white',
                    'hover:text-white',
                    'focused:text-white',
                    enabled ?? 'text-white/20 hover:text-white/20'
                  )}>
                  <Link href={href} >
                    {label}
                  </Link>
                </h6>
              </li>
            ))}
          </ul>
        </nav>
        <Link href='/wallet' passHref>
          <a><Button className=' py-0 w-[64px] h-[64px] rounded-[24px]' variant='outline' icon={<FaWallet className='fill-white' height={20} width={20} />}/></a>
        </Link>
      </div>
    </header>
  );
}