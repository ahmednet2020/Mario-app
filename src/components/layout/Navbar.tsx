import * as React from 'react'

import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = ():JSX.Element => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to='/' className="navbar-brand">MarioPlan</Link>
			<div className="collapse navbar-collapse">
				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	)
}

export default Navbar;