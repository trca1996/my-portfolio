import styled from 'styled-components'
import Hero from '../components/sections/Hero'
import { Fragment } from 'react'
import AboutMe from '../components/sections/AboutMe'
import SocialNetworks from '../components/SocialNetworks'
import MyProjects from '../components/sections/MyProjects'
import { connectToDatabase } from '../helper/db-util'

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

export async function getServerSideProps() {
  const { db } = await connectToDatabase()
  const data = await db
    .collection('projects')
    .find({})
    .sort({ _id: -1 })
    .toArray()

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  }
}

export default Home
