import * as React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
// import components
import Comment from '../components/projects/Comment'
import ProjectDetails from '../components/projects/ProjectDetails'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Project = ({auth, projectid, projects}: IpropsType):JSX.Element => {
	if(!auth.uid) { return <Redirect to='/Signin' /> }
	if(projects)
	{
	    return (
	        <main className='project mt-5 mb-5'>
				<ProjectDetails project={projects}/>
				<Comment projectid={projectid}/>
			</main>
	    )
	} else {
		return (
	        <main className='project mt-5 mb-5'>
				 <p>Loading project...</p>
			</main>
	    )
	}
}
const mapStateToProps = (state:any, ownProps:any) => {
	const projectid = ownProps.match.params.projectid;
	const projects = state.firestore.data.projects? state.firestore.data.projects[projectid]: null;
	return {
		auth:state.firebase.auth,
		projectid,
		projects,
	}
}
const enhance = compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps),
)
export default enhance(Project) as React.ComponentType<any>