import styled from 'styled-components'
import { bigScreen, largeScreen, mobileScreen } from '../../style/sizeVariables'

const SectionLayout = ({ children, title, section }) => {
  return (
    <Section id={section}>
      <Title>
        <Line />
        <h2>{title}</h2>
        <Line />
      </Title>
      <Content>{children}</Content>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 6rem 25rem;
  overflow-x: hidden;

  @media only screen and (min-width: ${largeScreen}) {
    padding: 6rem 40rem;
  }

  @media only screen and (max-width: ${bigScreen}) {
    padding: 6rem 12rem;
  }

  @media only screen and (max-width: ${mobileScreen}) {
    padding: 6rem 3rem;
  }
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
  text-align: center;

  h2 {
    padding: 0 3rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: bold;
    font-size: 3rem;
  }
`

const Line = styled.div`
  height: 1.8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.textColor};
  flex: 1;

  @media only screen and (max-width: ${mobileScreen}) {
    display: none;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default SectionLayout
