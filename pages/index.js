import styled from 'styled-components'
import Hero from '../components/sections/Hero'
import { Fragment } from 'react'
import AboutMe from '../components/sections/AboutMe'
import SocialNetworks from '../components/SocialNetworks'
import MyProjects from '../components/sections/MyProjects'

const Home = (props) => {
  const projects = props.data

  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <MyProjects projects={projects} />
      <SocialNetworks />
    </Fragment>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/projects')
  const data = await res.json()

  return {
    props: { data },
    revalidate: 300,
  }
}

export default Home
