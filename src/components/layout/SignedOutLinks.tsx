import * as React from 'react'

import { NavLink } from 'react-router-dom'

const SignedOutLinks = ():JSX.Element => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className='nav-item'>
				<NavLink to='/' className='nav-link'>Signup</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/' className='nav-link'>Login</NavLink>
			</li>
		</ul>
	)
}

export default SignedOutLinks;