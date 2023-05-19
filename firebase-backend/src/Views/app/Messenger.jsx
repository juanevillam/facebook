import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../Database/firebase";
import { VideoCameraIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { ChatSidebar } from "../../components/messenger/ChatSidebar.jsx";
import { GroupSidebar } from "../../components/messenger/GroupSidebar.jsx";
import { MessengerSidebar } from "../../components/messenger/MessengerSidebar";
import { MessengerHeader } from "../../components/messenger/MessengerHeader.jsx";

export const Messenger = () => {
  const [groups, setGroups] = useState([]);
  const [user] = useAuthState(auth);
  const userChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChat);
  document.title = `Messenger • ${user.displayName
    .split(" ")
    .slice(0, 2)
    .join(" ")}`;
  useEffect(
    () =>
      db
        .collection("groups")
        .onSnapshot((snapshot) =>
          setGroups(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        ),
    []
  );

  return (
    <>
      <MessengerHeader />
      <div>
        <MessengerSidebar />
        <div className="w-full">
          <div className="block md:hidden bg-white-white dark:bg-dark-300 pt-1 h-screen">
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
              <NavLink className="hover:text-black" to="messenger/rooms/create">
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
            <div className="animate__animated animate__fadeIn  ml-3 mr-3">
              {chatsSnapshot?.docs.map((chat) => (
                <ChatSidebar
                  key={chat.id}
                  id={chat.id}
                  users={chat.data().users}
                />
              ))}
              {groups.map((group) => (
                <GroupSidebar
                  key={group.id}
                  id={group.id}
                  name={group.data.name}
                  groupPictureUrl={group.data.groupPictureUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
