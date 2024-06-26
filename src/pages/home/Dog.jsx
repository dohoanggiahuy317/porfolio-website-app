import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { useIsMobile } from "../../hooks";

const Dog = (props) => {
  const { isMobile } = useIsMobile();
  const gltf = useLoader(GLTFLoader, props.source);
  const groupRef = useRef();
  const modelRef = useRef();
  const { camera } = useThree();
  const [centerOffset, setCenterOffset] = useState(new THREE.Vector3());

  const scale = isMobile ? 1 : 1;

  useEffect(() => {
    if (modelRef.current) {
      // Calculate the bounding box of the model
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Set the center offset
      setCenterOffset(center);

      // Adjust camera position based on model size
      const maxDim = Math.max(size.x, size.y, size.z);
      camera.position.set(0, 0, maxDim * 2);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault />
      <spotLight position={[0, 10, -1000]} />
      <spotLight position={[0, 10, 1000]} />
      <spotLight position={[1000, 0, 0]} />
      <spotLight position={[-1000, 0, 0]} />
      <spotLight position={[0, -1000, 0]} />
      <pointLight color={"#f00"} position={[0, 0.6, 10]} distance="1.5" />
      <pointLight color={"#f00"} position={[0, -0.6, -10]} distance="1.5" />

      {isMobile ? null : (
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
        />
      )}
      <group ref={groupRef}>
        <primitive 
          object={gltf.scene} 
          scale={scale} 
          ref={modelRef}
          position={centerOffset.multiplyScalar(-1)}
        />
      </group>
    </>
  );
};

export default Dog;