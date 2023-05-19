// ** Axios
import axios from "axios";

export const postMessageOnChat = async (
  currentChat,
  e,
  newMessage,
  messages,
  setNewMessage,
  setMessages,
  socket,
  user
) => {
  e.preventDefault();
  const message = {
    sender: user._id,
    text: newMessage,
    conversationId: currentChat._id,
  };

  const receiverId = currentChat.members.find((member) => member !== user._id);

  socket.current.emit("sendMessage", {
    senderId: user._id,
    receiverId,
    text: newMessage,
  });

  try {
    setNewMessage("");
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/messages`,
      message
    );
    setMessages([...messages, res.data]);
  } catch (err) {
    console.log(err);
  }
};
