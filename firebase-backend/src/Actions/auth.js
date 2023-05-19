import Swal from "sweetalert2";
import { types } from "../Types/types";
import { finishLoading, startLoading } from "./ui";
import { db, firebase } from "../Database/firebase";

export const signOut = () => ({ type: types.signOut });
export const setPosts = (posts) => ({
  type: types.setPosts,
  payload: [...posts],
});
export const setStories = (stories) => ({
  type: types.setStories,
  payload: [...stories],
});
export const signIn = (uid, displayName) => ({
  type: types.signIn,
  payload: { uid, displayName },
});
export const setProfile = (profile, fatherId) => ({
  type: types.setProfile,
  payload: { ...profile, fatherId },
});

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    Swal.fire({
      title: "Logging in",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(signIn(user.uid, user.email));
        dispatch(finishLoading());
        Swal.close();
        Swal.fire("Good job!", "You logged in successfully", "success");
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startRegisterWithEmailPasswordName = (
  dayBirthday,
  email,
  firstName,
  monthBirthday,
  password,
  surname,
  yearBirthday
) => {
  return (dispatch) => {
    dispatch(startLoading());
    Swal.fire({
      title: "Creating account",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        db.collection("users").add({
          surname,
          dayBirthday,
          yearBirthday,
          id: user.uid,
          monthBirthday,
          coverPhoto: "",
          email: user.email,
          bio: "No bio yet.",
          fullName: user.displayName,
          profilePicture: user.photoURL,
          username: firstName.toLowerCase(),
          description: "No description yet.",
          dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(signIn(user.uid, user.displayName));
        Swal.close();
        Swal.fire("Good job!", "You registered in successfully", "success");
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    Swal.fire({
      title: "Logging Out",
      text: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
    await firebase.auth().signOut();
    dispatch(signOut());
    Swal.close();
    Swal.fire("Goodbye", "You logged out successfully", "success");
  };
};
