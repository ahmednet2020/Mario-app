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
    default:
      return state
    break;
  }
};

export default authReducer;