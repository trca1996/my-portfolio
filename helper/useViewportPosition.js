import { useEffect, useState } from 'react'

const useViewportPosition = () => {
  const [viewportPosition, setViewportPosition] = useState(0)

  const viewportPositionTrack = () => {
    setViewportPosition(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener('scroll', viewportPositionTrack)
    return () => {
      document.removeEventListener('scroll', viewportPositionTrack)
    }
  }, [])

  return viewportPosition
}

export default useViewportPosition
