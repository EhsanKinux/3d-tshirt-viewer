import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./CanvasLayout.css";
import { Suspense, useEffect, useState } from "react";
import Shirt from "../components/Models/Shirt";
import CameraRig from "../components/Camera/CameraRig";

const positions = ["middle", "right", "left", "back"];

const CanvasLayout = () => {
  const [currentPosition, setCurrentPosition] = useState("middle");

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % positions.length;
      setCurrentPosition(positions[idx]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="canvas_wrapper">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
        raycaster={{ far: 3.5 }}
      >
        <ambientLight intensity={0.35} />
        <Environment preset="city" />
        <CameraRig>
          <Center>
            <Suspense fallback={"Loading..."}>
              <Shirt logoPosition={currentPosition} />
            </Suspense>
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default CanvasLayout;
