import styled from 'styled-components'
import Image from 'next/image'
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom'
import CopyButton from '../buttons/CopyButton'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import {
  extraSmallScreen,
  largeScreen,
  mediumScreen,
  smallScreen,
} from '../../style/sizeVariables'

function Hero({ myEmail }) {
  return (
    <Section>
      <Container>
        <div>
          <Name>I'm Igor</Name>

          <Heading>Web Developer</Heading>
        </div>
        <Text>
          I'll build your website to be fast and beautiful so that your visitors
          can get the value you're offering them without any confusion.
        </Text>
        <ButtonContainer>
          <ButtonOne href="/CV/IgorTrnkoCV.pdf" download>
            <VerticalAlignBottomIcon fontSize="large" />
            Download CV
          </ButtonOne>

          <CopyButton buttonText={myEmail} Icon={MailOutlineIcon} />
        </ButtonContainer>
      </Container>

      <ImageContainer>
        <Image
          src="/images/hero-img.png"
          alt="Cover-photo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </ImageContainer>
    </Section>
  )
}

const Section = styled.section`
  background: linear-gradient(
    270deg,
    rgba(53, 73, 94, 0.26) 0%,
    #35495e 52.4%,
    #35495e 100%
  );
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 0 12rem;

  @media only screen and (min-width: ${largeScreen}) {
    padding: 0 20rem;
  }

  @media only screen and (max-width: ${mediumScreen}) {
    background: linear-gradient(
      270deg,
      rgba(53, 73, 95, 0.9) 0%,
      rgba(53, 73, 95) 50%,
      rgba(53, 73, 95, 0.9) 100%
    );
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: ${extraSmallScreen}) {
    height: 90vh;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 48rem;

  @media only screen and (max-width: ${mediumScreen}) {
    gap: 3rem;
  }
`
const Name = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 1.3rem;
  text-transform: uppercase;
  margin-bottom: -15px;
`

const Heading = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  text-shadow: ${({ theme }) => theme.textShadow};
`

const Text = styled.p`
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2.7rem;
  margin: 3rem 0 3.5rem 0;

  @media only screen and (max-width: ${mediumScreen}) {
    line-height: 3rem;
  }

  @media only screen and (max-width: ${smallScreen}) {
    font-size: 2rem;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`
const ButtonOne = styled.a`
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 1.2rem 2.5rem;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: none;
  filter: ${({ theme }) => theme.filter.shadowSmall};
  transition: all 0.15s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    filter: ${({ theme }) => theme.filter.shadowBig};
  }

  &:active {
    transform: translateY(-1.5px);
    filter: ${({ theme }) => theme.filter.shadowMedium};
  }
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: -1;

  @media only screen and (max-width: ${mediumScreen}) {
    width: 100%;
  }
`

export default Hero
