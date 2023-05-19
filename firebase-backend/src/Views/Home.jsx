import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../Components/Post.jsx";
import { Stories } from "../Components/Stories";
import { CreatePost } from "../Components/CreatePost";
import { Sponsored } from "../Components/Sponsored.jsx";
import { GroupConversations } from "../Components/GroupConversations.jsx";

export const Home = ({ profile }) => {
  const { posts } = useSelector((state) => state);
  document.title = "The Facebook Clone • By Juan Villa";
  const { userIsViewingStory } = useSelector((state) => state.story);

  return (
    <div className="flex flex-grow md:overflow-hidden max-w-7xl">
      <div
        className={`bg-gray-300 dark:bg-dark-300 duration-300 flex-grow md:bg-transparent md:overflow-y-auto pb-20 scrollbar-hide transition ${
          userIsViewingStory === true && "z-50"
        }`}
      >
        <div className="bg-gray-300 dark:bg-dark-300 md:bg-transparent w-full">
          <div className="lg:max-w-2xl max-w-md md:max-w-lg mx-auto">
            <div className="hidden md:block">
              <Stories profile={profile} />
            </div>
            <CreatePost profile={profile} />
            <div className="block md:hidden">
              <Stories profile={profile} />
            </div>
            {userIsViewingStory !== true && (
              <div className="max-w-lg mx-auto md:pb-0 pb-10 z-10">
                {posts?.map(({ id, post }) => (
                  <Post key={id} post={post} postId={id} profile={profile} />
                ))}
              </div>
            )}
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
