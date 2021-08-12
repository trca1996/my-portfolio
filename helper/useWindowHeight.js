import { useEffect, useState } from 'react'

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(undefined)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowHeight
}

export default useWindowHeight
