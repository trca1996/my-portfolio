import styled from 'styled-components'
import Hero from '../components/sections/Hero'
import { Fragment } from 'react'
import AboutMe from '../components/sections/AboutMe'
import SocialNetworks from '../components/SocialNetworks'
import MyProjects from '../components/sections/MyProjects'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <MyProjects />
      <SocialNetworks />
    </Fragment>
  )
}

export default Home
