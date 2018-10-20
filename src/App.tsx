import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

interface IState {
	name: string
}
class App extends React.Component<{}, IState> {
	public state = {
		name:'ahmed'
	}
	public render() {
		return (
			<Router>
			  <div>
			      <div className="App">
			        welcome to mario plan
			        {this.state.name}
			      </div>
			      <Switch>
				      <Route exact={true} path='/' render={(match) => {
				      	console.log(match);
				      	return (<div> welcome to home </div>);
				      }}/>
			      </Switch>
			  </div>
			</Router>
		);
	}
}

export default App;
