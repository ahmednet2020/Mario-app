import * as React from 'react'

interface IpropsType {
  [key:string]:any
}
const ProjectDetails = ({projectid}:IpropsType):JSX.Element => {
  console.log(projectid);
  return (
    <section className="project-details">
        <div className="card border-0">
          <div className="card-header border-0 bg-white text-dark">
            <div className="container">
              <h2 className="card-title text-capitalize mb-4">{projectid.title} - {projectid.id} </h2>
            </div>
          </div>
          <div className="card-body">
            <div className="container">
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
            </div>
          </div>
          <div className="card-footer bg-dark text-white">
            <div className="container">
              <p className="m-0 text-capitalize h6">Posted by The Net Ninja</p>
              <time className="card-subtitle">3rd September, 2am</time>
            </div>
          </div>
        </div>
    </section>
  )
}
 export default ProjectDetails