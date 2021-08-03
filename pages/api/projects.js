import { getAllProjects } from '../../helper/db-util'

const projects = async (req, res, next) => {
  if (req.method === 'GET') {
    const projects = await getAllProjects('projects')

    return res.status(200).json(projects)
  }
}

export default projects
