import * as React from 'react'

import ProjectSummary from './ProjectSummary'

const ProjectList = ():JSX.Element => {
  return (
    <div className="project-list">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  )
}

export default ProjectList