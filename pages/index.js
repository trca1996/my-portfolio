import styled from 'styled-components'
import Hero from '../components/sections/HeroSection'
import { Fragment } from 'react'
import AboutMe from '../components/sections/AboutMe'
import SocialNetworks from '../components/SocialNetworks'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
      <SocialNetworks />
    </Fragment>
  )
}

export default Home
