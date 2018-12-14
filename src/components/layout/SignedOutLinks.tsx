import * as React from 'react'

import { NavLink } from 'react-router-dom'

const SignedOutLinks = ():JSX.Element => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className='nav-item'>
				<NavLink to='/Signup' className='btn text-white nav-link rounded' activeClassName='bg-primary'>Sign Up</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/Signin' className='btn text-white nav-link rounded' activeClassName='bg-primary'>Sign In</NavLink>
			</li>
		</ul>
	)
}

export default SignedOutLinks;