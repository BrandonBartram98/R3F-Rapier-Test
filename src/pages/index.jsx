// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
//const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Components
import StackIcons from '@/components/canvas/StackIcons'
import Floor from '@/components/canvas/Floor'
import InstancedMeshes from '@/components/canvas/InstancedMeshes'
import MainText from '@/components/canvas/MainText'
// Libraries
import { Physics } from '@react-three/rapier'

// Dom components go here
export default function Page(props) {
  return <></>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = () => (
  <>
    <StackIcons />
    <Physics gravity={[0, -10, 0]}>
      <MainText />
      <Floor />
      <InstancedMeshes />
    </Physics>
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Brandon Bartram' } }
}
