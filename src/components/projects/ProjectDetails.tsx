import * as moment from 'moment'
import * as React from 'react'

interface IpropsType {
    [key:string]:any
}
const ProjectDetails = ({project}:IpropsType):JSX.Element => {
  return (
    <section className="project-details">
        <div className="card border-0">
          <div className="card-header border-0 bg-white text-dark">
            <div className="container">
              <h2 className="card-title text-capitalize mb-4">{project.title} </h2>
            </div>
          </div>
          <div className="card-body">
            <div className="container">
              <p className="card-text">{project.content}</p>
            </div>
          </div>
          <div className="card-footer bg-dark text-white">
            <div className="container">
              <p className="m-0 text-capitalize h6">Posted by {project.authorFirstName} {project.authorLastName}</p>
              <time className="card-subtitle">{moment(project.createdAt.toDate()).calendar()}</time>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProjectDetails