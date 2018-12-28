const initState = {last_create:null}
const projectReducer = (state = initState, action:any):any => {
	switch (action.type) {
		case "CREATE_PROJECT_SUCCESS":
      		return {last_create:action.last_create};
		break;
		case 'CREATE_PROJECT_ERROR':
		      return {last_create:null, err:action.err};
		break;
		case 'CREATE_PROJECT_REST':
		      return {last_create:null};
		break;
		default:
  			return state;
		break;
	}
};

export default projectReducer;