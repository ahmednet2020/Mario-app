import * as React from 'react'

// import components
import SignUp from '../components/auth/SignUp'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Signup = (props: IpropsType):JSX.Element => {
    return (
        <main className='signup mt-5 mb-5'>
			<SignUp />
		</main>
    )
}
export default Signup;