// ** Styles
import "../Styles/Animations.css";
import "../Styles/CreatePost.css";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** Icons
import { SearchIcon } from "@heroicons/react/outline";
import {
  BookOpenIcon,
  BriefcaseIcon,
  FlagIcon,
  PencilAltIcon,
  ShoppingBagIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

export const MenuDropdown = ({ user }) => {
  return (
    <div className="absolute animate__animated animate__fadeIn animate__faster bg-ghost-white block dark:bg-dark-400 duration-300 h-max pb-3 pl-4 pr-4 pt-2.5 rounded-xl right-5 shadow-lg top-14 transition w-max z-50">
      <h1 className="dark:text-light-400 font-bold mb-2 text-2xl bouncing">
        Menu
      </h1>
      <div>
        <div className="flex xl:space-x-2">
          <div className="bg-white hidden rounded-xl xl:block">
            <div className="dark:bg-dark-200 duration-300 h-96 overflow-scroll pl-3 pr-3 pt-0.5 rounded-lg shadow-md transition w-96">
              <div className="bg-gray-100 dark:bg-dark-400 flex items-center mb-4 mt-3 p-1.5 rounded-full bouncing">
                <SearchIcon className="cursor-pointer dark:text-gray-300 h-5 ml-1 text-gray-500" />
                <input
                  className="bg-transparent dark:placeholder-gray-300 dark:text-gray-300 flex-shrink hidden md:inline-flex ml-2 outline-none placeholder-gray-600"
                  type="text"
                  placeholder="Search Menu"
                />
              </div>
              <h1 className="dark:text-light-400 font-semibold ml-2.5 mt-1.5 text-lg bouncing">
                Social
              </h1>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/6Wl4cU2AiL8.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Campus
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing bouncing">
                    A unique, exclusive space for college students on The
                    Facebook Clone.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Find Friends
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Search for friends or people you may know.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Groups
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Connect with people who share your interests.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/DOal__ng_AH.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    News Feed
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    See relevant posts from people and Pages you follow.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Pages
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Discover and connect with businesses on The Facebook Clone.
                  </p>
                </div>
              </div>
              <hr className="mr-2 mt-3 mb-4 ml-2 dark:text-gray-500" />
              <h1 className="text-lg font-semibold ml-2.5 mt-1.5 mb-1.5 dark:text-light-400">
                Entertainment
              </h1>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Zrzgh_mIaCN.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Gaming Video
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Watch and connect with your favorite games and streamers.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Play Games
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Play your favorite games.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Watch
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    A video destination personalized to your interests and
                    connections.
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray-500 mb-4 ml-2 mt-3 mr-2" />
              <h1 className="dark:text-light-400 font-semibold mb-1.5 ml-2.5 mt-1.5 text-lg">
                Shopping
              </h1>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Facebook Pay
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    A seamless, secure way to pay on the apps you already use.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Marketplace
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Buy and sell in your comunity.
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray-500 mb-4 ml-2 mt-3 mr-2" />
              <h1 className="dark:text-light-400 font-semibold mb-1.5 ml-2.5 mt-1.5 text-lg">
                Personal
              </h1>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Recent Ad Activity
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    See all the ads you interacted with on The Facebook Clone.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Memories
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Browse your old photos, videos and posts on The Facebook
                    Clone.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Saved
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Find posts, photos, and videos that you saved for later.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Weather
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Check your local forecast and sign up for daily weather
                    notifications.
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray-500 mb-4 ml-2 mt-3 mr-2" />
              <h1 className="dark:text-light-400 font-semibold mb-1.5 ml-2.5 mt-1.5 text-lg">
                Professional
              </h1>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Ads
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Create, manage and track the performance of your ads.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/U_sRIAvZ0k2.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Hire Me
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Reach me to create products like this.
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray-500 mb-4 ml-2 mt-3 mr-2" />
              <h1 className="dark:text-light-400 font-semibold mb-1.5 ml-2.5 mt-1.5 text-lg">
                Community Resources
              </h1>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    COVID-19 Information Center
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    See the latest prevention tips, community resources and
                    updates from health organizations.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Crises Response
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Find the latest updates for recent crises happening around
                    the world.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex p-2 rounded-xl hover:bg-gray-100 transition">
                <img
                  className="h-9 w-9 bouncing"
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    Fundraisers
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Donate and raise mony for non-profits and personal causes.
                  </p>
                </div>
              </div>
              <hr className="dark:text-gray-500 mb-4 ml-2 mt-3 mr-2" />
              <h1 className="dark:text-light-400 font-semibold mb-1.5 ml-2.5 mt-1.5 text-lg">
                More from Juan Villa
              </h1>
              <NavLink
                className="cursor-pointer dark:bg-opacity-10 flex duration-300 hover:bg-gray-100 p-2 rounded-xl transition"
                to="/messenger"
              >
                <img
                  className="h-7 ml-1 mt-1 w-7"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
                  alt=""
                />
                <div className="mb-1 ml-2.5 mt-px">
                  <h1 className="dark:text-white font-medium mb-px text-black text-md bouncing">
                    The Messenger Clone
                  </h1>
                  <p className="dark:text-gray-400 text-gray-500 text-sm bouncing">
                    Chat instantly with your friends and connections.
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="bg-white rounded-xl">
            <div className="dark:bg-dark-200 duration-300 h-96 overflow-scroll pl-1.5 pr-1.5 pt-2.5 rounded-lg shadow-md transition w-48">
              <h1 className="dark:text-white font-bold mb-2.5 ml-2 text-xl bouncing">
                Create
              </h1>
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <PencilAltIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Post
                </h1>
              </div>
              <NavLink
                className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 hover:no-underline p-2 rounded-xl transition"
                to="/stories/create"
              >
                <BookOpenIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Story
                </h1>
              </NavLink>
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <VideoCameraIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Room
                </h1>
              </div>
              <hr className="bg-gray-600 mt-2 ml-2 mr-2" />
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 mt-2 p-2 rounded-xl transition">
                <FlagIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Page
                </h1>
              </div>
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <SpeakerphoneIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Ad
                </h1>
              </div>
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Group
                </h1>
              </div>
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Event
                </h1>
              </div>
              <NavLink
                className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 hover:no-underline p-2 rounded-xl transition"
                to="/marketplace"
              >
                <ShoppingBagIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Marketplace
                </h1>
              </NavLink>
              <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                <BriefcaseIcon className="dark:bg-dark-100 dark:text-white h-9 icon p-1.5 text-black w-9 bouncing" />
                <h1 className="dark:text-white font-semibold ml-2.5 mt-1.5 text-black text-md bouncing">
                  Hire Me
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
