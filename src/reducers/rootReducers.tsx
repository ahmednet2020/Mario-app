import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
// import reducers
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducers = combineReducers({
	auth:authReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	project:projectReducer
});
export default rootReducers;