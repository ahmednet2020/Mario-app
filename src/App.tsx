import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
interface IState {
	name: string
}
class App extends React.Component<{}, IState> {

	constructor(props: {})
	{
		super(props)
		this.state = {
			name:'ahmed'
		}	
	}
	public render():any
	{
		return (
			<Router>
			  <div>
			      <div className="App">
			        welcome to mario plan
			        {this.state.name}
			      </div>
			      <Switch>
				      <Route exact={true} path='/' render={(match) => <div> welcome to home </div>}/>
				      <Route render={()=> <h1>this is 404 page</h1>}/>
			      </Switch>
			  </div>
			</Router>
		);
	}
	public componentWillMount():void
	{
		console.log(this)
	}
}

export default App;
