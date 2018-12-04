import { createStore } from 'redux';
// import rootReducers
import rootReducers from './reducers/rootReducers';
const Store = createStore(rootReducers);

export default Store;