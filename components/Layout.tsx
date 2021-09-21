import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import { Props } from '../interfaces/Props';

export default function Layout({
  children,
  title = 'This is the default title',
  toggle,
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

      <Nav toggle={toggle} />
      <div>{children}</div>
      <footer className='flex items-center justify-center h-24'>
        <p>2021 Marco Kammer</p>
      </footer>
    </>
  );
}
