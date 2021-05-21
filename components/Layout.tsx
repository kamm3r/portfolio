import React, { ReactNode } from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = 'This is the default title',
}: Props) {
  return (
    <>
      <section className='bg-primary'>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <header className='fixed flex items-center justify-center w-full h-16 px-32 '>
          <section className='flex items-center justify-between w-full px-24'>
            <section className=''>
              <Link href='#hero'>
                <a className='text-2xl font-medium'>Marco Kammer</a>
              </Link>
            </section>
            <nav className='w-1/3 flex items-center justify-evenly'>
              <Link href='#myWork'>
                <a className='text-2xl'>My Work</a>
              </Link>
              <Link href='#mySkills'>
                <a className='text-2xl'>My Skills</a>
              </Link>
              <Link href='#contact'>
                <a className='text-2xl'>Contact</a>
              </Link>
              <Link href='https://github.com/kammers'>
                <a target='_blank'>
                  <AiFillGithub className='text-3xl ml-4' />
                </a>
              </Link>
            </nav>
          </section>
        </header>
        <div>{children}</div>
        <footer className='flex items-center justify-center h-24'>
          <p>2021 Marco Kammer</p>
        </footer>
      </section>
    </>
  );
}
