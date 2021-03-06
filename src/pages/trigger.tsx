import { useRef, useEffect, useState } from 'react'
import useIntersectionObserver from '../use-intersection-observer'
import PageComponent from '../component'

const AnimationOnTrigger = (): JSX.Element => {
  const textRefs = useRef<HTMLParagraphElement[]>([])
  const shopersIconRef = useRef<HTMLImageElement>(null)
  const independentIconRef = useRef<HTMLImageElement>(null)
  const employersIconRef = useRef<HTMLImageElement>(null)
  const [animationDirection, setAnimationDirection] = useState<'normal' | 'reverse'>('normal')
  const [countAnimation, setCountAnimation] = useState<number | null>(null)
  const [isUnobserveble, setIsUnobserveble] = useState(false)

  const animationOnScroll = (direction: 'normal' | 'reverse', count: number) => {
    const getTransformProps = (deg: string, rotate: string, scale: string) => ({
      transform: `rotate(${deg}deg) translateX(200px) rotate(${rotate}deg) scale(${scale})`
    })

    const animationItems1 = [{
      ref: shopersIconRef.current,
      transformOptions: [
        getTransformProps('-120', '120', '1'),
        getTransformProps('0', '0', '1.354'),
      ],
    },
    {
      ref: independentIconRef.current,
      transformOptions: [
        getTransformProps('0', '0', '1.354'),
        getTransformProps('120', '-120', '1'),
      ],
    },
    {
      ref: employersIconRef.current,
      transformOptions: [
        getTransformProps('120', '-120', '1'),
        getTransformProps('240', '-240', '1'),
      ],
    }]
  
    const animationItems2 = [{
      ref: shopersIconRef.current,
      transformOptions: [
        getTransformProps('0', '0', '1.354'),
        getTransformProps('120', '-120', '1'),
      ],
    },
    {
      ref: independentIconRef.current,
      transformOptions: [
        getTransformProps('120', '-120', '1'),
        getTransformProps('240', '-240', '1'),
      ],
    },
    {
      ref: employersIconRef.current,
      transformOptions: [
        getTransformProps('240', '-240', '1'),
        getTransformProps('360', '-360', '1.354'),
      ],
    }]

    const animationItems = count === 1 ? animationItems1 : animationItems2

    animationItems.forEach(({ ref, transformOptions }) => {
      const options = { duration: 300, fill: 'both', direction } as KeyframeAnimationOptions
      
      ref?.animate(transformOptions, options)
    })
  }

  let lastScrollTop = 0
  const detectScrollDirection = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
      setAnimationDirection('normal')
    } else {
      setAnimationDirection('reverse')
    }
    lastScrollTop = st <= 0 ? 0 : st
  }

  useEffect(() => {
    window.addEventListener('scroll', detectScrollDirection)

    return () => {
      window.removeEventListener('scroll', detectScrollDirection)
      setIsUnobserveble(true)
    }
  }, [])

  useEffect(() => {
    if (countAnimation) {
      animationOnScroll(animationDirection, countAnimation)
    }
  }, [countAnimation, animationDirection])

  const args = [0, 1, 2]

  useIntersectionObserver(textRefs.current, args, '0px', 1, setCountAnimation, () => null, isUnobserveble)

  return (
    <PageComponent
      title="Animation on trigger"
      refs={{
        shopersIconRef,
        independentIconRef,
        employersIconRef,
        textRefs,
      }}
    />
  )
}

export default AnimationOnTrigger
