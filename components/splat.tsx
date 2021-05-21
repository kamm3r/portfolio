import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, RoundedBox, Sphere } from '@react-three/drei';

// const Model = () => {
//   const gltf = useGLTF('model.glb', true);
//   return <primitive object={gltf.scene} dispose={null} />;
// };

export default function Element(props: any) {
  const mesh = useRef<any>();
  useFrame(
    () => (
      (mesh.current.rotation.x += 0.025), (mesh.current.rotation.y += 0.025)
    )
  );

  return (
    <group>
      {/* <Model /> */}
      {/* <RoundedBox
        {...props}
        ref={mesh}
        args={[1, 1, 1]}
        radius={0.1}
        smoothness={4}
        scale={[20, 20, 20]}
      > */}
      {/* <meshPhongMaterial attach='material' color='#762b2b' /> */}
      {/* <sphereGeometry attach='geometry' args={[1, 16, 200]} />
        <meshPhongMaterial attach='material' color='#5A6BFF' />
      </RoundedBox> */}
      {/* <Canvas> */}
      <Sphere
        {...props}
        ref={mesh}
        visible
        // position={[30, 5, 0]}
        args={[1, 16, 200]}
        scale={[15, 15, 15]}
      >
        <MeshDistortMaterial
          {...props}
          ref={mesh}
          color='#00A38D'
          attach='material'
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0}
        />
      </Sphere>
      {/* </Canvas> */}
    </group>
  );
}
