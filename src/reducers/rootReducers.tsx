import { combineReducers } from 'redux';
// import reducers
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducers = combineReducers({auth:authReducer, project:projectReducer});

export default rootReducers;