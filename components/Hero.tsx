import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import Element from './splat';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  );
};

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-x-hidden'
    >
      <div className='z-10 flex flex-col items-start justify-center mx-10 xl:mx-52'>
        <h1 className='text-5xl xl:text-7xl font-bold mb-9'>
          Motivated to build and design amazing experiences
        </h1>
        <p className='text-xl xl:text-4xl text-gray mb-9'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          adipiscing faucibus egestas vel quam dui.
        </p>
        <Link href='/'>
          <button className='bg-db text-white py-3 px-8 rounded-lg text-xl font-bold'>
            contact
          </button>
        </Link>
      </div>
      <div className='absolute z-0 block w-screen h-screen'>
        {/* <Canvas camera={{ position: [0, 90, 0], fov: 90 }}>
          <Lights />
          <Element position={[0, 0, 0]} />
          <Element position={[10, 5, 15]} />
          <Element position={[-10, -10, -10]} />
          <Element position={[-30, -20, -20]} />
          <Element position={[-15, 5, 5]} />
          <Element position={[-5, -50, -5]} />
        </Canvas> */}
      </div>
    </section>
  );
}
