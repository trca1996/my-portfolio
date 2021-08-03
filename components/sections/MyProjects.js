import ProjectCard from '../cards/ProjectCard'
import SectionLayout from '../layout/SectionLayout'

const MyProjects = ({ projects }) => {
  return (
    <SectionLayout title="Some Things I’ve Build">
      {projects.map(
        ({ name, description, tech, image, siteURL, gitHub, _id }, i) => (
          <ProjectCard
            key={_id}
            name={name}
            description={description}
            tech={tech}
            image={image}
            siteURL={siteURL}
            gitHub={gitHub}
            align={i % 2 ? 'left' : 'right'}
          />
        ),
      )}
    </SectionLayout>
  )
}

export default MyProjects