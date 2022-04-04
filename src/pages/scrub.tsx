import { useRef, useEffect } from 'react'
import PageComponent from '../component'

const Scrub = (): JSX.Element => {
  const textRefs = useRef<HTMLParagraphElement[]>([])
  const shopersIconRef = useRef<HTMLImageElement>(null)
  const independentIconRef = useRef<HTMLImageElement>(null)
  const employersIconRef = useRef<HTMLImageElement>(null)

  const animationOnScroll = () => {
    const firstText = textRefs.current[0]
    const secondText = textRefs.current[1]

    if (firstText && secondText) {
      const position1stTextFromTop = firstText.getBoundingClientRect().top
      const firstTextRefHeight = firstText.offsetHeight
      const secondTextRefHeight = secondText.offsetHeight

      const duration = firstTextRefHeight + secondTextRefHeight
      let animationTime = -position1stTextFromTop

      // handle the scroll accuracy
      if (-position1stTextFromTop < 0) {
        animationTime = 0
      }
      if (-position1stTextFromTop > duration) {
        animationTime = duration
      }

      const getTransformProps = (deg: string, rotate: string, scale: string) => ({
        transform: `rotate(${deg}deg) translateX(200px) rotate(${rotate}deg) scale(${scale})`
      })

      const animationItems = [{
        ref: shopersIconRef.current,
        transformOptions: [
          getTransformProps('-120', '120', '1'),
          getTransformProps('0', '0', '1.354'),
          getTransformProps('120', '-120', '1'),
        ],
      },
      {
        ref: independentIconRef.current,
        transformOptions: [
          getTransformProps('0', '0', '1.354'),
          getTransformProps('120', '-120', '1'),
          getTransformProps('240', '-240', '1'),
        ],
      },
      {
        ref: employersIconRef.current,
        transformOptions: [
          getTransformProps('120', '-120', '1'),
          getTransformProps('240', '-240', '1'),
          getTransformProps('360', '-360', '1.354'),
        ],
      }]

      animationItems.forEach(({ ref, transformOptions }) => {
        const options = { duration, fill: 'both'} as KeyframeAnimationOptions
        
        const animation = ref?.animate(transformOptions, options)
        animation?.pause()
        animation!.currentTime = animationTime
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', animationOnScroll)

    return () => {
      window.removeEventListener('scroll', animationOnScroll)
    }
  }, [])

  return (
    <PageComponent
      title="Scrub animation"
      refs={{
        shopersIconRef,
        independentIconRef,
        employersIconRef,
        textRefs,
      }}
    />
  )
}

export default Scrub
