import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../../store";

const Shirt = ({ logoPosition }) => {
  const { nodes, materials } = useGLTF("./tshirt.glb");
  const shirtRef = useRef();
  const decalRef = useRef();
  const snap = useSnapshot(state);
  const logoTexture = useTexture(snap.logoDecal || "");

  // to apply the color smoothly
  useFrame((state, delta) => easing.dampC(materials["FABRIC_1_FRONT_4193.001"].color, snap.color.value, 0.25, delta));

  // Update the rotation angle every frame
  useFrame(({ clock }) => {
    // calculate the rotation angle based on the elapsed time since the component was mounted
    const newAngle = (clock.getElapsedTime() * 0.6) % (Math.PI * 2);
    shirtRef.current.rotation.y = newAngle;
  });

  return (
    <group>
      {nodes && materials && (
        <mesh
          ref={shirtRef}
          castShadow
          geometry={nodes.tshirt.geometry}
          material={materials["FABRIC_1_FRONT_4193.001"]}
          material-roughness={1}
          dispose={null}
          scale={0.5}
        >
          {logoPosition === "middle" && snap.logoDecal && (
            <Decal
              position={[0, 0.08, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.2}
              // render logo
              map={logoTexture}
              // insure to render on top of the other objects in the scene
              depthTest={true}
              depthWrite={true}
              ref={decalRef}
            />
          )}
          {logoPosition === "right" && snap.logoDecal && (
            <Decal
              position={[0.1, 0.2, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              // render logo
              map={logoTexture}
              // insure to render on top of the other objects in the scene
              depthTest={true}
              depthWrite={true}
              ref={decalRef}
            />
          )}
          {logoPosition === "left" && snap.logoDecal && (
            <Decal
              position={[-0.15, 0.2, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              // render logo
              map={logoTexture}
              // insure to render on top of the other objects in the scene
              depthTest={true}
              depthWrite={true}
              ref={decalRef}
            />
          )}
          {logoPosition === "back" && snap.logoDecal && (
            <Decal
              position={[0, 0.08, -0.18]}
              rotation={[0, 0, 0]}
              scale={0.2}
              // render logo
              map={logoTexture}
              // insure to render on top of the other objects in the scene
              depthTest={true}
              depthWrite={true}
              ref={decalRef}
            />
          )}
        </mesh>
      )}
    </group>
  );
};

export default Shirt;
