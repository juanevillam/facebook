// ** Axios
import axios from "axios";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** React Router DOM
import { useEffect, useState } from "react";

// ** Custom Components
import { Message } from "./Message";
import { ChatMessageSender } from "./ChatMessageSender";

// ** Icons
import {
  ArrowRigthMessengerMobileIcon,
  ChatOptionsMessengerIcon,
  ChatOptionsMessengerMobileIcon,
  NoProfilePictureIcon,
  PhoneMessengerMobileIcon,
  VideoCameraMessengerMobileIcon,
} from "../Icons/index";

export const Chat = ({
  currentChat,
  openChatOptions,
  setCurrentChat,
  setOpenChatOptions,
  socket,
  user,
}) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [socket]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <div
      className={`bg-light-50 dark:bg-dark-200 h-full ${
        openChatOptions ? "md:w-4/6" : "md:w-9/12"
      } relative w-full`}
    >
      <div className="animate__animated animate__fadeIn flex bg-light-50 dark:bg-dark-200 items-center pt-2.5 pb-2.5 md:pr-3 pl-1.5 md:pl-0 shadow-sm w-full">
        <div className="flex flex-grow items-center ml-2 md:ml-3">
          <div
            className="block cursor-pointer md:hidden hover:text-black mr-4"
            onClick={() => setCurrentChat(null)}
          >
            <ArrowRigthMessengerMobileIcon />
          </div>
          {user?.profilePicture ? (
            <img
              className="h-10 object-cover rounded-full w-10"
              src={user?.profilePicture}
              alt=""
            />
          ) : (
            <NoProfilePictureIcon className="h-10 object-cover rounded-full w-10" />
          )}
          <div className="flex-grow">
            <div className="ml-2">
              {user?.fullName ? (
                <h3 className="cursor-pointer dark:text-light-400 font-medium hover:underline -mb-1 w-max">
                  {user?.fullName}
                </h3>
              ) : (
                <h3 className="cursor-pointer dark:text-light-400 font-medium hover:underline -mb-1 w-max">
                  Juan Villa
                </h3>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4 mr-2">
            <PhoneMessengerMobileIcon />
            <VideoCameraMessengerMobileIcon />
            <NavLink
              className="block md:hidden"
              to={`/messenger/group/:/options`}
            >
              <ChatOptionsMessengerMobileIcon />
            </NavLink>
            <div
              className="cursor-pointer duration-300 hidden hover:bg-opacity-10 hover:bg-white md:block p-1 rounded-full transition"
              onClick={() => setOpenChatOptions(!openChatOptions)}
            >
              <ChatOptionsMessengerIcon openChatOptions={openChatOptions} />
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="h-full overflow-y-scroll pt-6 pb-48 pl-3 pr-3">
          {messages?.map((message) => (
            <Message key={message._id} message={message} user={user} />
          ))}
        </div>
        currentChat, newMessage, messages, setNewMessage, setMessages, socket,
        user
        <ChatMessageSender
          currentChat={currentChat}
          messages={messages}
          setMessages={setMessages}
          socket={socket}
          user={user}
        />
      </>
    </div>
  );
};
