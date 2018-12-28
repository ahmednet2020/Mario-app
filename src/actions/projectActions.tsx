export const createProject = (project:any) => {
  return (dispatch:any, getState:any, {getFirebase, getFirestore}:any) => {
    // make async call to database
    const firestore = getFirestore();
    const profile:any = getState().firebase.profile;
    const authorId:any = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorId,
      authorLastName: profile.lastName,
      createdAt: new Date()
    }).then((data:any) => {
      	dispatch({ type: 'CREATE_PROJECT_SUCCESS' , last_create:data.id});
    }).catch((err:any) => {
    	dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};
export const RESTProject = () => {
  return {
    type: 'CREATE_PROJECT_REST'
  }
};