// ** Axios
import axios from "axios";

export const handleLike = async (isLiked, postId, setIsLiked, userId) => {
  try {
    await axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}/like`, {
      userId,
    });
  } catch (error) {
    console.log(error);
  }

  setIsLiked(!isLiked);
};
