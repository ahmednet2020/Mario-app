export const createProject = (project:any) => {
  return (dispatch:any, getState:any, {getFirebase, getFirestore}:any) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'ahmed',
      authorId: 12345,
      authorLastName: 'net',
      createdAt: new Date()
    }).then((data:any) => {
      	dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    	console.log(data)
    }).catch((err:any) => {
    	dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};