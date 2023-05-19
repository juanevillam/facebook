// ** Axios
import axios from "axios";

export const fetchMessagesOnChat = async (chatId, setMessages) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/messages/${chatId}`
    );
    setMessages(response.data);
  } catch (error) {
    console.log(error);
  }
};
