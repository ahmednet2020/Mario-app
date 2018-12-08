import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
 // Replace this with your own config details
const config = {
    apiKey: "AIzaSyD7WW1fAgHUtc8qzrib20lJDPTg69V_CW8",
    authDomain: "mario-plan-2018.firebaseapp.com",
    databaseURL: "https://mario-plan-2018.firebaseio.com",
    messagingSenderId: "162287752928",
    projectId: "mario-plan-2018",
    storageBucket: "mario-plan-2018.appspot.com"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase