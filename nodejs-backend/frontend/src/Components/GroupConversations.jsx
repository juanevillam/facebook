import styled from "styled-components";
import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";

export const duration = "0.4s";

export const Dialog = styled.div`
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: 100px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 460px;
  width: 330px;
  position: absolute;
  transition: transform ${duration};
  transform: translateY(${(p) => (p.open ? 0 : "100%")});
`;

export const GroupConversations = () => {
  const handleOpen = () => setOpen(!open);
  const [open, setOpen] = useState(false);

  return (
    <div className="block 2xl:hidden transition duration-300">
      <div>
        <h1 className="font-semibold text-gray-500 mb-1.5 ml-1.5 dark:text-gray-400">
          The Messenger Clone
        </h1>
        <div
          className="flex items-center group space-x-2.5 hover:bg-gray-200  dark:hover:bg-opacity-10 cursor-pointer p-2 rounded-xl transition duration-300"
          onClick={handleOpen}
        >
          <PlusIcon className="icon h-7 w-7 p-1.5 dark:bg-dark-100 dark:text-white" />
          <p className="text-sm font-semibold dark:text-gray-300">
            Send New Message
          </p>
        </div>
      </div>
      <Dialog className="dark:bg-dark-200 shadow-2xl pl-4 pr-4" open={open}>
        <div className="flex justify-between">
          <h1 className="font-medium pt-3 dark:text-ghost-white">
            New Message
          </h1>
          <XIcon
            className="h-8 w-8 mt-2.5 text-blue-500 hover:bg-gray-100 dark:hover:bg-opacity-10 cursor-pointer p-0.5 rounded-full transition duration-300"
            onClick={handleOpen}
          />
        </div>
      </Dialog>
    </div>
  );
};
