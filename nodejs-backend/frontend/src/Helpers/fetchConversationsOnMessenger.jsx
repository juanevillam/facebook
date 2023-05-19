// ** Axios
import axios from "axios";

export const fetchConversationsOnMessenger = async (
  setConversations,
  userId
) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/conversations/${userId}`
    );
    setConversations(response.data);
  } catch (error) {
    console.log(error);
  }
};
