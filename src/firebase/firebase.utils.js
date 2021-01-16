import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBphlHDxCX92FtHTWB9MKAQ1_fqIwi4Vd0",
  authDomain: "crwn-db-a8c34.firebaseapp.com",
  projectId: "crwn-db-a8c34",
  storageBucket: "crwn-db-a8c34.appspot.com",
  messagingSenderId: "635835980227",
  appId: "1:635835980227:web:5c87bfb7749d7b6d054576",
  measurementId: "G-944J9YB36Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
