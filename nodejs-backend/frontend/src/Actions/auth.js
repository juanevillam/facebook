import { types } from "../Types/types";

export const logOut = () => ({
  type: types.logOut,
});

export const setToken = (token) => ({
  type: types.setToken,
  payload: token,
});

export const logInStart = (email, password) => ({
  type: types.logInStart,
  payload: { email, password },
});

export const logInSuccess = (user) => ({
  payload: user,
  type: types.logInSuccess,
});

export const logInFailure = (error) => ({
  type: types.logInFailure,
  payload: error,
});

export const registerStart = (email, password) => ({
  type: types.registerStart,
  payload: { email, password },
});

export const registerSuccess = (user) => ({
  payload: user,
  type: types.registerSuccess,
});

export const registerFailure = (uid, displayName) => ({
  type: types.registerFailure,
  payload: { uid, displayName },
});

export const followUserStart = () => ({
  type: types.followUserStart,
});

export const followUserSuccess = (userId) => ({
  payload: userId,
  type: types.followUserSuccess,
});

export const unfollowUserStart = () => ({
  type: types.unfollowUserStart,
});

export const unfollowUserSuccess = (userId) => ({
  payload: userId,
  type: types.unfollowUserSuccess,
});

export const followUnfollowUserFailure = (error) => ({
  type: types.followUnfollowUserFailure,
  payload: error,
});
