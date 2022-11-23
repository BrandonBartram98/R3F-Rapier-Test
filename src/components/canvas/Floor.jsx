import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function Floor() {
  return (
    <>
      <RigidBody position={[0, -1, 0]} type='fixed' colliders='false'>
        <CuboidCollider restitution={0.1} args={[1000, 1, 1000]} />
      </RigidBody>
      <mesh receiveShadow renderOrder={1000} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]}></planeGeometry>
        <shadowMaterial transparent opacity={0.1} />
      </mesh>
    </>
  )
}
