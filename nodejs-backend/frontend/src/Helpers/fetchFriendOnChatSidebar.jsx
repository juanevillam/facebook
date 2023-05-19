// ** Axios
import axios from "axios";

export const fetchFriendOnChatSidebar = async (friendId, setFriend) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users?userId=${friendId}`
    );
    setFriend(response.data);
  } catch (error) {
    console.log(error);
  }
};
