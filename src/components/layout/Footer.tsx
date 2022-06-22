import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord,FaGithub,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='w-11/12 flex mx-auto h-auto items-center justify-between select-none mt-10'>
      <Link href='https://composable.finance/' passHref>
        <a target="_blank" rel="noopener noreferrer"><Image className='object-contain' alt='' src="/svg/composable-light.svg" height={36} width={125.24} /></a>
      </Link>
      <div className='w-40'>
        <ul className='flex items-center justify-between space-x-4'>
          <li>
            <Link href='https://twitter.com/ComposableFin' passHref>
              <a target="_blank" rel="noopener noreferrer"><FaTwitter height={24} width={24} /></a>
            </Link>
          </li>
          <li>
            <Link href='https://discord.gg/composable/' passHref>
              <a target="_blank" rel="noopener noreferrer"><FaDiscord height={24} width={24} /></a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/ComposableFi/' passHref>
              <a target="_blank" rel="noopener noreferrer"><FaGithub height={24} width={24} /></a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}