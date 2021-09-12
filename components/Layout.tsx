import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AiFillGithub } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';

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
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <section className='bg-primary'>
        <header className='fixed flex items-center justify-center w-full h-16 px:5 xl:px-32 xl:w-full'>
          <section className='flex items-center justify-between w-full px-5 xl:px-24'>
            <section className=''>
              <Link href='#hero'>
                <a className='text-2xl font-medium'>Marco Kammer</a>
              </Link>
            </section>
            <CgMenuRight className='text-4xl' />
            <nav className='hidden xl:flex xl:w-1/3  xl:items-center xl:justify-evenly'>
              <Link href='#projects'>
                <a className='text-2xl'>Projects</a>
              </Link>
              <Link href='#aboutMe'>
                <a className='text-2xl'>About me</a>
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
