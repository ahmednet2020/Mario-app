const initState = {authError: null}

const authReducer = (state = initState, action:any) => {
	switch(action.type){
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    break;
    case 'LOGIN_SUCCESS':
      return {
        authError: null
      }
    break;
    case 'SIGNOUT_SUCCESS':
      return state
    break;
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }
    break;
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    break;
    default:
      return state
    break;
  }
};

export default authReducer;