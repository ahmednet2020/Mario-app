import * as React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
// import components
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'


interface IPropsType {
    [key:string]:number|string
}
class Dashboard extends React.Component< IPropsType, any > {
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
const mapStateToProps = (state:any) => {
  return {
    projects: state.firestore.ordered.projects
  }
}
const enhance = compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps),
)
export default enhance(Dashboard) as React.ComponentType
