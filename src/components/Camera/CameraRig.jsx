import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

const CameraRig = ({ children }) => {
  // to update state
  const group = useRef();

  // alowes us to execute code on every rendered frame
  useFrame((state, delta) => {
    // make the shirt look good on all diffrent screen sizes
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 2];

    if (isBreakpoint) {
      targetPosition[0] = 0;
    }

    if (isMobile) {
      targetPosition[1] = 0.2;
      targetPosition[2] = 2.5;
    } else targetPosition = [0, 0, 2];

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model ratation smoothly
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
