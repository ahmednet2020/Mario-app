import * as React from 'react'

const ProjectList = ():JSX.Element => {
  return (
    <div className="project-list">
      <div className="card border-info mb-3">
        <div className="card-body">
          <h2 className="card-title text-capitalize mb-4">project title</h2>
          <p className="card-text">Posted by The Net Ninja</p>
          <time className="card-subtitle text-info">3rd September, 2am</time>
        </div>
      </div>
      <div className="card border-info mb-3">
        <div className="card-body">
          <h2 className="card-title text-capitalize mb-4">project title</h2>
          <p className="card-text">Posted by The Net Ninja</p>
          <time className="card-subtitle text-info">3rd September, 2am</time>
        </div>
      </div>
      <div className="card border-info mb-3">
        <div className="card-body">
          <h2 className="card-title text-capitalize mb-4">project title</h2>
          <p className="card-text">Posted by The Net Ninja</p>
          <time className="card-subtitle text-info">3rd September, 2am</time>
        </div>
      </div>
    </div>
  )
}

export default ProjectList