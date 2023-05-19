/* eslint-disable no-mixed-operators */

// ** Framer Motion / Animations
import { motion } from "framer-motion";

// ** React Router
import { useParams } from "react-router";

// ** Custom Components
import { Post } from "../Components/Post";

// ** React
import { useEffect, useState } from "react";

// ** Icons
import { NoProfilePictureIcon } from "../Icons/index";

// ** React Redux
import { useDispatch, useSelector } from "react-redux";

// ** Custom Components
import { CreatePost } from "../Components/CreatePost";
import { ViewProfilePicture } from "../Components/ViewProfilePicture";

// ** Helpers
import { fetchUserOnProfile } from "../Helpers/fetchUserOnProfile";
import { fetchPostsOnProfile } from "../Helpers/fetchPostsOnProfile";
import { followUnfollowUserOnProfile } from "../Helpers/followUnfollowUserOnProfile";

export const Profile = ({ token, user }) => {
  // ** Hooks
  const dispatch = useDispatch();
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [userThatOwnThisProfile, setUserThatOwnThisProfile] = useState({});
  const [openViewProfilePicture, setOpenViewProfilePicture] = useState(false);
  const [followed, setFollowed] = useState(
    user?.followings?.includes(userThatOwnThisProfile?._id)
  );
  const { isFetchingFollow, isFetchingUnfollow } = useSelector(
    (state) => state.AuthReducer
  );

  // ** Methods
  const viewProfilePictureHandler = () => setOpenViewProfilePicture(true);
  const folowUnfollowHandler = () =>
    followUnfollowUserOnProfile(
      followed,
      dispatch,
      setFollowed,
      user?._id,
      userThatOwnThisProfile?._id
    );

  // ** useEffect
  useEffect(
    () => fetchPostsOnProfile(setPosts, token, username),
    [token, username]
  );
  useEffect(
    () => setFollowed(user?.followings?.includes(userThatOwnThisProfile?._id)),
    [user, userThatOwnThisProfile?._id]
  );
  useEffect(
    () => fetchUserOnProfile(username, setUserThatOwnThisProfile),
    [username]
  );

  useEffect(() => console.log(posts), [posts]);

  return (
    <div className="bg-gray-300 dark:bg-dark-300 duration-300 flex-grow h-max md:bg-light-300 md:dark:bg-dark-300 md:overflow-y-auto transition w-screen">
      <div className="animate__animated animate__fadeIn bg-gray-300 dark:bg-dark-300 duration-300 flex-grow h-max md:bg-transparent md:h-screen transition">
        <div className="bg-light-50 border-b dark:bg-dark-200 dark:border-dark-400 duration-300 h-5/6 transition w-screen z-30">
          <div className="bg-gray-200 dark:bg-dark-300 duration-300 h-2/3 max-w-4xl mx-auto relative rounded-b-lg transition w-full pb-96">
            <div className="absolute -bottom-24 flex items-strech max-w-4xl mx-auto pl-8 pr-8 w-full z-20">
              {userThatOwnThisProfile?.profilePicture ? (
                <motion.img
                  alt=""
                  className="cursor-pointer h-44 object-cover rounded-full w-44"
                  src={userThatOwnThisProfile?.profilePicture}
                  onClick={viewProfilePictureHandler}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                />
              ) : (
                <motion.div
                  className="bg-light-50 cursor-pointer dark:bg-dark-200 duration-300 object-cover p-1 rounded-full transition"
                  onClick={viewProfilePictureHandler}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NoProfilePictureIcon className="cursor-pointer h-40 object-cover rounded-full w-40" />
                </motion.div>
              )}
              <input hidden type="file" />
              <div className="flex justify-between pt-24 w-full">
                <div className="pl-5">
                  <h1 className="dark:text-white duration-300 font-semibold text-3xl text-black transition">
                    {userThatOwnThisProfile?.fullName}
                  </h1>
                  <div className="flex">
                    <p className="dark:text-gray-400 duration-300 font-medium hover:underline text-gray-600 transition">
                      {userThatOwnThisProfile?.followers?.length}
                      {userThatOwnThisProfile?.followers?.length === 1
                        ? " Follower"
                        : " Followers"}
                    </p>
                    <p className="dark:text-gray-400 duration-300 font-medium px-2 text-gray-600 transition">
                      •
                    </p>
                    <p className="dark:text-gray-400 duration-300 font-medium hover:underline text-gray-600 transition">
                      {userThatOwnThisProfile?.followings?.length} Following{" "}
                    </p>
                  </div>
                </div>
                {username !== user?.username && (
                  <div>
                    <button
                      className={`bg-gray-100 cursor-pointer dark:bg-dark-100 dark:text-white duration-300 flex font-medium items-center mt-2 pb-2 pl-4 pr-4 pt-2 rounded-lg text-black transition ${
                        isFetchingFollow || isFetchingUnfollow
                          ? ""
                          : "dark:hover:bg-white dark:hover:bg-opacity-20 hover:bg-gray-200"
                      } ${isFetchingFollow && "cursor-not-allowed"}  ${
                        isFetchingUnfollow && "cursor-not-allowed"
                      }`}
                      disabled={isFetchingFollow || isFetchingUnfollow}
                      onClick={folowUnfollowHandler}
                    >
                      {followed ? "Unfollow" : "Follow"}

                      {isFetchingFollow && (
                        <svg
                          className="animate-spin h-4 ml-2.5 text-white w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      )}
                      {isFetchingUnfollow && (
                        <svg
                          className="animate-spin h-4 ml-2.5 text-white w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:max-w-4xl md:max-w-3xl md:space-x-4 md:mt-4 md:pl-0 md:pr-0 mx-auto pl-3 pr-3 w-full">
          {username === user?.username ? (
            <div className="bg-light-50 dark:bg-dark-200 duration-300 h-full hidden md:block pb-4 pl-4 pr-4 pt-3.5 rounded-lg sticky transition w-7/12">
              <h1 className="dark:text-white duration-300 font-bold text-black text-xl transition">
                Intro
              </h1>
              <div className="pt-3 space-y-5">
                <div className="animate__animated animate__fadeIn bg-gray-200 cursor-pointer dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:text-white duration-300 font-medium hover:bg-gray-400 hover:bg-opacity-40 pb-2 pt-2 rounded-lg text-black text-center transition w-full">
                  Add Bio
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5 w-7/12">
              <div className="bg-light-50 dark:bg-dark-200 duration-300 pb-4.5 pl-4 pr-4 pt-3.5 rounded-lg transition w-full">
                <h1 className="animate__animated animate__fadeIn font-bold dark:text-white text-black text-xl">
                  Intro
                </h1>
                {userThatOwnThisProfile?.bio && (
                  <h1 className="animate__animated animate__fadeIn dark:text-white text-center">
                    {userThatOwnThisProfile?.bio}
                  </h1>
                )}
                <hr className="bg-gray-500 mb-3 mt-3" />
                {userThatOwnThisProfile?.relationship && (
                  <div className="flex items-center space-x-2">
                    <img
                      alt=""
                      className="h-5 image-1 w-5"
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/eu1ZIPJje34.png"
                    />
                    <h1 className="animate__animated animate__fadeIn dark:text-white">
                      {userThatOwnThisProfile?.relationship}
                    </h1>
                  </div>
                )}
              </div>
              <div className="bg-light-50 dark:bg-dark-200 duration-300 pb-3.5 pl-4 pr-4 pt-3.5 rounded-lg transition w-full">
                <h1 className="animate__animated animate__fadeIn font-bold dark:text-white text-black text-xl">
                  Photos
                </h1>
              </div>
              <div className="bg-light-50 dark:bg-dark-200 duration-300 pb-3.5 pl-4 pr-4 pt-3.5 rounded-lg transition w-full">
                <h1 className="animate__animated animate__fadeIn font-bold dark:text-white text-black text-xl">
                  Friends
                </h1>
              </div>
            </div>
          )}
          <div className="h-max max-w-lg rounded-xl w-full">
            {username === user?.username ? (
              <CreatePost user={user} />
            ) : (
              <div className="bg-light-50 dark:bg-dark-200 duration-300 pb-3.5 pl-4 pr-4 pt-3.5 rounded-lg transition w-full">
                <h1 className="font-bold dark:text-white text-black text-xl">
                  Posts
                </h1>
              </div>
            )}
            {posts?.map((post) => (
              <Post key={post._id} post={post} />
            ))}
            {posts?.length === 0 && (
              <h1 className="dark:text-light-400 duration-300 font-bold mt-4 text-black text-center text-lg transition">
                No posts available
              </h1>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <ViewProfilePicture
        openViewProfilePicture={openViewProfilePicture}
        setOpenViewProfilePicture={setOpenViewProfilePicture}
        user={user}
        userThatOwnThisProfile={userThatOwnThisProfile}
      />
    </div>
  );
};
