// ** Axios
import axios from "axios";

export const fetchUserOnComment = async (
  setUserThatCreatedThisComment,
  userId
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users?userId=${userId}`
  );
  setUserThatCreatedThisComment(response.data);
};
