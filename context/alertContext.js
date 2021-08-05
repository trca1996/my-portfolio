import React, { createContext, useState } from 'react'

export const AlertContextApi = createContext(false)

const AlertContext = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('success') // success, error, info

  const alertRender = (message, color) => {
    setMessage(message)
    setColor(color)
    setOpen(true)
  }

  const value = { alertRender, open, message, color, setOpen }

  return (
    <AlertContextApi.Provider value={value}>
      {children}
    </AlertContextApi.Provider>
  )
}

export default AlertContext
