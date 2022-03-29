import { RefObject, MutableRefObject } from 'react'
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
import { renderText, textBlocks } from '../constants'

interface PageComponentProps {
  title: string
  refs: {
    shopersIconRef: RefObject<HTMLImageElement>
    independentIconRef: RefObject<HTMLImageElement>
    employersIconRef: RefObject<HTMLImageElement>
    textRefs: MutableRefObject<HTMLParagraphElement[]>
  }
}

const PageComponent = ({
  title,
  refs: {
    shopersIconRef,
    independentIconRef,
    employersIconRef,
    textRefs,
  }
}: PageComponentProps): JSX.Element => {
  const addRef = (ref: HTMLParagraphElement) => {
    if (ref && !textRefs.current.includes(ref)) {
      textRefs.current.push(ref)
    }
  }

  return (
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
        {textBlocks.map((text, i) => (
          <Text ref={(ref: HTMLParagraphElement) => addRef(ref)} key={i}> {/* TODO: fix key */}
            {text}
          </Text>
        ))}
      </TextPart>
    </Container>
    <Container color='yellow'>
      {renderText()}
    </Container>
  </Wrapper>
)}

export default PageComponent
