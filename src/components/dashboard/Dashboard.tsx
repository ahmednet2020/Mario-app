import * as React from 'react'
import { connect } from 'react-redux'
// import components
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'


interface IPropsType {
    [key:string]:number|string
}

class Dashboard extends React.Component< IPropsType > {
  public render():JSX.Element {
  	const { projects } = this.props;
    return (
      <section className="dashboard">
      	<div className="container">
	        <div className="row">
	          <div className="col-12 col-md-6">
	            <ProjectList projects={projects}/>
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
const mapStateToProps = (state:{[key:string]:any}) => {
  return {
    projects: state.project.projects
  }
}
export default connect(mapStateToProps)(Dashboard);