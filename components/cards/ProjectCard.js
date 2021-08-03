import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ name, description, tech, image, siteURL, gitHub }) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage src={image} alt={name} objectFit="cover" layout="fill" />
      </ImageContainer>

      <ContentContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Techs>
          {tech.map((item, i) => (
            <Tech key={i}>{item}</Tech>
          ))}
        </Techs>
        <Icons>
          <Link href={gitHub || '#'}>
            <a target={gitHub ? '_blank' : '_self'}>
              <Icon src="/images/icons/GitHubGray.svg" alt="GitHubIcon" />
            </a>
          </Link>
          <Link href={siteURL}>
            <a target="_blank">
              <Icon src="/images/icons/OpenWindow.svg" alt="OpenWindowIcon" />
            </a>
          </Link>
        </Icons>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 5rem;
`

const ImageContainer = styled.div`
  width: 50%;
  height: 29rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`

const StyledImage = styled(Image)`
  border-radius: 1rem;
`

const ContentContainer = styled.div``

const Name = styled.h4``

const Description = styled.p``
const Techs = styled.ul``
const Tech = styled.li``
const Icons = styled.div``
const Icon = styled.img``

export default ProjectCard
