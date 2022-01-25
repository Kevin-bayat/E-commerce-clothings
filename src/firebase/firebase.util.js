import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCtpH_8lL0qRF8rcd8Xn8SAWvR9eWQ10gE",
  authDomain: "e-commerce-cloths.firebaseapp.com",
  databaseURL: "https://e-commerce-cloths-default-rtdb.firebaseio.com",
  projectId: "e-commerce-cloths",
  storageBucket: "e-commerce-cloths.appspot.com",
  messagingSenderId: "446762280808",
  appId: "1:446762280808:web:a3e1ee283fd589645c18dd",
};

firebase.initializeApp(config);

export const auth = firebase?.auth();
export const firestore = firebase?.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
