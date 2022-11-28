import { useRef, forwardRef, useState, Suspense } from 'react'
import { mergeRefs } from 'react-merge-refs'
import Overlay from '@/components/dom/Overlay'
import SocialBar from '@/components/dom/SocialBar'

const Layout = forwardRef(({ children, isPerfActive, setPerfActive }, ref) => {
  const localRef = useRef()

  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='antialiased absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-gradient-to-b from-pink-50 via-pink-100 to-pink-300 text-zinc-900'>
      <Overlay isPerfActive={isPerfActive} setPerfActive={setPerfActive} />
      <SocialBar />
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
