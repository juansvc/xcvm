import Link from 'next/link';
import { FaDiscord,FaGithub,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='h-28 relative'>
    <footer className='w-11/12 absolute bottom-12 left-0 right-0 flex mx-auto h-auto items-center justify-between select-none mt-10'>
      <Link href='https://www.composable.finance/' passHref>
        <a target="_blank" rel="noopener noreferrer"><img className='object-contain' alt='' src="/svg/composable-light.svg" height={36} width={125.24} /></a>
      </Link>
      <div className='w-40'>
        <ul className='flex items-center justify-between space-x-4'>
          <li>
            <Link href='https://twitter.com/juansvivanco' passHref>
              <a target="_blank" className='text-white/60 hover:text-white' rel="noopener noreferrer"><FaTwitter height={24} width={24} /></a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/juansvc/' passHref>
              <a target="_blank" className='text-white/60 hover:text-white' rel="noopener noreferrer"><FaGithub height={24} width={24} /></a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
    </div>
    </>
  );
}