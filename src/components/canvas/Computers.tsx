import { Suspense, useEffect, useState } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Computers() {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene}></primitive>
    </mesh>
  );
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<></>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
