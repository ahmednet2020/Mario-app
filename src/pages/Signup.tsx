import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import components
import SignUp from '../components/auth/SignUp'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Signup = (props: IpropsType):JSX.Element => {
	if(props.auth.uid) { return <Redirect to='/' /> }
    return (
        <main className='signup mt-5 mb-5'>
			<SignUp />
		</main>
    )
}
const mapStateToProps = (state:any, ownProps:any) => {
	return {
		auth:state.firebase.auth,
	}
}
export default connect(mapStateToProps)(Signup)