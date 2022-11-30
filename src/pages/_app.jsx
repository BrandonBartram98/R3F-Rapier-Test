import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })
const CustomLoader = dynamic(() => import('@/components/dom/CustomLoader'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  const [isPerfActive, setPerfActive] = useState(false)

  return (
    <>
      <Header title={pageProps.title} />
      <CustomLoader />

      <Layout isPerfActive={isPerfActive} setPerfActive={setPerfActive} eventSource={ref} ref={ref}>
        {Component?.canvas && (
          <Scene isPerfActive={isPerfActive} className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
        <Component {...pageProps} />
        {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
         * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
         * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
      </Layout>
    </>
  )
}
