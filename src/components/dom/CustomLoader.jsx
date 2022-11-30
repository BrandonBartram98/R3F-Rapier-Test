import { useRef, useEffect } from 'react'
import { useProgress, Html } from '@react-three/drei'
import { useSpring, useTransition, animated, Transition } from 'react-spring'

export default function CustomLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  const barAnimation = useSpring({ to: { width: progress + '%' }, from: { width: '0%' }, config: {} })

  const transitions = useTransition(active, {
    from: { right: '0rem' },
    enter: {},
    leave: { right: '-125%' },
    delay: 600,
    config: { duration: 1000 },
  })

  return transitions(
    (style, item) =>
      item && (
        <animated.div style={style} className='absolute w-screen h-screen z-50'>
          <animated.div style={barAnimation} className='flex w-full justify-end bg-pink-300 h-1/3 '>
            <animated.p className='font-bold tracking-tighter font-antonio text-[12rem] pr-10'>{progress}</animated.p>
          </animated.div>
        </animated.div>
      ),
  )
}
