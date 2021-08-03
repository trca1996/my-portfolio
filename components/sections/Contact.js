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
          <Input />
          <Input />
          <Input />
          <StylesProvider injectFirst>
            <StyledButton endIcon={<TrendingFlatIcon />}>
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

const MessageContainer = styled.form``

const Title = styled.h5``

const Input = styled.input``

const StyledButton = styled(Button)`
  color: whitesmoke;
`

const EmailContainer = styled.div``

export default Contact
