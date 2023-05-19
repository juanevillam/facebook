/// ** React
/// ** React
import { useState } from "react";

/// ** Styles
import "../Styles/Header.css";
import "../Styles/Animations.css";

/// ** React Router DOM
import { useLocation } from "react-router-dom";

/// ** Custom Componets
import { MenuDropdown } from "./MenuDropdown";
import { AccountDropdown } from "./AccountDropdown";
import { MessengerDropdown } from "./MessengerDropdown";
import { NotificationsDropdown } from "./NotificationsDropdown";

/// ** Helpers
import { handleOpenDropdown } from "../Helpers/handleOpenDropdown";
import { handleSetActiveDropdown } from "../Helpers/handleSetActiveDropdown";

/// ** Icons
import {
  AccountDropdownIcon,
  NotificationsDropdownIcon,
  MenuDropdownIcon,
  MessengerDropdownIcon,
} from "../Icons/index";

export const Dropdowns = ({ darkMode, setDarkMode, user, usedOn }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openMessenger, setOpenMessenger] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  ///////////////////////// usedOn Header /////////////////////////

  const handleOpenMenuHeader = () => {
    handleSetActiveDropdown(openMenu, "MenuIcon__Header", setOpenMenu);
    handleOpenDropdown(openAccount, "AccountIcon__Header", setOpenAccount);
    handleOpenDropdown(
      openMessenger,
      "MessengerIcon__Header",
      setOpenMessenger
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIconDarkMode__Header",
      setOpenMessenger
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIcon__Header",
      setOpenNotifications
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIconDarkMode__Header",
      setOpenNotifications
    );
  };

  const handleOpenMessengerHeader = () => {
    handleOpenDropdown(openMenu, "MenuIcon__Header", setOpenMenu);
    handleOpenDropdown(openAccount, "AccountIcon__Header", setOpenAccount);
    handleSetActiveDropdown(
      openMessenger,
      "MessengerIcon__Header",
      setOpenMessenger
    );
    handleSetActiveDropdown(
      openMessenger,
      "MessengerIconDarkMode__Header",
      setOpenMessenger
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIcon__Header",
      setOpenNotifications
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIconDarkMode__Header",
      setOpenNotifications
    );
  };

  const handleOpenNotificationsHeader = () => {
    handleOpenDropdown(openMenu, "MenuIcon__Header", setOpenMenu);
    handleOpenDropdown(openAccount, "AccountIcon__Header", setOpenAccount);
    handleOpenDropdown(
      openMessenger,
      "MessengerIcon__Header",
      setOpenMessenger
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIconDarkMode__Header",
      setOpenMessenger
    );
    handleSetActiveDropdown(
      openNotifications,
      "NotificationsIcon__Header",
      setOpenNotifications
    );
    handleSetActiveDropdown(
      openNotifications,
      "NotificationsIconDarkMode__Header",
      setOpenNotifications
    );
  };

  const handleOpenAccountHeader = () => {
    handleOpenDropdown(openMenu, "MenuIcon__Header", setOpenMenu);
    handleSetActiveDropdown(openAccount, "AccountIcon__Header", setOpenAccount);
    handleOpenDropdown(
      openMessenger,
      "MessengerIcon__Header",
      setOpenMessenger
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIconDarkMode__Header",
      setOpenMessenger
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIcon__Header",
      setOpenNotifications
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIconDarkMode__Header",
      setOpenNotifications
    );
  };

  ///////////////////////// usedOn CreateStory /////////////////////////

  const handleOpenMenuCreateStory = () => {
    handleSetActiveDropdown(openMenu, "MenuIcon__CreateStory", setOpenMenu);
    handleOpenDropdown(openAccount, "AccountIcon__CreateStory", setOpenAccount);
    handleOpenDropdown(
      openMessenger,
      "MessengerIcon__CreateStory",
      setOpenMessenger
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIconDarkMode__CreateStory",
      setOpenMessenger
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIcon__CreateStory",
      setOpenNotifications
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIconDarkMode__CreateStory",
      setOpenNotifications
    );
  };

  const handleOpenMessengerCreateStory = () => {
    handleOpenDropdown(openMenu, "MenuIcon__CreateStory", setOpenMenu);
    handleOpenDropdown(openAccount, "AccountIcon__CreateStory", setOpenAccount);
    handleSetActiveDropdown(
      openMessenger,
      "MessengerIcon__CreateStory",
      setOpenMessenger
    );
    handleSetActiveDropdown(
      openMessenger,
      "MessengerIconDarkMode__CreateStory",
      setOpenMessenger
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIcon__CreateStory",
      setOpenNotifications
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIconDarkMode__CreateStory",
      setOpenNotifications
    );
  };

  const handleOpenNotificationsCreateStory = () => {
    handleOpenDropdown(openMenu, "MenuIcon__CreateStory", setOpenMenu);
    handleOpenDropdown(openAccount, "AccountIcon__CreateStory", setOpenAccount);
    handleOpenDropdown(
      openMessenger,
      "MessengerIcon__CreateStory",
      setOpenMessenger
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIconDarkMode__CreateStory",
      setOpenMessenger
    );
    handleSetActiveDropdown(
      openNotifications,
      "NotificationsIcon__CreateStory",
      setOpenNotifications
    );
    handleSetActiveDropdown(
      openNotifications,
      "NotificationsIconDarkMode__CreateStory",
      setOpenNotifications
    );
  };

  const handleOpenAccountCreateStory = () => {
    handleOpenDropdown(openMenu, "MenuIcon__CreateStory", setOpenMenu);
    handleSetActiveDropdown(
      openAccount,
      "AccountIcon__CreateStory",
      setOpenAccount
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIcon__CreateStory",
      setOpenMessenger
    );
    handleOpenDropdown(
      openMessenger,
      "MessengerIconDarkMode__CreateStory",
      setOpenMessenger
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIcon__CreateStory",
      setOpenNotifications
    );
    handleOpenDropdown(
      openNotifications,
      "NotificationsIconDarkMode__CreateStory",
      setOpenNotifications
    );
  };

  return (
    <div className="flex items-center space-x-2">
      {usedOn === "Header" && (
        <>
          <MenuDropdownIcon
            handleOpenMenu={handleOpenMenuHeader}
            id="MenuIcon__Header"
          />
          {location?.pathname !== "/messenger" && (
            <MessengerDropdownIcon
              handleOpenMessenger={handleOpenMessengerHeader}
              id="MessengerIcon__Header"
              idDarkMode="MessengerIconDarkMode__Header"
              openMessenger={openMessenger}
            />
          )}
          <NotificationsDropdownIcon
            handleOpenNotifications={handleOpenNotificationsHeader}
            id="NotificationsIcon__Header"
            idDarkMode="NotificationsIconDarkMode__Header"
            openNotifications={openNotifications}
          />
          <AccountDropdownIcon
            handleOpenAccount={handleOpenAccountHeader}
            id="AccountIcon__Header"
          />
        </>
      )}
      {usedOn === "CreateStory" && (
        <>
          <MenuDropdownIcon
            handleOpenMenu={handleOpenMenuCreateStory}
            id="MenuIcon__CreateStory"
          />
          <MessengerDropdownIcon
            handleOpenMessenger={handleOpenMessengerCreateStory}
            id="MessengerIcon__CreateStory"
            idDarkMode="MessengerIconDarkMode__CreateStory"
            openMessenger={openMessenger}
          />
          <NotificationsDropdownIcon
            handleOpenNotifications={handleOpenNotificationsCreateStory}
            id="NotificationsIcon__CreateStory"
            idDarkMode="NotificationsIconDarkMode__CreateStory"
            openNotifications={openNotifications}
          />
          <AccountDropdownIcon
            handleOpenAccount={handleOpenAccountCreateStory}
            id="AccountIcon__CreateStory"
          />
        </>
      )}
      {openMenu && <MenuDropdown user={user} />}
      {openNotifications && <NotificationsDropdown />}
      {openAccount && (
        <AccountDropdown
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
        />
      )}
      {openMessenger && (
        <MessengerDropdown setOpenMessenger={setOpenMessenger} />
      )}
    </div>
  );
};
