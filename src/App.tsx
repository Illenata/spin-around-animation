import React, { useState, useRef, useEffect } from 'react'
import Shopers from './images/icon-social-shoppers-big.svg'
import Independent from './images/icon-independent-brands-big.svg'
import Employers from './images/icon-employers-conscience-big.svg'
import {
  Wrapper,
  Container,
  Text,
  GlobeBackground,
  TextPart,
  ShopersIcon,
  IndependentIcon,
  EmployersIcon,
} from './app.styled'

const renderText = () => (
  <>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum corporis laborum nisi officia perspiciatis nostrum ipsam dolore delectus iste accusamus, recusandae nihil, voluptates facilis vero debitis non, odio illum!
    Eum quasi perferendis dolorem ducimus corporis non recusandae aliquam aperiam esse officiis! Eos nulla, culpa ipsam corporis, laudantium quaerat doloremque aliquam optio cupiditate odio asperiores laborum dignissimos incidunt molestiae commodi?
    <br/>
    <br/>
    Quibusdam nobis, ad rerum exercitationem repudiandae aperiam, placeat at amet inventore obcaecati fuga neque quae repellendus laudantium id maiores atque! At, debitis provident? Perferendis impedit cum distinctio voluptatem. Neque, sapiente.
    Laborum, soluta tenetur. Iure impedit cumque architecto nihil, fuga accusantium explicabo ad dicta quam, veniam voluptatibus ipsum neque amet? Saepe laborum blanditiis inventore perspiciatis reprehenderit, accusantium officiis minima nemo sequi!
    Culpa beatae velit ab, nemo ullam nulla ad dolore alias hic facilis consectetur corporis accusantium iusto. Maxime assumenda odit earum animi, beatae laboriosam. Tempora, eius quod? Blanditiis quod sint molestias?
    <br/>
    <br/>
    Nihil, est. Corrupti omnis quia voluptas, molestias eaque cum nam nisi reprehenderit vitae error. Necessitatibus nisi, doloribus accusamus eum cumque optio nobis fuga, minus qui blanditiis molestiae explicabo molestias placeat.
    Non, sunt optio consectetur quod provident magnam reprehenderit ad modi architecto quaerat blanditiis nihil ullam placeat aperiam autem animi nemo pariatur voluptatum. Quo eligendi autem iste aut numquam architecto dicta.
    <br/>
    <br/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum corporis laborum nisi officia perspiciatis nostrum ipsam dolore delectus iste accusamus, recusandae nihil, voluptates facilis vero debitis non, odio illum!
    Eum quasi perferendis dolorem ducimus corporis non recusandae aliquam aperiam esse officiis! Eos nulla, culpa ipsam corporis, laudantium quaerat doloremque aliquam optio cupiditate odio asperiores laborum dignissimos incidunt molestiae commodi?
    <br/>
    <br/>
    Quibusdam nobis, ad rerum exercitationem repudiandae aperiam, placeat at amet inventore obcaecati fuga neque quae repellendus laudantium id maiores atque! At, debitis provident? Perferendis impedit cum distinctio voluptatem. Neque, sapiente.
    Laborum, soluta tenetur. Iure impedit cumque architecto nihil, fuga accusantium explicabo ad dicta quam, veniam voluptatibus ipsum neque amet? Saepe laborum blanditiis inventore perspiciatis reprehenderit, accusantium officiis minima nemo sequi!
    Culpa beatae velit ab, nemo ullam nulla ad dolore alias hic facilis consectetur corporis accusantium iusto. Maxime assumenda odit earum animi, beatae laboriosam. Tempora, eius quod? Blanditiis quod sint molestias?
    <br/>
    <br/>
    Nihil, est. Corrupti omnis quia voluptas, molestias eaque cum nam nisi reprehenderit vitae error. Necessitatibus nisi, doloribus accusamus eum cumque optio nobis fuga, minus qui blanditiis molestiae explicabo molestias placeat.
    Non, sunt optio consectetur quod provident magnam reprehenderit ad modi architecto quaerat blanditiis nihil ullam placeat aperiam autem animi nemo pariatur voluptatum. Quo eligendi autem iste aut numquam architecto dicta.
  </>
)

const textBlock = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim consequatur velit culpa repellendus sit! Asperiores aliquid labore odio ullam, commodi aut inventore cupiditate quos vero veniam. Expedita, harum sed! Accusantium, amet animi hic nihil saepe magni quam distinctio veritatis, doloremque excepturi atque eum sit quo quis illum praesentium nulla, minus delectus unde! Illum reiciendis molestias sapiente odio rem corporis. Dolorum provident excepturi nisi fuga perferendis totam, in ipsum repudiandae est quam, natus inventore saepe quis, accusantium eos esse voluptatem. Eligendi dolor magni suscipit! Repudiandae pariatur reiciendis amet quae suscipit? Maxime expedita beatae laudantium quo voluptas perferendis, nihil, cumque recusandae, tempore at nisi aperiam similique ab molestias eum. Nesciunt quis nulla temporibus, delectus labore quasi dignissimos ad. Voluptas, eligendi commodi. Qui fuga doloremque autem aperiam! Cupiditate fugiat doloribus repudiandae labore, amet consequuntur nam facilis quaerat atque deleniti praesentium modi sequi perspiciatis repellat tenetur nulla maxime illum ducimus quasi nesciunt voluptates? Ex, nemo eligendi. Iusto ab sint totam, rerum error deserunt iste mollitia architecto voluptatibus deleniti itaque ea aliquam magni adipisci eius modi vero, cum nam doloremque blanditiis odio. Quia, vero. Quia reprehenderit totam eaque tempora excepturi provident eligendi dicta molestias, impedit laboriosam natus, expedita nostrum ratione dolor ut vitae exercitationem consequatur. At nisi minus, dignissimos laboriosam itaque eum laudantium iure?'

const App = (): JSX.Element => {
  const firstTextRef = useRef<HTMLParagraphElement>(null)
  const secondTextRef = useRef<HTMLParagraphElement>(null)
  const shopersIconRef = useRef<HTMLImageElement>(null) as React.RefObject<HTMLImageElement>
  const independentIconRef = useRef<HTMLImageElement>(null) as React.RefObject<HTMLImageElement>
  const employersIconRef = useRef<HTMLImageElement>(null) as React.RefObject<HTMLImageElement>

  const animationOnScroll = () => {
    if (firstTextRef.current && secondTextRef.current) {
      const position1stTextFromTop = firstTextRef.current.getBoundingClientRect().top
      const firstTextRefHeight = firstTextRef.current.offsetHeight
      const secondTextRefHeight = secondTextRef.current.offsetHeight

      const duration = firstTextRefHeight + secondTextRefHeight
      let animationTime = -position1stTextFromTop

      // fix the scroll accuracy
      if (-position1stTextFromTop < 0) {
        animationTime = 0
      }
      if (-position1stTextFromTop > duration) {
        animationTime = duration
      }

      if (animationTime >= 0 && animationTime <= duration) {
        const options = { duration, fill: 'both'} as KeyframeAnimationOptions

        const shopersAnimation = shopersIconRef?.current?.animate(
          [
            {transform: `rotate(-120deg) translateX(200px) rotate(120deg) scale(1)`},
            {transform: `rotate(0deg) translateX(200px) rotate(0deg) scale(1.354)`},
            {transform: `rotate(120deg) translateX(200px) rotate(-120deg) scale(1)`},
          ],
          options,
        )

        const independentAnimation = independentIconRef?.current?.animate(
          [
            {transform: 'rotate(0deg) translateX(200px) rotate(0deg) scale(1.354)'},
            {transform: 'rotate(120deg) translateX(200px) rotate(-120deg) scale(1)'},
            {transform: 'rotate(240deg) translateX(200px) rotate(-240deg) scale(1)'},
          ],
          options,
        )

        const employersAnimation = employersIconRef?.current?.animate(
          [
            {transform: 'rotate(120deg) translateX(200px) rotate(-120deg) scale(1)'},
            {transform: 'rotate(240deg) translateX(200px) rotate(-240deg) scale(1)'},
            {transform: 'rotate(360deg) translateX(200px) rotate(-360deg) scale(1.354)'},
          ],
          options,
        )

        shopersAnimation?.pause()
        independentAnimation?.pause()
        employersAnimation?.pause()

        shopersAnimation!.currentTime = animationTime
        independentAnimation!.currentTime = animationTime
        employersAnimation!.currentTime = animationTime
      }
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', animationOnScroll)

    return () => {
      window.removeEventListener('scroll', animationOnScroll)
    }
  }, [])

  return (
    <Wrapper>
      <Container color='pink'>
        {renderText()}
      </Container>
      <Container color='lightblue'>
        <GlobeBackground>
          <ShopersIcon src={Shopers} alt="Shopers" ref={shopersIconRef} />
          <IndependentIcon src={Independent} alt="Independent" ref={independentIconRef} />
          <EmployersIcon src={Employers} alt="Employers" ref={employersIconRef} />
        </GlobeBackground>
        <TextPart>
          <Text ref={firstTextRef}>{textBlock}</Text>
          <Text ref={secondTextRef}>{textBlock}</Text>
          <Text>{textBlock}</Text>
        </TextPart>
      </Container>
      <Container color='yellow'>
        {renderText()}
      </Container>
    </Wrapper>
  )
}

export default App
