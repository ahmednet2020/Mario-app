import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk'; 
// import firebase config api
import fbConfig from './config/fbConfig'
// import rootReducers
import rootReducers from './reducers/rootReducers';
const Store:any = createStore(rootReducers, compose(
		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reactReduxFirebase(fbConfig, {attachAuthIsReady: true, userProfile: 'users', useFirestoreForProfile: true}), // redux binding for firebase
	    reduxFirestore(fbConfig) // redux bindings for firestore
	)
);
export default Store;