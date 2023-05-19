import { AuthRouter } from "./AuthRouter";
import { useDispatch } from "react-redux";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { FacebookRouter } from "./FacebookRouter";
import React, { useEffect, useState } from "react";
import { db, firebase } from "../Database/firebase";
import { FacebookPreloader } from "../Components/FacebookPreloader";
import { MessengerPreloader } from "../Components/MessengerPreloader";
import { setStories, setPosts, setProfile, signIn } from "../Actions/auth";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingMessenger, setCheckingMessenger] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        await db
          .collection("users")
          .where("id", "==", user?.uid)
          .get()
          .then((querySnapshot) =>
            querySnapshot.forEach((doc) =>
              dispatch(setProfile(doc.data(), doc.id))
            )
          )
          .catch((error) => console.log("Error getting document:", error));
        dispatch(signIn(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setTimeout(() => setChecking(false), 1500);
      setTimeout(() => setCheckingMessenger(false), 3000);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) return <FacebookPreloader />;
  if (checkingMessenger) return <MessengerPreloader />;

  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={isLoggedIn}
          path="/auth"
          component={AuthRouter}
        />
        <PrivateRoute
          isAuthenticated={isLoggedIn}
          path="/"
          component={FacebookRouter}
        />
        <Redirect to="/auth/sign-in" />
      </Switch>
    </Router>
  );
};
