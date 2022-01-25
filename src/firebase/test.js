import firebase from "firebase/app";

import "firebase/firestore";
const firestore = firebase.firestore();

firestore
  .collection("user")
  .doc("fzacEBGImceL3Zjl0Oci")
  .collection("cartItem")
  .doc("YuSxeoLOjYitaNO5Ax8c");

firestore.doc("/user/fzacEBGImceL3Zjl0Oci/cartItem/YuSxeoLOjYitaNO5Ax8c");
