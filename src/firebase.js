import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

  const firebaseConfig = {
  apiKey: "AIzaSyDLH-e1QJ2SYAkB0mXlmEBT1c6JwRIpPpM",
  authDomain: "netflix-clone-e421d.firebaseapp.com",
  projectId: "netflix-clone-e421d",
  storageBucket: "netflix-clone-e421d.appspot.com",
  messagingSenderId: "45753585702",
  appId: "1:45753585702:web:8b5c568108763f27fc96e7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
export default auth;
export  {db, auth};