// ** React
import { useState } from "react";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** Icons
import { NoProfilePictureIcon } from "../Icons/index";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export const SidebarRow = ({ image, icon, title, to }) => {
  return (
    <NavLink
      className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 hover:no-underline hover:text-black items-center p-2 rounded-xl space-x-2 transition w-52"
      to={to}
    >
      {icon && (
        <img
          alt=""
          className="animate__animated animate__fadeIn h-7 w-7"
          src={icon}
        />
      )}
      {image && (
        <img
          alt=""
          className="animate__animated animate__fadeIn h-8 object-cover rounded-full w-8"
          src={image}
        />
      )}
      <p className="animate__animated animate__fadeIn dark:text-white font-medium hidden sm:inline-flex">
        {title}
      </p>
    </NavLink>
  );
};

export const Sidebar = ({ user }) => {
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = () => setSeeMore(!seeMore);

  return (
    <div className="dark:bg-dark-300 duration-300 h-screen hidden overflow-y-auto pt-px scrollbar-hide transition w-max xl:inline-flex">
      <div className="hidden md:block h-full overscroll-y-auto p-2 pt-2.5 w-54">
        {user?.profilePicture ? (
          <SidebarRow
            image={user?.profilePicture}
            title={user?.fullName}
            to={`/${user?.username}`}
          />
        ) : (
          <NavLink
            className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 hover:no-underline hover:text-black items-center p-2 rounded-xl space-x-2 transition w-52"
            to={`/${user?.username}`}
          >
            <NoProfilePictureIcon className="cursor-pointer h-7 rounded-full object-cover w-7" />
            {user?.fullName ? (
              <p className="animate__animated animate__fadeIn dark:text-white font-medium hidden sm:inline-flex">
                {user?.fullName}
              </p>
            ) : (
              <p className="animate__animated animate__fadeIn dark:text-white font-medium hidden sm:inline-flex">
                You
              </p>
            )}
          </NavLink>
        )}
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
          title="Find Friends"
          to="/friends"
        />
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/yq/r/YF1bztyGuX-.png"
          title="Messenger"
          to="/messenger"
        />
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
          title="Marketplace"
          to="/marketplace"
        />
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
          title="Groups"
          to="/groups"
        />
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
          title="Watch"
          to="/watch"
        />
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/y7/r/AYj2837MmgX.png"
          title="Memories"
          to="/memories"
        />
        <SidebarRow
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Zrzgh_mIaCN.png"
          title="Gaming Video"
          to="/gaming"
        />
        <SidebarRow
          icon="https://www.facebook.com/rsrc.php/v3/yr/r/2uPlV4oORjU.png"
          title="Saved"
          to="/saved"
        />
        <SidebarRow
          icon="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png"
          title="Ads"
          to="/ads"
        />
        {!seeMore && (
          <div
            className="animate__animated animate__fadeIn animate__faster cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 rounded-xl space-x-2 transition"
            onClick={handleSeeMore}
          >
            <ChevronDownIcon className="dark:bg-dark-100 dark:text-white flex h-8 icon p-1 w-8" />
            <p className="dark:text-white font-medium hidden sm:inline-flex">
              See more
            </p>
          </div>
        )}
        {seeMore && (
          <div className="animate__animated animate__fadeIn animate__faster mb-2">
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
              title="COVID-19"
              to="/covid-19"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png"
              title="Crisis Response"
              to="/crisis-response"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png"
              title="Emotional Health"
              to="/emotional-health"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png"
              title="Facebook Pay"
              to="/facebook-pay"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png"
              title="Favorites"
              to="/favorites"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png"
              title="Fundraisers"
              to="/fundraisers"
            />
            <SidebarRow
              icon="https://www.facebook.com/rsrc.php/v3/y6/r/U_sRIAvZ0k2.png"
              title="Hire Me"
              to="/founder"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/FBOwekDrmB5.png"
              title="Live Videos"
              to="/live"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png"
              title="Most Recent"
              to="/most-recent"
            />
            <SidebarRow
              icon="https://www.facebook.com/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
              title="Pages"
              to="/pages"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png"
              title="Play Games"
              to="/play-games"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png"
              title="Add Activity"
              to="/add-activity"
            />
            <SidebarRow
              icon="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png"
              title="Weather"
              to="/weather"
            />
            <div
              className="animate__animated animate__fadeIn animate__faster cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 rounded-xl space-x-2 transition"
              onClick={handleSeeMore}
            >
              <ChevronUpIcon className="dark:bg-dark-100 dark:text-white flex h-8 icon p-1 w-8" />
              <p className="dark:text-white font-medium hidden sm:inline-flex">
                See less
              </p>
            </div>
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
};
