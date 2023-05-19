import { types } from "../Types/types";

// ** submitPost Actions
export const submitPostStart = () => ({
  type: types.submitPostStart,
});

export const submitPostFailure = (error) => ({
  payload: error,
  type: types.submitPostFailure,
});

export const submitPostSuccess = (postSubmitted) => ({
  payload: postSubmitted,
  type: types.submitPostSuccess,
});

// ** submitComment Actions
export const submitCommentStart = () => ({
  type: types.submitCommentStart,
});

export const submitCommentFailure = (error) => ({
  payload: error,
  type: types.submitCommentFailure,
});

export const submitCommentSuccess = (CommentSubmitted) => ({
  payload: CommentSubmitted,
  type: types.submitCommentSuccess,
});

// ** editPost Actions
export const editPostStart = () => ({
  type: types.editPostStart,
});

export const editPostFailure = (error) => ({
  payload: error,
  type: types.editPostFailure,
});

export const editPostSuccess = (postEdited) => ({
  payload: postEdited,
  type: types.editPostSuccess,
});

// ** set Actions
export const setPostsOnHome = (posts) => ({
  payload: posts,
  type: types.setPostsOnHome,
});
