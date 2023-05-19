// ** Socket IO
import { io } from "socket.io-client";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** Icons
import { NoProfilePictureIcon } from "../Icons";

// ** React
import { useEffect, useRef, useState } from "react";

// ** Custom Components
import { Chat } from "../Components/Chat";
import { ChatSidebar } from "../Components/ChatSidebar";
import { ChatOptions } from "../Components/ChatOptions";
import { ViewProfilePicture } from "../Components/ViewProfilePicture";

// ** Icons
import {
  DotsHorizontalIcon,
  PencilAltIcon,
  SearchIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { fetchConversationsOnMessenger } from "../Helpers/fetchConversationsOnMessenger";

export const Messenger = ({ user }) => {
  // ** Hooks
  const socket = useRef();
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [openChatOptions, setOpenChatOptions] = useState(false);
  const [openViewProfilePicture, setOpenViewProfilePicture] = useState(false);

  // ** useEffect
  useEffect(() => (socket.current = io("ws://localhost:8900")), []);

  useEffect(() => socket.current.emit("addUser", user._id), [user]);

  useEffect(
    () => fetchConversationsOnMessenger(setConversations, user._id),
    [user._id]
  );

  return (
    <>
      <div className="border-t-2 dark:border-dark-400 dark:bg-dark-200 flex max-w-screen-2xl w-full">
        <div className="overflow-y-scroll h-screen hidden md:block relative bg-light-50 dark:bg-dark-200 border-r-2 dark:border-dark-400 w-2/6">
          <div className="sticky top-0 z-30 bg-light-50 dark:bg-dark-200">
            <div className="flex justify-between mb-2 pb-2 pl-3 pr-3 pt-3">
              <NavLink
                className="dark:text-light-400 font-bold text-black text-2xl"
                to="/messenger"
              >
                Chats
              </NavLink>
              <div className="flex space-x-3">
                <DotsHorizontalIcon className="dark:text-light-400 dark:hover:bg-opacity-20 dark:hover:bg-white flex h-9 icon text-black w-9" />
                <UserGroupIcon className="dark:text-light-400 dark:hover:bg-opacity-20 dark:hover:bg-white flex h-9 icon text-black w-9" />
                <PencilAltIcon className="dark:text-light-400 dark:hover:bg-opacity-20 dark:hover:bg-white flex h-9 icon text-black w-9" />
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-dark-100 hidden items-center md:flex md:w-11/12 ml-2 mb-2.5 p-2 rounded-full">
              <SearchIcon className="cursor-pointer dark:text-gray-400 h-5 ml-1 mr-2 text-gray-500" />
              <input
                className="bg-transparent cursor-pointer dark:placeholder-gray-400 dark:text-white flex-shrink hidden lg:ml-0 md:inline-flex outline-none placeholder-gray-500"
                type="text"
                placeholder="Search Messenger"
              />
            </div>
          </div>
          <div className="pr-2 pl-2 pt-2 space-y-0.5">
            {conversations.map((conversation) => (
              <ChatSidebar
                conversation={conversation}
                key={conversation._id}
                setChat={setCurrentChat}
                user={user}
              />
            ))}
            <br />
            <br />
            <br />
          </div>
        </div>
        {currentChat ? (
          <Chat
            currentChat={currentChat}
            openChatOptions={openChatOptions}
            setCurrentChat={setCurrentChat}
            setOpenChatOptions={setOpenChatOptions}
            socket={socket}
            user={user}
          />
        ) : (
          <div className="md:w-9/12">
            <div className="bg-light-50 dark:bg-dark-200 hidden h-full items-center md:flex relative w-full">
              <div className="absolute text-center top-1/3 w-full">
                <h1 className="dark:text-white text-3xl">
                  Select a chat, {user?.fullName.split(" ")[0]}
                </h1>
              </div>
            </div>
            <div className="bg-light-50 dark:bg-dark-300 h-full md:hidden w-screen">
              <div className="animate__animated animate__fadeIn flex justify-between pl-3 pr-3 w-full">
                <div className="flex flex-grow items-center pt-2">
                  <NavLink to="/messenger/settings">
                    {user?.profilePicture ? (
                      <img
                        alt=""
                        className="cursor-pointer h-10 object-cover rounded-full w-10"
                        src={user?.profilePicture}
                      />
                    ) : (
                      <NoProfilePictureIcon className="cursor-pointer h-10 object-cover rounded-full w-10" />
                    )}
                  </NavLink>
                  <h3 className="dark:text-light-50 text-2xl ml-4 font-semibold">
                    Chats
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <NavLink to="/home">
                    <svg
                      className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </NavLink>
                  <UserGroupIcon className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9" />
                  <svg
                    className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
              </div>
              <NavLink
                className="animate__animated animate__fadeIn  flex items-center rounded-full bg-gray-100 dark:bg-dark-100 p-2 mt-3 mb-3 mr-3 ml-3 hover:bg-gray-200 transition duration-300"
                to="/messenger/search"
              >
                <input
                  className="ml-2 bg-transparent flex-grow cursor-pointer outline-none dark:placeholder-gray-400 placeholder-gray-500"
                  type="text"
                  placeholder="Search"
                />
              </NavLink>
              <div className="animate__animated animate__fadeIn  flex space-x-5 ml-4 mr-4 mb-2">
                <NavLink
                  className="hover:text-black"
                  to="messenger/rooms/create"
                >
                  <VideoCameraIcon className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-14 icon p-3 text-black w-14" />
                  <p className="dark:text-gray-400 text-center text-sm mt-1.5">
                    Create <br /> Room
                  </p>
                </NavLink>
                <NavLink className="hover:text-black" to="messenger/rooms">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-14 icon p-3 text-black w-14"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="dark:text-gray-400 text-center text-sm mt-1.5">
                    Your <br /> Room
                  </p>
                </NavLink>
              </div>
              <div className="pr-2 pl-2 pt-2 space-y-0.5">
                {conversations.map((conversation) => (
                  <ChatSidebar
                    conversation={conversation}
                    key={conversation._id}
                    user={user}
                    setChat={setCurrentChat}
                  />
                ))}
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        )}
        {currentChat && openChatOptions && (
          <ChatOptions
            user={user}
            viewProfilePictureHandler={() =>
              setOpenViewProfilePicture(!openViewProfilePicture)
            }
          />
        )}
      </div>
      <ViewProfilePicture
        openViewProfilePicture={openViewProfilePicture}
        user={user}
        userThatOwnThisProfile={user}
      />
    </>
  );
};
