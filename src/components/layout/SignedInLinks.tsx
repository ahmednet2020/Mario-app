import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

import { signOut } from '../../actions/authActions'

const SignedInLinks = (props:any):JSX.Element => {
	return (
		<ul className="navbar-nav ml-auto">
			<li className='nav-item'>
				<NavLink to='/newproject' className='btn text-white nav-link rounded' activeClassName='bg-primary'>New Project</NavLink>
			</li>
			<li className='nav-item'>
				<a onClick={props.signOut} className='btn text-white nav-link rounded'>Log Out</a>
			</li>
			<li className='nav-item'>
				<NavLink to='/' className='btn d-inline-block btn btn-light nav-link rounded-circle ml-3 text-dark'>
					{
						props.profile.initials
					}
				</NavLink>
			</li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SignedInLinks) as React.ComponentType<any>);