import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import components
import CreateProject from '../components/projects/CreateProject'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const NewProject = (props: IpropsType):JSX.Element => {
	if(!props.auth.uid) { return <Redirect to='/Signin' /> }
    return (
        <main className='new-project mt-5 mb-5'>
			<CreateProject history={props.history.push}/>
		</main>
    )
}
const mapStateToProps = (state:any, ownProps:any) => {
	return {
		auth:state.firebase.auth,
	}
}
export default connect(mapStateToProps)(NewProject)