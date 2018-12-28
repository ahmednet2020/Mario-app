import * as React from 'react'

import ProjectSummary from './ProjectSummary'
const ProjectList = ({projects}:any):JSX.Element => {
  return (
    <div className="project-list">
     { projects && projects
     	.sort((x:any, y:any):any => (x.createdAt.seconds >= y.createdAt.seconds ? -1:1))
     	.map((project:any) => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default ProjectList