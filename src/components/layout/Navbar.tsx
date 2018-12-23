import * as React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// import components
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
// start navbar function

class Navbar extends React.Component<any, any> {
	public render():JSX.Element
	{
		const { auth } = this.props;
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
						{ auth.uid ? <SignedInLinks /> : <SignedOutLinks /> }
					</div>
				</div>
			</nav>
		)
	}
}
const mapStateToProps = (state:any) => {
  return{
    auth: state.firebase.auth
  }
}
export default withRouter(connect(mapStateToProps)(Navbar) as React.ComponentType<any>) 