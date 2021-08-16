import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export default function Element(props: any) {
  const mesh = useRef<any>();

  useFrame((state) => {
    const et = state.clock.elapsedTime;
    mesh.current.position.y = Math.sin((et + 1 * 2000) / 2) * 10;
    mesh.current.rotation.x = Math.sin((et + 2 * 2000) / 3) / 10;
    mesh.current.rotation.y = Math.cos((et + 3 * 2000) / 2) / 10;
    mesh.current.rotation.z = Math.sin((et + 4 * 2000) / 3) / 10;
  });

  return (
    <group {...props}>
      <RoundedBox
        {...props}
        ref={mesh}
        args={[1, 1, 1]}
        radius={0.1}
        smoothness={4}
        scale={[20, 20, 20]}
      >
        <meshPhongMaterial attach='material' color='#5fffaf' />
      </RoundedBox>
    </group>
  );
}
