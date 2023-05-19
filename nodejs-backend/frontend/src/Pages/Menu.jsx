// ** React
import { useState } from "react";

// ** React Redux
import { useDispatch } from "react-redux";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** Helpers
import { logout } from "../Helpers/logout.jsx";

// ** Icons
import { NoProfilePictureIcon } from "../Icons/index.jsx";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/solid";

// ** Custom Components
import { PageNotAvailable } from "../Components/PageNotAvailable.jsx";

export const Menu = ({ user }) => {
  const dispatch = useDispatch();
  const [seeMore, setSeeMore] = useState(false);
  const seeMoreHandler = () => setSeeMore(!seeMore);
  const logoutHandler = (e) => logout(dispatch, e);

  return (
    <>
      <div className="hidden md:flex scrollbar-hide">
        <PageNotAvailable />
      </div>
      <div className="flex md:hidden scrollbar-hide">
        <div className="dark:bg-dark-300 flex-grow h-screen md:pl-8 overflow-y-auto pb-40 scrollbar-hide w-screen">
          <div className="animate__animated animate__fadeIn lg:max-w-2xl max-w-md md:max-w-lg mx-auto">
            <div className="block ml-4 mr-4 mt-2">
              <div className="flex justify-between w-full">
                <h1 className="dark:text-light-400 font-semibold mt-1 text-2xl">
                  Menu
                </h1>
                <div className="flex space-x-2">
                  <SearchIcon className="dark:text-light-400 flex h-9 icon p-1.5 text-black w-9" />
                </div>
              </div>
              <div className="flex mb-2.5 mt-3 w-full">
                <div className="flex items-center space-x-3">
                  {user?.profilePicture ? (
                    <img
                      alt=""
                      className="h-10 rounded-full w-10"
                      src={user?.profilePicture}
                    />
                  ) : (
                    <NoProfilePictureIcon className="cursor-pointer h-10 rounded-full object-cover w-10" />
                  )}
                  <div>
                    <h1 className="dark:text-light-400 font-semibold text-lg">
                      {user?.fullName}
                    </h1>
                    <p className="dark:text-gray-400 -mt-1 text-gray-500 text-sm">
                      See your profile
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-3 space-x-2">
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">Groups</p>
                </div>
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://www.facebook.com/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">Saved</p>
                </div>
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://www.facebook.com/rsrc.php/v3/y1/r/uGfRd5KPhOI.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">Gaming</p>
                </div>
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">
                    Weather
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    className="h-7"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
                    alt=""
                  />
                  <p className="dark:text-light-400 font-medium mt-1">
                    COVID-19 <br /> Information Center{" "}
                  </p>
                </div>
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">
                    Find Friends
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">Videos</p>
                </div>
                <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 hover:bg-gray-100 h-full -mt-6 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                  <img
                    alt=""
                    className="h-7"
                    src="https://www.facebook.com/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
                  />
                  <p className="dark:text-light-400 font-medium mt-1">
                    Marketplace
                  </p>
                </div>
              </div>
              {!seeMore && (
                <div
                  className=" animate__animated animate__fadeIn bg-gray-200 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-light-400 duration-300 font-medium hover:bg-gray-300 mt-7 p-1.5 rounded-lg text-center transition w-full"
                  onClick={seeMoreHandler}
                >
                  See More
                </div>
              )}
              {seeMore && (
                <div className="animate__animated animate__fadeIn mb-2">
                  <div className="flex mt-2 space-x-2">
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/6Wl4cU2AiL8.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Campus
                      </p>
                    </div>
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 -mt-6 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Emotional Health
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100  pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Crisis Response
                      </p>
                    </div>
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 -mt-6 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Fundraisers
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Recent & Favorites
                      </p>
                    </div>
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 -mt-6 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Facebook Pay
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-7"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/FBOwekDrmB5.png"
                      />
                      <p className="dark:text-light-400 font-medium mt-1">
                        Live Videos
                      </p>
                    </div>
                    <div className="bg-light-50 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white duration-300 h-full hover:bg-gray-100 -mt-6 pb-2.5 pl-3 pr-3 pt-2.5 rounded-xl shadow-md transition w-6/12">
                      <img
                        alt=""
                        className="h-6"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
                      />
                      <p className="mt-1.5 font-medium dark:text-light-400">
                        Messenger
                      </p>
                    </div>
                  </div>
                  <div
                    className="animate__animated animate__fadeIn bg-gray-200 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-light-400 duration-300 font-medium hover:bg-gray-300 mt-4 p-1.5 rounded-lg text-center transition w-full"
                    onClick={seeMoreHandler}
                  >
                    See Less
                  </div>
                </div>
              )}
              <NavLink
                className="border-b-2 border-t-2 cursor-pointer dark:border-dark-100 flex hover:text-black items-center justify-between mt-3 pb-2.5 pl-2 pr-2 pt-2.5 w-full"
                to="/settings-privacy"
              >
                <div className="flex flex-grow items-center space-x-4">
                  <img
                    alt=""
                    className="h-8"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/lMh6BH0qkl7.png"
                  />
                  <h1 className="dark:text-light-400 font-semibold">
                    Settings & Privacy
                  </h1>
                </div>
                <ChevronRightIcon className="h-5" />
              </NavLink>
              <div className="border-b-2 cursor-pointer dark:border-dark-100 flex items-center justify-between pb-2.5 pl-2 pr-2 pt-2.5 w-full">
                <div className="flex flex-grow items-center space-x-4">
                  <img
                    alt=""
                    className="h-8"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/fJK06igzfM7.png"
                  />
                  <h1 className="dark:text-light-400 font-semibold">
                    Security & Login
                  </h1>
                </div>
                <ChevronRightIcon className="h-5" />
              </div>
              <div className="border-b-2 cursor-pointer dark:border-dark-100 flex items-center justify-between pb-2.5 pl-2 pr-2 pt-2.5 w-full">
                <div className="flex flex-grow items-center space-x-4">
                  <img
                    alt=""
                    className="h-8"
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/SvZaw7J3vAy.png"
                  />
                  <h1 className="dark:text-light-400 font-semibold">
                    Your Facebook Information
                  </h1>
                </div>
                <ChevronRightIcon className="h-5" />
              </div>
              <div
                className="bg-gray-200 cursor-pointer dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-light-400 duration-300 font-medium hover:bg-gray-300 mt-3 p-1.5 rounded-lg text-center transition w-full"
                onClick={logoutHandler}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
