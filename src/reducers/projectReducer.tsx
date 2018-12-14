const initState = {}
const projectReducer = (state = initState, action:any):any => {
	switch (action.type) {
		case "CREATE_PROJECT_SUCCESS":
			console.log('create project success');
      		return state;
		break;
		case 'CREATE_PROJECT_ERROR':
		      console.log('create project error');
		      return state;
		break;
		default:
  			return state;
		break;
	}
};

export default projectReducer;