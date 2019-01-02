import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
admin.initializeApp(functions.config().firebase);
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello ahmed samir");
});
const createNotification = ((notification:any) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


export const projectCreated = functions.firestore.document('projects/{projectId}').onCreate((doc:any) => {
    const project:any = doc.data();
    const notification = {
      content: 'Added a new project',
      time: new Date(),
      user: `${project.authorFirstName}-${project.authorLastName}`,
      projsId:doc.id
    }
    return createNotification(notification);
})