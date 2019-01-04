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

// export const userJoined = functions.auth.user()
//   .onCreate((user:any) => {
//     return admin.firestore().collection('users')
//       .doc(user.uid).get().then((doc:any) => {
//         const newUser = doc.data();
//         const notification = {
//           content: 'Joined the party',
//           user: `${newUser.firstName} ${newUser.lastName}`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         };
//         return createNotification(notification);
//       });
// });
export const newUser = functions.firestore.document('users/{userId}').onCreate((doc:any) => {
  const user:any = doc.data();
  const notification = {
    content: 'Added a new user',
    time: new Date(),
    user: `${user.firstName} ${user.lastName}`,
  }
  return createNotification(notification);
})
