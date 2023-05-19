// ** Axios
import axios from "axios";

// ** Actions
import { editPostFailure, editPostStart, editPostSuccess } from "../Actions/ui";

export const editPost = async (
  dispatch,
  e,
  felling,
  fellingEmoji,
  postId,
  setFelling,
  setFellingEmoji,
  setOpenEditPost,
  setThoughts,
  thoughts,
  token,
  user
) => {
  e.preventDefault();

  dispatch(editPostStart());

  const credentials = {
    user,
    felling,
    thoughts,
    fellingEmoji,
  };

  try {
    const response = await axios.put(`/posts/${postId}`, credentials, {
      headers: {
        "x-token": token,
      },
    });

    dispatch(editPostSuccess(response?.data?.updatedPost));
    setOpenEditPost(false);
  } catch (error) {
    dispatch(editPostFailure(error));
  }
};
