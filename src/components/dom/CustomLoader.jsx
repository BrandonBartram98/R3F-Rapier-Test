import { useRef, useEffect } from 'react'
import { useProgress, Html } from '@react-three/drei'
import { useSpring, useTransition, animated } from 'react-spring'

export default function CustomLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  const barAnimation = useSpring({ to: { width: progress + '%' }, from: { width: '0%' }, config: {} })

  console.log('active state ' + active)

  useEffect(() => {
    if (!active) {
      console.log('active state ' + active)
    }
  }, [active])

  return active ? null : (
    <animated.div className='absolute w-screen h-screen bg-white z-50'>
      <animated.div
        style={barAnimation}
        className='flex w-full justify-end font-bold tracking-tighter font-antonio text-[12rem] bg-pink-300 h-1/3 pr-10'>
        {progress}
      </animated.div>
    </animated.div>
  )
}
