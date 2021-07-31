import styled from 'styled-components'

const SectionLayout = ({ children, title }) => {
  return (
    <Section>
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
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;

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
`

const Content = styled.div``

export default SectionLayout
