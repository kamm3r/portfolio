import Link from 'next/link';
import { navigation } from '../utils/navigation';
import { CgClose } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';
import { Props } from '../interfaces/Props';

export default function MobileMenu({ open, toggle }: Props) {
  return (
    <>
      <section
        onClick={toggle}
        className={
          open
            ? 'fixed z-50 w-full h-full bg-primary grid place-items-center top-0 left-0 transition opacity-100'
            : 'hidden'
        }
      >
        <CgClose
          className='absolute top-5 right-6 cursor-pointer outline-none text-4xl'
          onClick={toggle}
        />
        <section className='grid grid-rows-4 text-center place-items-center'>
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
        </section>
      </section>
    </>
  );
}
