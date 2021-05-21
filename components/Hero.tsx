import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
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
      className='min-h-screen flex items-center justify-center px-32'
    >
      <section className='flex gap-32 items-center justify-center px-24'>
        <div className='flex-1'>
          <h1 className='text-7xl font-bold mb-9'>
            Motivated to build and design amazing experiences
          </h1>
          <p className='text-4xl text-gray mb-9'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            adipiscing faucibus egestas vel quam dui.
          </p>
          <Link href='/'>
            <button className='bg-blue text-white py-2 px-8 rounded-lg'>
              contact
            </button>
          </Link>
        </div>
        <figure className='h-96  block'>
          <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
            <Lights />
            <Element position={[0, 0, 0]} />
            {/* <OrbitControls enableZoom={false} /> */}
          </Canvas>
        </figure>
      </section>
    </section>
  );
}
