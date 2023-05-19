import { types } from "../Types/types";

const INITIAL_STATE = {
  post: null,
  error: false,
  postsOnHome: [],
  isEditingPost: false,
  isUploadingPost: false,
  isUploadingComment: false,
};

export const UiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // ** set Actions
    case types.setPostsOnHome:
      return {
        ...INITIAL_STATE,
        postsOnHome: action.payload,
      };

    // ** submitPost Actions
    case types.submitPostStart:
      return {
        ...INITIAL_STATE,
        isUploadingPost: true,
      };

    case types.submitPostFailure:
      return {
        post: null,
        ...INITIAL_STATE,
        error: action.payload,
      };

    case types.submitPostSuccess:
      return {
        ...state,
        postsOnHome: [action.payload, ...state.postsOnHome],
        isUploadingPost: false,
      };

    // ** submitComment Actions
    case types.submitCommentStart:
      return {
        ...INITIAL_STATE,
        isUploadingComment: true,
      };

    case types.submitCommentFailure:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        isUploadingComment: false,
      };

    case types.submitCommentSuccess:
      return {
        ...INITIAL_STATE,
        isUploadingComment: false,
      };

    // ** editPost Actions
    case types.editPostStart:
      return {
        ...state,
        isEditingPost: true,
      };

    case types.editPostFailure:
      return {
        post: null,
        ...state,
        error: action.payload,
      };

    case types.editPostSuccess:
      return {
        ...state,
        postsOnHome: state.postsOnHome.map((e) =>
          e._id.toString() === action.payload._id.toString()
            ? action.payload
            : e
        ),
        isEditingPost: false,
      };

    // ** Default Action
    default:
      return state;
  }
};
