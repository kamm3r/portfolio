import { useEffect, useState } from 'react';
import { MdContentCopy } from 'react-icons/md';

export default function Contact() {
  const text: string = 'marcokammer59@gmail.com';
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isCopied) setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <section
      id='contact'
      className='h-full flex items-center justify-center px-5 xl:px-32 w-full'
    >
      <section className='flex flex-col items-center justify-center px-16 py-16 xl:px-24 my-1 xl:py-20 bg-secondary relative w-full'>
        <button
          className='absolute right-10 top-5 xl:right-11 xl:top-10 flex items-center'
          onClick={copy}
          disabled={!text}
        >
          {isCopied && <p className='font-bold mr-5'>Copied!</p>}
          <MdContentCopy className='text-2xl xl:text-4xl' />
        </button>
        <section>
          <p className='text-base text-black xl:text-6xl'>{text}</p>
        </section>
      </section>
    </section>
  );
}
