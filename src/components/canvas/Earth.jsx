import React, { Suspense, useEffect, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  const [mixer, setMixer] = useState(null);

  useEffect(() => {
    if (earth.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(earth.scene);
      setMixer(mixer);

      earth.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.timeScale = 1; // Increase the value to speed up the animation
        action.play(); // Start playing the animation immediately
        action.setLoop(THREE.LoopRepeat, Infinity); // Set the animation to loop
      });
    }
  }, [earth]);

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor='black' />
      <pointLight intensity={2} />
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;