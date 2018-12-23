import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import components
import SignIn from '../components/auth/SignIn'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Signin = (props: IpropsType):JSX.Element => {
	if(props.auth.uid) { return <Redirect to='/' /> }
    return (
        <main className='signin mt-5 mb-5'>
			<SignIn />
		</main>
    )
}
const mapStateToProps = (state:any, ownProps:any) => {
	return {
		auth:state.firebase.auth,
	}
}
export default connect(mapStateToProps)(Signin)