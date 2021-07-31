import styled from 'styled-components'
import Hero from '../components/heroSection/Hero'
import { Fragment } from 'react'
import AboutMe from '../components/sections/AboutMe'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <AboutMe />
    </Fragment>
  )
}

export default Home
