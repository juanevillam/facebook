// ** React
import { useEffect, useState } from "react";

// ** Icons
import { NoProfilePictureIcon } from "../Icons/index";

// ** Helpers
import { fetchFriendOnChatSidebar } from "../Helpers/fetchFriendOnChatSidebar";

export const ChatSidebar = ({ conversation, user, setChat }) => {
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const friendId = conversation?.members?.find((m) => m !== user?._id);

    if (friendId) {
      fetchFriendOnChatSidebar(friendId, setFriend);
    }
  }, [conversation, user]);

  return (
    <div
      className="flex pl-2 dark:hover:bg-opacity-10 hover:bg-gray-100 items-center hover:no-underline hover:text-black transition duration-300 animate__animated animate__fadeIn animate__faster cursor-pointer rounded-lg"
      onClick={() => setChat(conversation)}
    >
      {friend?.profilePicture ? (
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={friend?.profilePicture}
          alt=""
        />
      ) : (
        <NoProfilePictureIcon className="cursor-pointer h-20 object-cover rounded-full w-20" />
      )}
      <div className="ml-3 -mt-2 w-full">
        <h2 className="dark:text-light-400 font-medium mb-0.5">
          {friend?.fullName}
        </h2>
        <p className="dark:text-dark-600 text-gray-700 text-xs">
          You sent a voice message. • 8w
        </p>
      </div>
    </div>
  );
};
