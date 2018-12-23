import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import components
import Dashboard  from '../components/dashboard/Dashboard'
// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Home = (props: IpropsType):JSX.Element => {
	if(!props.auth.uid) { return <Redirect to='/Signin' /> }
    return (
        <main className='home mt-5 mb-5'>
			<Dashboard />
		</main>
    )
}
const mapStateToProps = (state:any, ownProps:any) => {
	return {
		auth:state.firebase.auth,
	}
}
export default connect(mapStateToProps)(Home)