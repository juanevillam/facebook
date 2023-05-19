// ** Axios
import axios from "axios";

export const fetchUserPost = async (setUserThatCreatedThisPost, userId) => {
  const response = await axios.get(`users/${userId}`);
  setUserThatCreatedThisPost(response.data);
};

export const fetchUserProfile = async (setUserThatOwnThisProfile) => {
  const response = await axios.get(`/users?username=juanevillam`);
  setUserThatOwnThisProfile(response.data);
};
