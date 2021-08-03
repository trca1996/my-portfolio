import SectionLayout from '../layout/SectionLayout'
import styled from 'styled-components'

import { Button } from '@material-ui/core'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'
import { StylesProvider } from '@material-ui/core/styles'

const Contact = () => {
  return (
    <SectionLayout title="Interested? Let’s Get In Touch!">
      <Container>
        <MessageContainer>
          <Title>Write Me a Message</Title>

          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" required />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </InputContainer>

          <InputContainer>
            <Label htmlFor="message">Message</Label>
            <InputArea type="text" id="message" rows={5} required />
          </InputContainer>

          <StylesProvider injectFirst>
            <StyledButton endIcon={<TrendingFlatIcon />} type="submit">
              Send Message
            </StyledButton>
          </StylesProvider>
        </MessageContainer>
        <EmailContainer></EmailContainer>
      </Container>
    </SectionLayout>
  )
}

const Container = styled.div`
  display: flex;
`

const MessageContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 3rem;
  gap: 2rem;
  border-radius: 3.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Title = styled.h5`
  font-weight: bold;
  font-size: 2rem;
  text-shadow: ${({ theme }) => theme.textShadow};
  align-self: center;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: ${({ theme }) => theme.textShadow};
`

const Input = styled.input`
  height: 4rem;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 3rem;
  padding: 1.5rem;
  outline: none;
  border: none;
  width: 100%;
`

const InputArea = styled.textarea`
  resize: none;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 3rem;
  outline: none;
  border: none;
  padding: 1.5rem;
`

const StyledButton = styled(Button)`
  color: whitesmoke;
  align-self: flex-end;
  font-weight: bold;
  font-size: 1.2rem;
`

const EmailContainer = styled.div``

export default Contact
