import * as React from 'react'

import { Link, withRouter } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = ():JSX.Element => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-3">
			<div className="container">
				<Link to='/' className="navbar-brand">
					<h1 className="h5 m-0">
						MarioPlan
					</h1>
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"/>
				</button>
				<div className="collapse navbar-collapse" id='navbar'>
					<SignedOutLinks />
					<SignedInLinks />
				</div>
			</div>
		</nav>
	)
}

export default withRouter(Navbar);