import Hero from '../components/sections/Hero'
import { Fragment } from 'react'
import AboutMe from '../components/sections/AboutMe'
import SocialNetworks from '../components/SocialNetworks'
import MyProjects from '../components/sections/MyProjects'
import { connectToDatabase } from '../helper/db-util'
import Contact from '../components/sections/Contact'
import AlertMessage from '../components/AlertMessage'
import styled from 'styled-components'
import { extraSmallScreen } from '../style/sizeVariables'
import HeadComponent from '../components/HeadComponent'

const Home = (props) => {
  const projects = props.data
  const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL

  return (
    <Fragment>
      <HeadComponent />
      <Hero myEmail={myEmail} />
      <AboutMe />
      <MyProjects projects={projects} />
      <Contact myEmail={myEmail} />
      <SocialNetworks />
      <AlertMessage />
      <CreatedBy>© 2021 by Igor Trnko. All rights reserved.</CreatedBy>
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

const CreatedBy = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.input};
  background-color: ${({ theme }) => theme.colors.bgColor};
  font-weight: 200;
  text-align: center;

  @media only screen and (max-width: ${extraSmallScreen}) {
    padding-bottom: 12rem;
  }
`

export default Home
