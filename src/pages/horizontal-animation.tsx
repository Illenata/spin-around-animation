import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Title } from '../component/page-component.styled'
import Cat from '../images/cat.avif'

const containerHeight = 2100

const Container = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  max-width: 1200px;
  display: flex;
  height: ${containerHeight}px;
  box-sizing: border-box;
`

const Image = styled.img`
  margin-right: 40px;
  width: 600px;
  height: fit-content;
`

const fontSize = 300
const Letter = styled.p`
  margin: 0;
  font-size: ${fontSize}px;
  color: darkblue;
  text-transform: uppercase;
`

const HorizontalAnimation = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const letterRefs = useRef<HTMLParagraphElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const items = [imageRef.current, ...letterRefs.current]

    gsap.set(imageRef.current, { x: 1000, autoAlpha: 0, scale: 2 })
    gsap.set(letterRefs.current, { x: 1000, autoAlpha: 0, fontSize: `${fontSize * 2}px` })

    const setAnimation = (
      item: HTMLParagraphElement | HTMLImageElement | null,
      x: number,
      autoAlpha: number,
      scale: number,
      fontSize: string,
      ease: string,
    ) => {
      gsap.to(item, { x, autoAlpha, scale, fontSize, ease, duration: 1.5 })
    }

    items.forEach((item, i) => {
      ScrollTrigger.create({
        start: () => i === 0 ? 100 : containerHeight / 4 * i,
        end: () => containerHeight / 4 * (i + 1),
        onToggle: self => self.isActive && setAnimation(item, 0, 1, 1, `${fontSize}px`, 'power3.out'),
        onLeaveBack: () => setAnimation(item, 1000, 0, i === 0 ? 2 : 1, `${fontSize * 2}px`, 'power3.in'),
      })
    })
    
    ScrollTrigger.create({
      pin: containerRef.current,
      start: 1,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill()
      })
    }
  }, [])

  const word = 'cat'
  const lettersArray = word.split('')

  return (
    <>
      <Title>
        Horizontal gsap Animation
      </Title>
      <Container ref={containerRef}>
        <Image src={Cat} alt={word} ref={imageRef} />
        {lettersArray.map((letter: string) => (
          <Letter ref={(ref: HTMLParagraphElement) => letterRefs.current.push(ref)} key={letter}>
            {letter}
          </Letter>
        ))}
      </Container>
    </>
  )
}

export default HorizontalAnimation
