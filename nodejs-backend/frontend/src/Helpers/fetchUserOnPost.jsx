// ** Axios
import axios from "axios";

export const fetchUserOnPost = async (setUserThatCreatedThisPost, userId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users?userId=${userId}`
  );
  setUserThatCreatedThisPost(response.data);
};
