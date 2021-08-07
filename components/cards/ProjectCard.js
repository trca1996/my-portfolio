import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { extraSmallScreen, smallScreen } from '../../style/sizeVariables'

const ProjectCard = ({
  name,
  description,
  tech,
  image,
  siteURL,
  gitHub,
  align,
}) => {
  return (
    <Container align={align}>
      <ImageContainer>
        <StyledImage src={image} alt={name} objectFit="cover" layout="fill" />
      </ImageContainer>

      <ContentContainer align={align}>
        <Name align={align}>{name}</Name>

        <Description align={align}>{description}</Description>

        <BottomItems align={align}>
          <Techs>
            {tech.map((item, i) => (
              <Tech key={i}>{item}</Tech>
            ))}
          </Techs>
          <Icons align={align}>
            {gitHub ? (
              <Link href={gitHub}>
                <a target="_blank" rel="noopener">
                  <Icon src="/images/icons/GitHubGray.svg" alt="GitHubIcon" />
                </a>
              </Link>
            ) : null}
            <Link href={siteURL}>
              <a target="_blank" rel="noopener">
                <Icon src="/images/icons/OpenWindow.svg" alt="OpenWindowIcon" />
              </a>
            </Link>
          </Icons>
        </BottomItems>
      </ContentContainer>
    </Container>
  )
}

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  position: relative;
  padding: 2rem 3rem;
  margin-left: ${({ align }) => (align === 'left' ? 'auto' : '-7rem')};
  margin-right: ${({ align }) => (align === 'right' ? 'auto' : '-7rem')};
  z-index: 100;
  box-shadow: ${({ theme }) => theme.boxShadow.shadowSmall};
  transition: all 0.2s ease-in-out;

  @media only screen and (max-width: ${extraSmallScreen}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: -5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const Container = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  flex-direction: ${({ align }) => (align === 'right' ? 'row' : 'row-reverse')};

  &:hover ${ContentContainer} {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: ${extraSmallScreen}) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`

const ImageContainer = styled.div`
  min-width: 50%;
  height: 29rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  @media only screen and (max-width: ${extraSmallScreen}) {
    z-index: 150;
    width: 100%;
  }
`

const StyledImage = styled(Image)`
  border-radius: 1rem;
`

const Name = styled.h4`
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  top: -3.5rem;
  right: ${({ align }) => (align === 'right' ? '0' : 'auto')};
  left: ${({ align }) => (align === 'left' ? '0' : 'auto')};

  @media only screen and (max-width: ${extraSmallScreen}) {
    position: relative;
    top: auto;
    right: auto;
    left: auto;
  }
`

const Description = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: ${({ align }) => `${align}`};

  @media only screen and (max-width: ${smallScreen}) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: justify;
  }

  @media only screen and (max-width: ${extraSmallScreen}) {
    text-align: justify;
  }
`

const BottomItems = styled.div`
  position: absolute;
  bottom: -4rem;
  right: ${({ align }) => (align === 'right' ? '0' : 'auto')};
  left: ${({ align }) => (align === 'left' ? '0' : 'auto')};

  display: flex;
  flex-direction: ${({ align }) => (align === 'right' ? 'row' : 'row-reverse')};
  justify-content: space-between;
  width: calc(100% - 8rem);

  @media only screen and (max-width: ${extraSmallScreen}) {
    position: relative;
    bottom: auto;
    right: auto;
    left: auto;
    align-items: center;
    width: 100%;
    flex-direction: row;
  }
`

const Techs = styled.ul`
  font-weight: normal;
  font-size: 1.4rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.textColorSecondary};
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`
const Tech = styled.li``

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : 'flex-start'};
`
const Icon = styled.img`
  transition: all 0.2s ease-in-out;
  width: 2.7rem;
  height: 2.7rem;

  &:hover {
    filter: ${({ theme }) => theme.filter.shadowStrong};
    transform: scale(1.3);
  }
`

export default ProjectCard
