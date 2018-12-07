export const createProject = (project:any) => {
  return (dispatch:any, getState:any) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
};