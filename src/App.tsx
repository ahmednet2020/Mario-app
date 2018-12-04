import * as React from 'react'
// import modules
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// css
import './App.css'
// pages
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import NewProject from './pages/NewProject'
import Project from './pages/Project'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
// start class
interface IStateType {
    [key:string]:number|string
}
interface IPropsType {
    [key:string]:number|string
}
class App extends React.Component < IPropsType, IStateType > {
    constructor(props: IPropsType) {
        super(props);
    }
    public render():any {
      console.log(this.props);
        return (
        <Router>
  			  <div className='container-fluid'>
  			      <Navbar />
  			      <Switch>
                <Route exact={true} path='/' component={Home}/>
                <Route path='/newproject' component={NewProject}/>
  				      <Route path='/project/:projectid' component={Project}/>
                <Route path='/Signin' component={Signin} />
                <Route path='/Signup' component={Signup} />
  				      <Route render={()=> <h1>this is 404 page</h1>}/>
  			      </Switch>
  			  </div>
        </Router>
        );
    }
}
function mapStateToProps(store:any) {
  return {
    auth:store.auth
  }
}
// end class
export default connect(mapStateToProps)(App);