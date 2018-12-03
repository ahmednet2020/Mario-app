import * as React from 'react'

// interface state
interface IStateType {
    [key:string]:number|string
}
// interface props
interface IPropsType {
    [key:string]:number|string
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
    console.log(this.state);
  }
  public render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="text-dark">Sign In</h5>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn