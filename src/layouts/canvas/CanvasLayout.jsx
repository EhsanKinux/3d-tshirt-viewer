import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, Environment } from '@react-three/drei'
import CameraRig from './parts/CanvasCameraRig/CameraRig'
import Models from './parts/Model/Models'
import './canvas.css'
// import { useSnapshot } from 'valtio'
// import state from 'store'
// import { getContrastingColor } from 'config/helpers'

const CanvasLayout = () => {
  // const snap = useSnapshot(state);
  return (
    <div 
      className='canvasWrapper' 
      // style={{backgrounColor: getContrastingColor(snap.color.value)}}
    >
      <Canvas
        shadows
        camera={{position: [0,0,5], fov:35}}
        // preserve the buffers
        gl={{preserveDrawingBuffer: true}}
        raycaster={{far:3.5}}
      >
        <ambientLight intensity={0.35} />
        <Environment preset='city' />
        <CameraRig>
          <Center>
            <Suspense fallback={null} >
              <Models  />
            </Suspense>
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  )
}

export default CanvasLayout