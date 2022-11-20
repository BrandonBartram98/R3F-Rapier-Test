import { MathUtils } from 'three'
import { useState, useRef, useEffect } from 'react'
import { Center, GradientTexture, Text3D, useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CuboidCollider, Debug } from '@react-three/rapier'

export default function MainText() {
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    // text.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    // text.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    // text.current.position.z += Math.cos(t) * 0.025
  })

  return (
    <Center scale={[1, 0.8, 1]} position-y={0.25}>
      <RigidBody type='kinematicPosition' colliders={false} canSleep>
        <Text3D
          castShadow
          bevelEnabled
          position-x={1.25}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.5}
          letterSpacing={-0.05}
          height={0.5}
          font={'./Inter_Regular.json'}>
          {`Creative`}
          <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={['hotpink', 'white']} />
          </meshBasicMaterial>
        </Text3D>
        <CuboidCollider position={[1.5, 0, 1.3]} args={[0.2, 0.3, 1.25]} />
      </RigidBody>
      <RigidBody type='kinematicPosition' colliders={false} canSleep>
        <Text3D
          castShadow
          bevelEnabled
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1}
          letterSpacing={-0.05}
          height={0.25}
          font={'./Inter_Regular.json'}>
          {`Developer`}
          <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={['hotpink', 'white']} />
          </meshBasicMaterial>
        </Text3D>
        <CuboidCollider position={[0.5, 0, 3]} args={[0.5, 0.32, 3]} />
      </RigidBody>
    </Center>
  )
}
