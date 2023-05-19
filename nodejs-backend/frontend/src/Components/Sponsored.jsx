// ** React Router DOM
import { NavLink } from "react-router-dom";

export const Sponsored = () => {
  return (
    <div className="mt-2">
      <h1 className="font-semibold text-gray-500 mb-2.5 ml-1.5 dark:text-gray-400">
        Sponsored
      </h1>
      <NavLink
        className="flex items-center group space-x-3 hover:bg-gray-200 cursor-pointer p-2 rounded-xl transition duration-300 dark:hover:bg-opacity-10"
        to="/juanvilla"
      >
        <img
          alt=""
          className="rounded-md h-24 lg:w-28 object-cover xl:w-24"
          src="https://avatars.githubusercontent.com/u/66635973?v=4"
        />
        <div>
          <p className="text-sm font-semibold dark:text-gray-300 xl:text-md">
            Founder
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300">Juan Villa</p>
        </div>
      </NavLink>
    </div>
  );
};
