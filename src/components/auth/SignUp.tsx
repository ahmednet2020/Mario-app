import * as React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../actions/authActions'
// interface state
interface IStateType {
    [key:string]:any
}
// interface props
interface IPropsType {
    [key:string]:any
}
// start class of SignUp
class SignUp extends React.Component <IPropsType ,IStateType> {
  public state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }
  public handleChange = (e:any) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  public handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  public render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="text-dark">Sign Up</h5>
          <div className="form-group">
            <input type="email" id='email' autoComplete="off" className="form-control" onChange={this.handleChange} aria-describedby="emailHelp" required={true} />
            <label htmlFor="email">Email</label>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <input type="password" id='password' className="form-control" onChange={this.handleChange} required={true}/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-group">
            <input type="text" id='firstName' className="form-control" onChange={this.handleChange} required={true}/>
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-group">
            <input type="text" id='lastName' className="form-control" onChange={this.handleChange} required={true}/>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Sign Up</button>
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
  return {
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch:any)=> {
  return {
    signUp: (creds:any) => dispatch(signUp(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)