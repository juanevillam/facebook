import firebase from "firebase";

// Here will be your Firebase credentials

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp( firebaseConfig );

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const FieldValue = firebase.firestore();

export { auth, db, storage, FieldValue, firebase };