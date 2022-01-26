// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
//
// const config = {
//   apiKey: "AIzaSyCtpH_8lL0qRF8rcd8Xn8SAWvR9eWQ10gE",
//   authDomain: "e-commerce-cloths.firebaseapp.com",
//   databaseURL: "https://e-commerce-cloths-default-rtdb.firebaseio.com",
//   projectId: "e-commerce-cloths",
//   storageBucket: "e-commerce-cloths.appspot.com",
//   messagingSenderId: "446762280808",
//   appId: "1:446762280808:web:a3e1ee283fd589645c18dd",
// };
//
// export const createUserProfileInDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;
//   const userRef = firestore.doc(`user/${userAuth?.uid}`);
//   const userSnapshot = await userRef.get();
//
//   if (!userSnapshot.exists) {
//     const { displayName, email } = userAuth;
//     const createAT = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createAT,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log({ error: error > message });
//     }
//     return userRef;
//   }
//
//   console.log({ userSnapshot });
// };
//
// firebase.initializeApp(config);
//
// export const auth = firebase?.auth();
// export const firestore = firebase?.firestore();
//
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
//
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
//
// export default firebase;
