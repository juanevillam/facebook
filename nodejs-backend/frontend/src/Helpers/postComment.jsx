// ** Axios
import axios from "axios";

// ** Actions
import {
  submitCommentFailure,
  submitCommentStart,
  submitCommentSuccess,
} from "../Actions/ui";

export const postComment = async (
  comment,
  dispatch,
  e,
  postId,
  setComment,
  userId
) => {
  e.preventDefault();

  dispatch(submitCommentStart());

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/posts/${postId}/comment`,
      {
        comment,
        userId,
      }
    );
    dispatch(submitCommentSuccess(response.data));
  } catch (error) {
    dispatch(submitCommentFailure(error));
  }

  setComment("");
};
