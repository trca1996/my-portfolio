import SectionLayout from '../layout/SectionLayout'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'
import { StylesProvider } from '@material-ui/core/styles'
import CopyButton from '../buttons/CopyButton'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { AlertContextApi } from '../../context/alertContext'
import { useContext } from 'react'
import { extraSmallScreen } from '../../style/sizeVariables'

const Contact = ({ myEmail }) => {
  const { alertRender } = useContext(AlertContextApi)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const sendEmail = async (data) => {
    alertRender('Sending message...', 'info')
    try {
      const response = await axios.post('/api/sendemail', data)
      alertRender(response.data.message, 'success')
    } catch (err) {
      console.log(`🧨🧨🧨 ${err.response.data.message}: ${err}`)
      alertRender(err.response.data.message, 'error')
    }

    reset()
  }

  return (
    <SectionLayout title="Interested? Let’s Get In Touch!" section={'contact'}>
      <Container>
        <MessageContainer
          autoCorrect="off"
          spellCheck="false"
          autoComplete="off"
          onSubmit={handleSubmit(sendEmail)}
        >
          <Title>Write Me a Message</Title>

          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register('name', {
                required: true,
                minLength: 3,
                pattern: /^[A-Z a-z]+$/i,
              })}
            />
            {errors.name &&
              `First name is required, please enter the full name and use only letters`}
          </InputContainer>

          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register('email', {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
            />
            {errors.email?.type === 'required' && 'Email is required'}
            {errors.email?.type === 'pattern' && 'Incorrect email address'}
          </InputContainer>

          <InputContainer>
            <Label htmlFor="message">Message</Label>

            <InputArea
              id="message"
              rows={5}
              {...register('message', { required: true, minLength: 50 })}
            />
            <Characters>{`${
              watch('message') ? watch('message').length : 0
            } characters`}</Characters>
            {errors.message?.type === 'required' && 'Message is required'}
            {errors.message?.type === 'minLength' &&
              'Message must have minimum 50 characters'}
          </InputContainer>

          <StylesProvider injectFirst>
            <StyledButton endIcon={<TrendingFlatIcon />} type="submit">
              Send Message
            </StyledButton>
          </StylesProvider>
        </MessageContainer>
        <EmailContainer>
          <div>
            <Text>Or Write Me an Email 😁</Text>
            <Text>Copy Email Address Here &darr;</Text>
          </div>
          <CopyButton buttonText={myEmail} Icon={MailOutlineIcon} />
        </EmailContainer>
      </Container>
    </SectionLayout>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${extraSmallScreen}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
  }
`

const MessageContainer = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 3rem;
  gap: 2rem;
  border-radius: 3.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;

  @media only screen and (max-width: ${extraSmallScreen}) {
    width: 100%;
  }
`

const Title = styled.h4`
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

const Characters = styled.p``

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

  @media only screen and (max-width: ${extraSmallScreen}) {
    align-self: center;
  }
`

const EmailContainer = styled.div`
  align-self: center;
  width: min-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Text = styled.h5`
  font-weight: bold;
  font-size: 2rem;
  line-height: 3.5rem;
`

export default Contact
