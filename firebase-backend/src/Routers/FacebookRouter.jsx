import React from "react";
import { Home } from "../Views/Home";
import { Menu } from "../Views/Menu";
import { Watch } from "../Views/Watch";
import { useSelector } from "repact-redux";
import { StoryId } from "../Views/StoryId";
import { Friends } from "../Views/Friends";
import { Profile } from "../Views/Profile";
import { Header } from "../Components/Header";
import { Sidebar } from "../Components/Sidebar";
import { useDarkMode } from "../Hooks/useDarkMode";
import { CreateStory } from "../Views/CreateStory";
import { Switch, Route, Redirect } from "react-router-dom";

export const FacebookRouter = (props) => {
  useDarkMode();
  const profile = useSelector((state) => state.profile);

  return (
    <div className="max-w-screen-2xl mx-auto" id="facebook-clone">
      {props.location.pathname !== "/messenger" && (
        <div
          className={`${
            props.location.pathname.startsWith("/stories") && "hidden"
          } ${props.location.pathname.startsWith("/post") && "hidden"} ${
            props.location.pathname.startsWith("/watch") && "hidden md:block"
          } ${
            props.location.pathname.startsWith("/messenger/settings") &&
            "hidden"
          } ${
            props.location.pathname.startsWith("/messenger/group") &&
            "hidden md:block"
          } ${
            props.location.pathname.startsWith("/messenger/chat") &&
            "hidden md:block"
          }`}
        >
          <Header profile={profile} />
        </div>
      )}
      <div className="flex h-screen w-screen flex-grow">
        {props.location.pathname === "/home" && <Sidebar profile={profile} />}
        <Switch>
          <Route
            path="/home"
            component={() => <Home profile={profile} />}
            exact
          />
          <Route
            path="/menu"
            component={() => <Menu profile={profile} />}
            exact
          />
          <Route
            path="/watch"
            component={() => <Watch profile={profile} />}
            exact
          />
          <Route
            path="/friends"
            component={() => <Friends profile={profile} />}
            exact
          />
          <Route
            path="/:username"
            component={() => <Profile myProfile={profile} />}
            exact
          />
          <Route
            path="/stories/create"
            component={() => <CreateStory profile={profile} />}
            exact
          />
          <Route
            path="/stories/:storyId"
            component={() => <StoryId profile={profile} />}
            exact
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
};
