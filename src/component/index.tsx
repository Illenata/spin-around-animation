import { RefObject } from 'react'
import Shopers from '../images/icon-social-shoppers-big.svg'
import Independent from '../images/icon-independent-brands-big.svg'
import Employers from '../images/icon-employers-conscience-big.svg'
import {
  Title,
  Wrapper,
  Container,
  Text,
  GlobeBackground,
  TextPart,
  ShopersIcon,
  IndependentIcon,
  EmployersIcon,
} from './page-component.styled'
import { renderText, textBlock } from '../constants'

interface PageComponentProps {
  title: string
  refs: {
    shopersIconRef: RefObject<HTMLImageElement>
    independentIconRef: RefObject<HTMLImageElement>
    employersIconRef: RefObject<HTMLImageElement>
    firstTextRef?: RefObject<HTMLParagraphElement>
    secondTextRef: RefObject<HTMLParagraphElement>
    thirdTextRef?: RefObject<HTMLParagraphElement>
  }
}

const PageComponent = ({
  title,
  refs: {
    shopersIconRef,
    independentIconRef,
    employersIconRef,
    firstTextRef,
    secondTextRef,
    thirdTextRef,
  }
}: PageComponentProps): JSX.Element => (
  <Wrapper>
    <Title>{title}</Title>
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
        <Text ref={thirdTextRef}>{textBlock}</Text>
      </TextPart>
    </Container>
    <Container color='yellow'>
      {renderText()}
    </Container>
  </Wrapper>
)

export default PageComponent
