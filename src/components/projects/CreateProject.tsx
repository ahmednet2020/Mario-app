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
class CreateProject extends React.Component <IPropsType, IStateType> {
  public state = {
    content: '',
    title: ''
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
          <h5 className="text-dark">Create a New Project</h5>
          <div className="form-group">
            <input type="text" id='title' className="form-control" onChange={this.handleChange} required={true}/>
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="form-group">
            <label htmlFor="content">Project Content</label>
            <textarea id='content' className="form-control" onChange={this.handleChange} required={true}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject