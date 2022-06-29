import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';


const links = [
  { href: '', label: 'Dashboard' },
  { href: '/compose', label: 'Compose', enabled: true },
  { href: '/explorer', label: 'Explorer', enabled: true },
  { href: '', label: 'Earn' },
];

export default function Header() {
  
  return (
    <header className='sticky top-0z-50 select-none'>
      <div className='w-11/12 mx-auto flex h-32 items-center justify-between'>
        <Link href='/compose' passHref>
          <a><Image className='w-44 object-contain' alt='' src="/svg/xcvm.svg" height={53} width={135} /></a>
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
                    enabled ?? 'text-white/20 hover:text-white/20 hover:cursor-not-allowed cursor-not-allowed'
                  )}>
                    {enabled ? 
                    <Link href={href} >
                      {label}
                    </Link>
                    :
                      label
                    }
                </h6>
              </li>
            ))}
          </ul>
        </nav>
        <div className='-z-10 ml-[72px]'></div>
      </div>
    </header>
  );
}