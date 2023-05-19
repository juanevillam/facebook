// ** Axios
import axios from "axios";

export const fetchUserOnProfile = async (
  username,
  setUserThatOwnThisProfile
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/users?username=${username}`
  );
  setUserThatOwnThisProfile(response.data);
};
