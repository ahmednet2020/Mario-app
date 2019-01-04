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
  	const { projects, notifications }:any = this.props;
    return (
      <section className="dashboard">
      	<div className="container">
	        <div className="row">
	          <div className="col-12 col-md-6">
	            <ProjectList projects={projects}/>
	          </div>
	          <div className="col-12 col-md-6">
	            <Notifications notifications={notifications}/>
	          </div>
	        </div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state:any) => {
  return {
    notifications:state.firestore.ordered.notifications,
    projects: state.firestore.ordered.projects,
  }
}
const enhance = compose(
  firestoreConnect([
    { collection: 'projects'},
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']},
    ]),
  connect(mapStateToProps),
)
export default enhance(Dashboard) as React.ComponentType<any>
