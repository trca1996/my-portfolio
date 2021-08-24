import ProjectCard from "../cards/ProjectCard";
import SectionLayout from "../layout/SectionLayout";
import { Slide } from "react-awesome-reveal";
import { isMobile } from "react-device-detect";

const MyProjects = ({ projects }) => {
  return (
    <SectionLayout title="Some Things I’ve Build" section={"projects"}>
      {projects.map(
        ({ name, description, tech, image, siteURL, gitHub, _id }, i) => {
          if (!isMobile) {
            return (
              <Slide
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                direction={i % 2 ? "left" : "right"}
                triggerOnce
                key={_id}
              >
                <ProjectCard
                  name={name}
                  description={description}
                  tech={tech}
                  image={image}
                  siteURL={siteURL}
                  gitHub={gitHub}
                  align={i % 2 ? "left" : "right"}
                />
              </Slide>
            );
          } else {
            return (
              <ProjectCard
                key={_id}
                name={name}
                description={description}
                tech={tech}
                image={image}
                siteURL={siteURL}
                gitHub={gitHub}
                align={i % 2 ? "left" : "right"}
              />
            );
          }
        }
      )}
    </SectionLayout>
  );
};

export default MyProjects;
