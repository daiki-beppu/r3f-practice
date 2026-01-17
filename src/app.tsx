import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import {
  type Mesh,
  type Group,
  ACESFilmicToneMapping,
  LinearSRGBColorSpace,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { CustomObject } from "./components/custom-object";

extend({ OrbitControls });

export const App = () => (
  <div className="fixed top-0 left-0 w-dvw h-dvh overflow-hidden bg-blue-300">
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        outputColorSpace: LinearSRGBColorSpace,
        toneMapping: ACESFilmicToneMapping,
      }}
      camera={{ far: 200, fov: 45, near: 0.1, position: [3, 2, 6] }}
    >
      <Experience />
    </Canvas>
  </div>
);

const Experience = () => {
  const cubeRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  // const { camera, gl } = useThree();

  useFrame((_state, delta) => {
    if (cubeRef.current && groupRef.current) {
      // const angle = state.clock.elapsedTime;
      // state.camera.position.x = Math.sin(angle) * 8;
      // state.camera.position.y = Math.cos(angle) * 8;
      // state.camera.lookAt(0, 0, 0);

      cubeRef.current.rotation.y += delta;
      // groupRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      {/* マウスでのカメラ操作*/}
      {/* <orbitControls args={[camera, gl.domElement]} /> */}

      {/* ライト */}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <CustomObject />

      <group ref={groupRef}>
        {/* 球体 */}
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* 立方体 */}
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      {/* 地面 */}
      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
