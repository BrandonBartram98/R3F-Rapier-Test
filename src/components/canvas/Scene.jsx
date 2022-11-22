import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, KeyboardControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, CuboidCollider, Debug } from '@react-three/rapier'
import { EffectComposer } from '@react-three/postprocessing'
import MainText from './MainText'
import { Suspense } from 'react'
import CanvasHtml from './CanvasHtml'
import Balls from './Balls'
import { Player } from './Player'

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

          <gridHelper args={[30, 20, '#d6b4c7', '#d6b4c7']} />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 20, 20]}
            angle={0.1}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            shadow-camera-near={0.1}
            shadow-camera-far={120}
            shadow-camera-left={-20}
            shadow-camera-right={30}
            shadow-camera-top={30}
            shadow-camera-bottom={-20}
          />
          <Physics gravity={[0, -10, 0]}>
            {children}
            <Player />
            <MainText />
            <RigidBody position={[0, -1, 0]} type='fixed' colliders='false'>
              <CuboidCollider restitution={0.1} args={[1000, 1, 1000]} />
            </RigidBody>

            <mesh receiveShadow renderOrder={1000} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[100, 100]}></planeGeometry>
              <shadowMaterial transparent opacity={0.1} />
            </mesh>
            <Balls />
            {props.isPerfActive ? <Perf colorBlind /> : null}
            {props.isPerfActive ? <Debug /> : null}
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  )
}
