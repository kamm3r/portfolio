import Link from 'next/link';
import { navigation } from '../utils/navigation';
import { AiFillGithub } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import { Props } from '../interfaces/Props';

export default function Nav({ toggle }: Props) {
  return (
    <>
      <header className='fixed flex items-center justify-center w-full h-16 px:5 z-50 xl:px-32 xl:w-full'>
        <section className='relative flex items-center justify-between w-full px-5 xl:px-24'>
          <section className=''>
            <Link href='/pubes'>
              <a className='text-2xl font-medium'>Marco Kammer</a>
            </Link>
          </section>

          <div className=' flex items-center sm:hidden'>
            <button
              onClick={toggle}
              className='inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset'
            >
              <CgMenuRight className='text-4xl' />
            </button>
          </div>

          <nav className='hidden md:flex md:w-1/3  md:items-center md:justify-evenly'>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className='p-4 text-2xl'>{item.name}</a>
              </Link>
            ))}
            <Link href='https://github.com/kammers'>
              <a target='_blank'>
                <AiFillGithub className='text-3xl ml-4' />
              </a>
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
