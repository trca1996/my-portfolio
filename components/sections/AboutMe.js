import styled from 'styled-components'
import TechCard from '../cards/TechCard'
import SectionLayout from '../layout/SectionLayout'

const techs = [
  'html',
  'css',
  'js',
  'react',
  'next',
  'redux',
  'sass',
  'styled-components',
  'node',
  'mongodb',
]

const AboutMe = () => {
  return (
    <SectionLayout title="About Me">
      <Text>
        Hi, I’m Igor from Serbia. I’m a student of Economy but coding is my
        passion, I have learned web development on my own and I'm still learning
        it every day. I can develop Web Applications using modern technologies.
      </Text>
      <br />
      <Text>My tech stack:</Text>
      {techs.map((tech) => (
        <TechCard key={tech} tech={tech} />
      ))}
    </SectionLayout>
  )
}

const Text = styled.p`
  font-weight: normal;
  font-size: 2rem;
  line-height: 3rem;
  text-align: justify;
`

export default AboutMe
