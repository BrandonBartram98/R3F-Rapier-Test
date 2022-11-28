import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, Debug } from '@react-three/rapier'
import MainText from './MainText'
import { Suspense } from 'react'
import CanvasHtml from './CanvasHtml'
import Balls from './InstancedMeshes'
import { Player } from './Player'
import Lights from './Lights'
import Floor from './Floor'

export default function Scene({ children, isPerfActive, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas orthographic shadows dpr={[1, 2]} camera={{ zoom: 80, position: [-14, 14, 10], fov: 100 }} {...props}>
      <Suspense>
        <CanvasHtml />
        <Lights />
        <Physics gravity={[0, -10, 0]}>
          {children}
          <MainText />
          <Floor />
          <Balls />
          {isPerfActive ? <Perf colorBlind /> : null}
          {isPerfActive ? <Debug /> : null}
        </Physics>
      </Suspense>
    </Canvas>
  )
}
