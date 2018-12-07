import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; 
// import rootReducers
import rootReducers from './reducers/rootReducers';
const Store = createStore(rootReducers, applyMiddleware(thunk));

export default Store;