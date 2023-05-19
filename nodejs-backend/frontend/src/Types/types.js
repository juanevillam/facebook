export const types = {
  // ** Logout Actions
  logOut: "[Auth] logOut",

  // ** Login Actions
  logInStart: "[Auth] logIn Start",
  logInFailure: "[Auth] logIn Failure",
  logInSuccess: "[Auth] logIn Success",

  // ** Register Actions
  registerStart: "[Auth] register Start",
  registerFailure: "[Auth] register Failure",
  registerSuccess: "[Auth] register Success",

  // ** submitPost Actions
  submitPostStart: "[UI] submitPost Start",
  submitPostFailure: "[UI] submitPost Failure",
  submitPostSuccess: "[UI] submitPost Success",

  // ** submitComment Actions
  submitCommentStart: "[UI] submitComment Start",
  submitCommentFailure: "[UI] submitComment Failure",
  submitCommentSuccess: "[UI] submitComment Success",

  // ** editPost Actions
  editPostStart: "[UI] editPost Start",
  editPostFailure: "[UI] editPost Failure",
  editPostSuccess: "[UI] editPost Success",

  // ** follow/unfollow user Actions
  followUserStart: "[Auth] followUser Start",
  followUserSuccess: "[Auth] followUser Success",
  unfollowUserStart: "[Auth] unfollowUser Start",
  unfollowUserSuccess: "[Auth] unfollowUser Success",
  followUnfollowUserFailure: "[Auth] followUnfollowUser Failure",

  // ** set Actions
  setToken: "[Auth] setToken",
  setPostsOnHome: "[UI] setPostsOnHome",
};
