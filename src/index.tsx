import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import store
import registerServiceWorker from './registerServiceWorker';
import Store from './Store';

ReactDOM.render(
	<Provider store={Store}>
  		<App />
  	</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
