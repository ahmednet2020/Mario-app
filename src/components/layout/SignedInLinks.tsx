import * as React from 'react'

import { NavLink } from 'react-router-dom'

const SignedInLinks = ():JSX.Element => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className='nav-item'>
				<NavLink to='/' className='nav-link'>New Project</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/' className='nav-link'>Log Out</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/' className='btn btn-primary nav-link'>NN</NavLink>
			</li>
		</ul>
	)
}

export default SignedInLinks;