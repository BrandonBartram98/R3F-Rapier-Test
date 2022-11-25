import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, Debug } from '@react-three/rapier'
import MainText from './MainText'
import { Suspense } from 'react'
import CanvasHtml from './CanvasHtml'
import Balls from './Balls'
import { Player } from './Player'
import Lights from './Lights'
import Floor from './Floor'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
      ]}>
      <Canvas orthographic shadows dpr={[1, 2]} camera={{ zoom: 80, position: [-14, 14, 10], fov: 100 }} {...props}>
        {/* <OrbitControls /> */}
        <Suspense>
          <CanvasHtml />
          <Lights />
          {/* <gridHelper args={[30, 20, '#d6b4c7', '#d6b4c7']} /> */}
          <Physics gravity={[0, -10, 0]}>
            {children}
            <Player />
            <MainText />
            <Floor />
            <Balls />
            {props.isPerfActive ? <Perf colorBlind /> : null}
            {props.isPerfActive ? <Debug /> : null}
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  )
}
