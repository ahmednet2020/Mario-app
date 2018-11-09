import * as React from 'react'
// import components
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends React.Component<{}> {
  public render():JSX.Element {
    return (
      <section className="dashboard">
      	<div className="container">
	        <div className="row">
	          <div className="col-12 col-md-6">
	            <ProjectList />
	          </div>
	          <div className="col-12 col-md-6">
	            <Notifications />
	          </div>
	        </div>
        </div>
      </section>
    )
  }
}

export default Dashboard