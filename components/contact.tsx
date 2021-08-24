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
      className='h-full flex items-center justify-center px-32'
    >
      <section className='flex flex-col items-end justify-center px-24 my-1 p-20 bg-secondary relative'>
        <button
          className='absolute right-11 top-10 flex items-center'
          onClick={copy}
          disabled={!text}
        >
          {isCopied && <p className='font-bold mr-5'>Copied!</p>}
          <MdContentCopy className='text-4xl' />
        </button>
        <section>
          <p className='text-6xl'>{text}</p>
        </section>
      </section>
    </section>
  );
}
