// ** Axios
import axios from "axios";

// ** Helpers
import { handlePostFileToCloudinary } from "./handlePostFileToCloudinary";

// ** Actions
import {
  submitPostFailure,
  submitPostStart,
  submitPostSuccess,
} from "../Actions/ui";

export const submitPost = async (
  dispatch,
  e,
  felling,
  fellingEmoji,
  imageFromFilePicker,
  setImageFromFilePicker,
  setFelling,
  setFellingEmoji,
  setOpenCreatePost,
  setThoughts,
  thoughts,
  token,
  user
) => {
  e.preventDefault();

  dispatch(submitPostStart());

  const imageFromFilePickerPosted = await handlePostFileToCloudinary(
    imageFromFilePicker
  );

  const newPost = {
    user,
    felling,
    thoughts,
    fellingEmoji,
    image: imageFromFilePickerPosted,
  };

  try {
    const response = await axios.post("/posts", newPost, {
      headers: {
        "x-token": token,
      },
    });

    const response2 = await axios.get(
      `/posts/${response.data.savedPost?._id}`,
      {
        headers: {
          "x-token": token,
        },
      }
    );

    dispatch(submitPostSuccess(response2.data.post));
    setFelling("");
    setThoughts("");
    setFellingEmoji("");
    setOpenCreatePost(false);
    setImageFromFilePicker(null);
  } catch (error) {
    dispatch(submitPostFailure({ error }));
  }
};
