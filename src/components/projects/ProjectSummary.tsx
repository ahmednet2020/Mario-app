import * as moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummary = ({project}:any):JSX.Element => {
  return (
    <div className="card border-dark mb-3">
      <div className="card-body">
        <h2 className="card-title text-capitalize mb-4"> { project.title } </h2>
        <p className="card-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
        <time className="card-subtitle text-muted">{moment(project.createdAt.toDate()).calendar()}</time>
        <div className="text-right d-block">
        	<Link to={`/project/${project.id}`} className="btn btn-dark text-capitalize">Go project</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary