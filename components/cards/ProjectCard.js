import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

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
                <a target="_blank">
                  <Icon src="/images/icons/GitHubGray.svg" alt="GitHubIcon" />
                </a>
              </Link>
            ) : null}
            <Link href={siteURL}>
              <a target="_blank">
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
`

const Container = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  flex-direction: ${({ align }) => (align === 'right' ? 'row' : 'row-reverse')};

  &:hover ${ContentContainer} {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

const ImageContainer = styled.div`
  min-width: 50%;
  height: 29rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
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
`

const Description = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: ${({ align }) => `${align}`};
`

const BottomItems = styled.div`
  position: absolute;
  bottom: -6.5rem;
  right: ${({ align }) => (align === 'right' ? '0' : 'auto')};
  left: ${({ align }) => (align === 'left' ? '0' : 'auto')};
`

const Techs = styled.ul`
  font-weight: normal;
  font-size: 1.4rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.textColorSecondary};
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
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

  &:hover {
    filter: ${({ theme }) => theme.filter.shadowStrong};
    transform: scale(1.3);
  }
`

export default ProjectCard
