import * as React from 'react'

import { Link } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = ():JSX.Element => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link to='/' className="navbar-brand">
					<h1 className="h6">
						MarioPlan
					</h1>
				</Link>
				<div className="collapse navbar-collapse">
					<SignedInLinks />
					<SignedOutLinks />
				</div>
			</div>
		</nav>
	)
}

export default Navbar;