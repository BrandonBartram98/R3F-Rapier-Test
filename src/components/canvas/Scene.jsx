import { Canvas } from '@react-three/fiber'
import { EffectComposer, Pixelation, Vignette } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'
import Lights from './Lights'

export default function Scene({ children, isPerfActive, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas orthographic shadows dpr={[1, 2]} camera={{ zoom: 80, position: [-14, 14, 10], fov: 100 }} {...props}>
      {/* <EffectComposer disableNormalPass><Pixelation</EffectComposer> */}
      <Suspense>
        <Lights />
        {children}
        {isPerfActive ? <Perf colorBlind /> : null}
      </Suspense>
    </Canvas>
  )
}
