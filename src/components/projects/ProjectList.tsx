import * as React from 'react'

import ProjectSummary from './ProjectSummary'
const ProjectList = ({projects}:any):JSX.Element => {
  return (
    <div className="project-list">
     { projects && projects.map((project:any) => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
    </div>
  )
}

export default ProjectList