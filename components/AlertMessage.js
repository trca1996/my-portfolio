import { Fragment } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { Alert } from '@material-ui/lab'
import styled from 'styled-components'
import { AlertContextApi } from '../context/alertContext'
import { useContext } from 'react'

const AlertMessage = () => {
  const { open, setOpen, message, color } = useContext(AlertContextApi)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleClose}
          severity={color}
          variant="filled"
          elevation={6}
        >
          <Message>{message}</Message>
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

const Message = styled.p`
  font-size: 1.5rem;
`

export default AlertMessage
