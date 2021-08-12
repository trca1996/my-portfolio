import styled from 'styled-components'
import TechCard from '../cards/TechCard'
import SectionLayout from '../layout/SectionLayout'
import { Zoom, Bounce } from 'react-awesome-reveal'

const techs = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'NextJS',
  'Redux',
  'SASS',
  'Styled-Components',
  'NodeJS',
  'MongoDB',
]

const AboutMe = () => {
  return (
    <SectionLayout title="About Me" section={'about'}>
      <Text>
        Hi, I’m Igor from Serbia. I’m a student of Economy but coding is my
        passion, I have learned web development on my own and I'm still learning
        it every day. I can develop Web Applications using modern technologies.
      </Text>
      <br />
      <Bounce triggerOnce>
        <Text>My tech stack:</Text>
      </Bounce>

      <List>
        <Zoom cascade duration={300} triggerOnce delay={300}>
          {techs.map((tech) => (
            <TechCard key={tech} tech={tech} />
          ))}
        </Zoom>
      </List>
    </SectionLayout>
  )
}

const Text = styled.p`
  font-weight: normal;
  font-size: 2rem;
  line-height: 3rem;
  text-align: justify;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default AboutMe
