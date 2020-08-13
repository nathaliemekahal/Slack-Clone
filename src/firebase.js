import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPRHJhyQCzRM61J1oa4mTfMWNn4FT3Lis",
  authDomain: "nat-slackclone.firebaseapp.com",
  databaseURL: "https://nat-slackclone.firebaseio.com",
  projectId: "nat-slackclone",
  storageBucket: "nat-slackclone.appspot.com",
  messagingSenderId: "272236669907",
  appId: "1:272236669907:web:73889664394efaee31dd26",
  measurementId: "G-C183N1TBWM",
};
cont firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db