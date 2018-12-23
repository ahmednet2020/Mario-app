import * as React from 'react'
import { connect } from 'react-redux'

import { signIn } from '../../actions/authActions'
// interface state
interface IStateType {
    [key:string]:any
}
// interface props
interface IPropsType {
    [key:string]:any
}
// start class of SignIn
class SignIn extends React.Component <IPropsType, IStateType> {
   public state = {
    email: '',
    password: ''
  }
  public handleChange = (e:any) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  public handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  public render() {
    const { authError } = this.props
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="text-dark">Sign In</h5>
          <div className="form-group">
            <input type="email" id='email' autoComplete="false" className="form-control" onChange={this.handleChange} required={true}/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input type="password" id='password' className="form-control" onChange={this.handleChange} required={true}/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          {
             authError && <div className="alert alert-danger" role="alert">
                            {authError}
                          </div>
          }
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state:any) => {
  return{
    authError: state.auth.authError
  }
}
 const mapDispatchToProps = (dispatch:any) => {
  return {
    signIn: (creds:any) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)