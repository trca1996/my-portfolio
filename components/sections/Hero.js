import styled from "styled-components";
import Image from "next/image";
import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";
import CopyButton from "../buttons/CopyButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  extraSmallScreen,
  largeScreen,
  mediumScreen,
  mobileScreen,
  smallScreen,
} from "../../style/sizeVariables";
import { JackInTheBox, Fade } from "react-awesome-reveal";
import { particlesParams } from "../../style/particles";
import useElementHeight from "../../helper/useElementHeight";
import Header from "../Header";
import useIsTouchDevice from "../../helper/useIsTouchDevice";
import dynamic from "next/dynamic";

const DynamicParticles = dynamic(() => import("react-particles-js"));

function Hero({ myEmail }) {
  const { elementHeight, elementRef } = useElementHeight();
  const isTouch = useIsTouchDevice();

  return (
    <Section id="hero" ref={elementRef}>
      <Header sectionHeight={elementHeight} />
      <Container>
        {!isTouch && <StyledParticles params={particlesParams} />}
        <div>
          {isTouch ? (
            <>
              <Name>Hi, I'm Igor</Name>

              <Heading>Web Developer</Heading>
            </>
          ) : (
            <JackInTheBox cascade triggerOnce>
              <Name>Hi, I'm Igor</Name>

              <Heading>Web Developer</Heading>
            </JackInTheBox>
          )}
        </div>

        {isTouch ? (
          <>
            <Text>
              I'll build your website to be fast and beautiful so that your
              visitors can get the value you're offering them without any
              confusion.
            </Text>
            <ButtonContainer>
              <ButtonOne href="/CV/IgorTrnkoCV.pdf" download>
                <VerticalAlignBottomIcon fontSize="large" />
                Download CV
              </ButtonOne>

              <CopyButton buttonText={myEmail} Icon={MailOutlineIcon} />
            </ButtonContainer>
          </>
        ) : (
          <Fade triggerOnce duration={2000}>
            <Text>
              I'll build your website to be fast and beautiful so that your
              visitors can get the value you're offering them without any
              confusion.
            </Text>
            <ButtonContainer>
              <ButtonOne href="/CV/IgorTrnkoCV.pdf" download>
                <VerticalAlignBottomIcon fontSize="large" />
                Download CV
              </ButtonOne>

              <CopyButton buttonText={myEmail} Icon={MailOutlineIcon} />
            </ButtonContainer>
          </Fade>
        )}
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
  );
}

const StyledParticles = styled(DynamicParticles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  @media only screen and (max-height: 500px) {
    height: 500px;
  }

  @media only screen and (max-width: ${extraSmallScreen}) {
    height: 90vh;
  }
`;

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
  min-height: 550px;

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
    padding-top: 5rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 48rem;

  @media only screen and (max-width: ${mediumScreen}) {
    gap: 3rem;
  }
`;
const Name = styled.h3`
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 1.3rem;
  text-transform: uppercase;

  @media only screen and (max-width: ${mobileScreen}) {
    margin-bottom: 10px;
  }
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 6rem;
  text-shadow: ${({ theme }) => theme.textShadow};
  line-height: 1;
`;

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
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
`;
const ButtonOne = styled.a`
  font-family: "Poppins", sans-serif;
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

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      filter: ${({ theme }) => theme.filter.shadowBig};
    }

    &:active {
      transform: translateY(-1.5px);
      filter: ${({ theme }) => theme.filter.shadowMedium};
    }
  }
`;

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
`;

export default Hero;
