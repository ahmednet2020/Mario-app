import * as React from 'react'

// import components
import SignIn from '../components/auth/SignIn'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Signin = (props: IpropsType):JSX.Element => {
    return (
        <main className='signin mt-5 mb-5'>
			<SignIn />
		</main>
    )
}
export default Signin;