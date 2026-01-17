import { useEffect, useMemo, useRef } from "react";
import { DoubleSide, type BufferGeometry } from "three";

export const CustomObject = () => {
  // 3つの頂点を持つ三角形を10個
  const verticesCount = 10 * 3;

  // x, y, z の三軸なので * 3
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i += 1) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, [verticesCount]);

  const gemoetryRef = useRef<BufferGeometry>(null);

  useEffect(() => {
    if (gemoetryRef.current) {
      gemoetryRef.current.computeVertexNormals();
    }
  }, [positions]);

  return (
    <mesh>
      <bufferGeometry ref={gemoetryRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};
