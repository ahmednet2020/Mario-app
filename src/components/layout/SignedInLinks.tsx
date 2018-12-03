import * as React from 'react'

import { NavLink } from 'react-router-dom'

const SignedInLinks = ():JSX.Element => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className='nav-item'>
				<NavLink to='/newproject' className='text-white nav-link rounded' activeClassName='bg-primary'>New Project</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/logout' className='text-white nav-link rounded' activeClassName='bg-primary'>Log Out</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink to='/' className='d-inline-block btn btn-light nav-link rounded-circle ml-3 text-dark'>NN</NavLink>
			</li>
		</ul>
	)
}

export default SignedInLinks;