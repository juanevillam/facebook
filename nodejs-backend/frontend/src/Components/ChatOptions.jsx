// ** Framer Motion / Animations
import { motion } from "framer-motion";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** Icons
import { NoProfilePictureIcon } from "../Icons/index";

export const ChatOptions = ({ user, viewProfilePictureHandler }) => {
  return (
    <div className="bg-light-50 border-l-2 dark:bg-dark-200 dark:border-dark-400 h-screen hidden md:block w-1/4">
      <div className="flex flex-col items-center justify-center pt-3 w-full">
        {user?.profilePicture ? (
          <motion.img
            alt=""
            className="cursor-pointer h-44 object-cover rounded-full w-44"
            src={user?.profilePicture}
            onClick={viewProfilePictureHandler}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          />
        ) : (
          <motion.div
            className="bg-light-50 cursor-pointer dark:bg-dark-200 duration-300 object-cover rounded-full transition"
            onClick={viewProfilePictureHandler}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <NoProfilePictureIcon className="cursor-pointer h-24 object-cover rounded-full w-24" />
          </motion.div>
        )}
        <NavLink
          className="dark:text-light-400 font-semibold hover:underline mt-2 text-black"
          to={`/${user?.username}`}
        >
          Juan Villa
        </NavLink>
      </div>
    </div>
  );
};
