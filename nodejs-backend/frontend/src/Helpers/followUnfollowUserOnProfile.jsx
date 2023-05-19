// ** Axios
import axios from "axios";
import {
  followUnfollowUserFailure,
  followUserStart,
  followUserSuccess,
  unfollowUserStart,
  unfollowUserSuccess,
} from "../Actions/auth";

export const followUnfollowUserOnProfile = async (
  followed,
  dispatch,
  setFollowed,
  userId,
  userThatOwnThisProfileId
) => {
  try {
    if (followed) {
      dispatch(unfollowUserStart());
      await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${userThatOwnThisProfileId}/unfollow`,
        {
          userId,
        }
      );
      dispatch(unfollowUserSuccess(userThatOwnThisProfileId));
    } else {
      dispatch(followUserStart());
      await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${userThatOwnThisProfileId}/follow`,
        {
          userId,
        }
      );
      dispatch(followUserSuccess(userThatOwnThisProfileId));
    }
  } catch (error) {
    dispatch(followUnfollowUserFailure(error));
  }
  setFollowed(!followed);
};
