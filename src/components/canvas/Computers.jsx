import React, { Suspense, useEffect, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";
import * as THREE from 'three';

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./camping/scene.gltf");
  const [mixer, setMixer] = useState(null);

  useEffect(() => {
    if (computer.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(computer.scene);
      setMixer(mixer);

      computer.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play(); // Start playing the animation immediately
        action.setLoop(THREE.LoopRepeat, Infinity); // Set the animation to loop
      });
    }
  }, [computer]);

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {/* if code breaks, change a letter in the 'scene' word then change it back in this code: object={computer.scene} then save */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.2 : 0.25}
        position={isMobile ? [0, -3.4, -0.2] : [-1.5, -3.7, -0.6]}
        rotation={[0.03, -0.0, -0.07]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size of a phone
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;