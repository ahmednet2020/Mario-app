import { combineReducers } from 'redux';
// import reducers
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducers = combineReducers({
	auth:authReducer,
	firestore: firestoreReducer,
	project:projectReducer
});
export default rootReducers;