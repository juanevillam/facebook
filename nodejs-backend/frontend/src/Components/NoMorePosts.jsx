// ** React Router DOM
import { NavLink } from "react-router-dom";

export const NoMorePosts = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster bg-light-50 dark:bg-dark-200 duration-300 flex flex-col items-center justify-center max-w-4xl md:rounded-lg md:shadow-sm mx-auto pb-4 pt-9 rounded-none text-dark-700 transition">
      <h1 className="dark:text-light-500 font-semibold text-xl">
        No more posts
      </h1>
      <p className="dark:text-light-500 mb-2 mt-0.5 text-sm text-dark-700">
        Add more friends to see more posts in your Feed.
      </p>
      <NavLink
        to="/friends"
        className="animate__animated animate__fadeIn bg-thunder-400 flex font-medium items-center justify-center mt-3 pb-2.5 pl-3 pr-3 pt-2.5 rounded-md text-center text-sm text-white w-max"
      >
        Find Friends
      </NavLink>
    </div>
  );
};
