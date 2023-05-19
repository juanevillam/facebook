import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAek6iO7riYN7KCFeXl3hmUFq0mRYZFbQ",
  authDomain: "tfc-juanevillam.firebaseapp.com",
  projectId: "tfc-juanevillam",
  storageBucket: "tfc-juanevillam.appspot.com",
  messagingSenderId: "96919130806",
  appId: "1:96919130806:web:9481ccf99dcb4393ab8c17",
  measurementId: "G-XLCJLTTD5P",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const FieldValue = firebase.firestore();

export { auth, db, storage, FieldValue, firebase };
