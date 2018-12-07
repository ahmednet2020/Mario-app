const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egypt win', content: 'blah blah blah'},
    {id: '4', title: 'new hero add', content: 'blah blah blah'},
    {id: '5', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}
const projectReducer = (state = initState, action:any):any => {
	switch (action.type) {
		case "CREATE_PROJECT":
			setTimeout(()=>{
				console.log('create project', action.project);
			}, 1000)
		break;
		default:
  			return state;
		break;
	}
	return state;
};

export default projectReducer;