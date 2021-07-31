import styled from 'styled-components'

const TechCard = ({ tech }) => {
  return (
    <div>
      <img src={`/images/icons/${tech}.svg`} alt={`${tech}`} />
      <p>{tech}</p>
    </div>
  )
}

const Card = styled.div``

export default TechCard
