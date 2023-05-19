// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** Icons
import {
  DotsHorizontalIcon,
  PencilAltIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

export const MessengerDropdown = ({ setOpenMessenger }) => {
  return (
    <div className="absolute animate__animated animate__fadeIn animate__faster bg-light-50 block dark:bg-dark-200 duration-300 h-96 pb-3 pl-4 pr-4 pt-2.5 right-5 shadow-lg rounded-xl top-14 transition w-96">
      <div className="flex items-center justify-between w-full">
        <h1 className="dark:text-light-400 font-bold text-2xl bouncing">
          Messenger
        </h1>
        <div className="flex space-x-2">
          <DotsHorizontalIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 hover:bg-gray-100 h-8 p-1.5 rounded-full text-gray-500 transition" />
          <VideoCameraIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 hover:bg-gray-100 h-8 p-1.5 rounded-full text-gray-500 transition" />
          <PencilAltIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 hover:bg-gray-100 h-8 p-1.5 rounded-full text-gray-500 transition" />
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-dark-100 flex items-center mt-3 p-1.5 rounded-full bouncing">
        <SearchIcon className="cursor-pointer dark:text-gray-400 h-5 ml-1 text-gray-500" />
        <input
          className="bg-transparent dark:placeholder-gray-400 dark:text-white flex-shrink hidden md:inline-flex ml-2 outline-none placeholder-gray-500"
          type="text"
          placeholder="Search Messenger"
        />
      </div>
      <NavLink
        className="absolute bouncing bottom-4 hover:underline hover:text-blue-500 ml-24 text-blue-500"
        onClick={() => setOpenMessenger(false)}
        to="/messenger"
      >
        See all in Messenger
      </NavLink>
    </div>
  );
};
