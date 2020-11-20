import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5BOMdNfMdWpDDer4F_E7It4t9xVPD4b8",
    authDomain: "tinder-clone-d0e93.firebaseapp.com",
    databaseURL: "https://tinder-clone-d0e93.firebaseio.com",
    projectId: "tinder-clone-d0e93",
    storageBucket: "tinder-clone-d0e93.appspot.com",
    messagingSenderId: "335270934149",
    appId: "1:335270934149:web:10441a44abb6cd5e489bec",
    measurementId: "G-FYHEWBJHBE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;