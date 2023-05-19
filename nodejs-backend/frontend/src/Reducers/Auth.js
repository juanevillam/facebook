import { types } from "../Types/types";

const INITIAL_STATE = {
  user: null,
  token: null,
  error: false,
  isFetchingLogin: false,
  isFetchingFollow: false,
  isFetchingRegister: false,
  isFetchingUnfollow: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.logOut:
      return INITIAL_STATE;

    case types.setToken:
      return {
        ...state,
        token: action.payload,
      };

    case types.logInStart:
      return {
        ...state,
        isFetchingLogin: true,
      };

    case types.logInSuccess:
      return {
        ...state,
        user: action.payload,
        isFetchingLogin: false,
      };

    case types.logInFailure:
      return {
        ...state,
        error: action.payload,
        isFetchingLogin: false,
      };

    case types.registerStart:
      return {
        ...state,
        isFetchingRegister: true,
      };

    case types.registerSuccess:
      return {
        ...state,
        user: action.payload,
        isFetchingRegister: false,
      };

    case types.registerFailure:
      return {
        ...state,
        error: action.payload,
        isFetchingRegister: false,
      };

    case types.followUserStart:
      return {
        ...state,
        isFetchingFollow: true,
      };

    case types.followUserSuccess:
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.following, action.payload],
        },
        isFetchingFollow: false,
      };

    case types.unfollowUserStart:
      return {
        ...state,
        isFetchingUnfollow: true,
      };

    case types.unfollowUserSuccess:
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
        isFetchingUnfollow: false,
      };

    case types.followUnfollowUserFailure:
      return {
        ...state,
        error: action.payload,
        isFetchingFollow: false,
        isFetchingUnfollow: false,
      };

    default:
      return state;
  }
};
