import Hero from "../components/sections/Hero";
import { Fragment } from "react";
import SocialNetworks from "../components/SocialNetworks";
import { connectToDatabase } from "../helper/db-util";
import styled from "styled-components";
import { extraSmallScreen } from "../style/sizeVariables";
import HeadComponent from "../components/HeadComponent";
import dynamic from "next/dynamic";

const DynamicAboutMe = dynamic(() => import("../components/sections/AboutMe"));
const DynamicMyProjects = dynamic(() =>
  import("../components/sections/MyProjects")
);
const DynamicContact = dynamic(() => import("../components/sections/Contact"));
const DynamicAlertMessage = dynamic(() => import("../components/AlertMessage"));

const Home = (props) => {
  const projects = props.data;
  const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL;

  return (
    <Fragment>
      <HeadComponent />
      <Hero myEmail={myEmail} />
      <DynamicAboutMe />
      <DynamicMyProjects projects={projects} />
      <DynamicContact myEmail={myEmail} />
      <SocialNetworks />
      <DynamicAlertMessage />
      <CreatedBy>© 2021 by Igor Trnko. All rights reserved.</CreatedBy>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("projects")
    .find({})
    .sort({ _id: -1 })
    .toArray();

  return {
    props: { data: JSON.parse(JSON.stringify(data)) },
  };
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
`;

export default Home;
