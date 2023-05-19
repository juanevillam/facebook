// ** React
import { useEffect } from "react";

// ** React Redux
import { useDispatch, useSelector } from "react-redux";

// ** React Toastify
import { ToastContainer, toast } from "react-toastify";

// ** Helpers
import { fetchPostsOnHome } from "../Helpers/fetchPostsOnHome";
import { welcomeMessageOnHome } from "../Helpers/welcomeMessageOnHome";

// ** Custom Components
import { Post } from "../Components/Post";
import { Sidebar } from "../Components/Sidebar";
import { CreatePost } from "../Components/CreatePost";
import { NoMorePosts } from "../Components/NoMorePosts";
import { Sponsored } from "../Components/Sponsored.jsx";
import { GroupConversations } from "../Components/GroupConversations.jsx";

export const Home = ({ darkMode, token, user }) => {
  // ** Hooks
  const dispatch = useDispatch();
  const { postsOnHome } = useSelector((state) => state.UiReducer);

  // ** useEffect
  useEffect(
    () => welcomeMessageOnHome(toast, user?.firstName),
    [user?.firstName]
  );

  useEffect(
    () => fetchPostsOnHome(dispatch, postsOnHome, token, user?._id),
    [dispatch, postsOnHome, token, user?._id]
  );

  return (
    <div className="flex flex-grow md:overflow-hidden max-w-screen-2xl">
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme={darkMode ? "dark" : "light"}
      />
      <Sidebar user={user} />
      <div className="bg-gray-300 dark:bg-dark-300 duration-300 flex-grow md:bg-transparent overflow-y-auto pb-20 scrollbar-hide transition">
        <div className="lg:max-w-2xl max-w-md md:max-w-lg mx-auto">
          <div className="md:mt-4.5">
            <CreatePost token={token} user={user} />
          </div>
          <div className="max-w-lg mx-auto md:pb-0 pb-10 z-10">
            {postsOnHome?.map((post) => (
              <div key={post._id}>
                <Post post={post} token={token} user={user} />
              </div>
            ))}
            {postsOnHome?.length === 0 && <NoMorePosts />}
          </div>
        </div>
      </div>
      <div className="dark:bg-dark-300 duration-300 flex-col hidden mxl:flex lg:w-72 pb-2 pl-2 pt-3 pr-5 relative transition xl:w-60">
        <Sponsored />
        <br />
        <GroupConversations />
      </div>
    </div>
  );
};
