import styled from 'styled-components'
import { extraSmallScreen } from '../style/sizeVariables'
import { Link } from 'react-scroll'
import useViewportPosition from '../helper/useViewportPosition'

const Header = ({ sectionHeight }) => {
  const viewportPosition = useViewportPosition()

  return (
    <Container viewport={viewportPosition} windowHeight={sectionHeight || 500}>
      <h2>
        <StyledLink to="about">About Me</StyledLink>
      </h2>
      <h2>
        <StyledLink to="projects">Projects</StyledLink>
      </h2>
      <h2>
        <StyledLink to="contact">Contact</StyledLink>
      </h2>
    </Container>
  )
}

const Container = styled.div`
  background: ${({ viewport, windowHeight }) =>
    viewport < windowHeight
      ? 'linear-gradient(180deg,rgba(28, 28, 28, 0.9) 0%,rgba(28, 28, 28, 0) 100%)'
      : 'rgb(28, 28, 28)'};
  display: flex;
  justify-content: space-between;
  padding: 2rem 25vw;
  position: ${({ viewport, windowHeight }) =>
    viewport < windowHeight ? 'absolute' : 'fixed'};
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;

  @media only screen and (max-width: ${extraSmallScreen}) {
    padding: 2rem 15vw;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`

export default Header
