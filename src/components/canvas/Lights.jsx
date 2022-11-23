export default function Lights() {
  return (
    <>
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
    </>
  )
}
