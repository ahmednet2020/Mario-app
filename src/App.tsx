import * as React from 'react'
// import modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// css
import './App.css'
// pages
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
// start class
interface IState {
    name: string
}
class App extends React.Component < {}, IState > {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: 'ahmed'
        }
    }
    public render():any {
        return (
            <Router>
			  <div className='container-fluid'>
			      <Navbar/>
			      <Switch>
				      <Route exact={true} path='/' component={Home}/>
				      <Route render={()=> <h1>this is 404 page</h1>}/>
			      </Switch>
			  </div>
			</Router>
        );
    }
    public componentDidMount():void {
        console.log(this)
    }
}
// end class
export default App;