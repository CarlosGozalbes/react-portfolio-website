import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";

function Dog(props) {
  const { scene } = useGLTF("/dog.glb");
  return <primitive object={scene} {...props} />;
}

function Zoom() {
  useFrame((state) => {
    
    state.camera.updateProjectionMatrix();
  });
}

export default function Doog() {
  return (
    <Canvas style={{height:'35vh', width:'35vw'}} className='d-flex justify content center'   camera={{ position: [2.5, 2.5, -2.5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <Dog
        position={[-0.1, -0.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.23}
      />
      <Environment preset="city" />
      <OrbitControls />
      <Zoom />
    </Canvas>
  );
}
