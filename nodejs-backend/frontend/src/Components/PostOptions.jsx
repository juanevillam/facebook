// ** Polished
import { rgba } from "polished";

// ** Styled Components
import styled from "styled-components";

// ** Icons
import {
  AddToFavoritesPostOptionsIcon,
  DeletePostPostOptionsIcon,
  EditPostOptionsIcon,
  HidePostPostOptions,
  MoveToArchivePostOptionsIcon,
  NotificationsPostOptionsIcon,
  SavePostOptionsIcon,
} from "../Icons";

export const PostOptionsDialog = styled.div`
  background-color: white;
  bottom: 0;
  right: 0;
  left: 0;
  height: max-content;
  position: fixed;
  transition: transform 0.3s;
  transform: translateY(${(p) => (p.openPostOptions ? 0 : "100%")});
  z-index: 100000;
`;

export const PostOptionsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 5000px;
  height: 5000px;
  background: ${rgba("black", 0.9)};
  visibility: ${(p) => (p.openPostOptions ? "visible" : "hidden")};
  opacity: ${(p) => (p.openPostOptions ? 1 : 0)};
  transition-property: visibility opacity;
  transition-duration: 0.2s;
`;

export const PostOptions = ({
  openPostOptions,
  post,
  setOpenEditPost,
  setOpenPostOptions,
  user,
}) => {
  return (
    <>
      <div className="block md:hidden">
        <PostOptionsOverlay
          openPostOptions={openPostOptions}
          onClick={() => setOpenPostOptions(false)}
        />
        <PostOptionsDialog openPostOptions={openPostOptions}>
          {post?.user?._id === user?._id ? (
            <>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
                Pin Post
              </button>
              <div className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <div className="cursor-pointer">
                  <h1>Save Post</h1>
                  <p className="text-xs text-gray-600">
                    Add this to your saved items.
                  </p>
                </div>
              </div>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Edit Post
              </button>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Edit Privacy
              </button>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                Move to archive
              </button>
              <div className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <div className="cursor-pointer">
                  <h1>Delete Post</h1>
                  <p className="text-xs text-gray-600">
                    Items in your trash are deleted inmediatly.
                  </p>
                </div>
              </div>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                Turn off notifications for this post
              </button>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Copy link
              </button>
            </>
          ) : (
            <>
              <div className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <div className="cursor-pointer">
                  <h1>Save Post</h1>
                  <p className="text-xs text-gray-600">
                    Add this to your saved items.
                  </p>
                </div>
              </div>
              <div className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <div className="cursor-pointer">
                  <h1>Add {post?.user?.fullName.split(" ")[0]} to Favorites</h1>
                  <p className="text-xs text-gray-600">
                    Prioritize her/his posts in News Feed.
                  </p>
                </div>
              </div>
              <div className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
                <div className="cursor-pointer">
                  <h1>Hide post</h1>
                  <p className="text-xs text-gray-600">
                    You will never see this post unless you want to.
                  </p>
                </div>
              </div>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Why am I seeing this post?
              </button>
              <div className="bg-gray-300 h-1 w-full"></div>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                Turn off notifications for this post
              </button>
              <button className="flex hover:bg-gray-200 transition duration-300 pt-2.5 pb-2.5 w-full items-center font-normal text-black text-lg">
                <svg
                  className="h-7 w-7 text-black mr-3 ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Copy link
              </button>
            </>
          )}
        </PostOptionsDialog>
      </div>
      <div className="hidden md:block">
        {openPostOptions && (
          <>
            {post?.user?._id === user?._id ? (
              <div className="absolute bg-light-50 border-1 border-gray-200 dark:border-dark-400 dark:bg-dark-200 duration-300 hidden md:block pb-2.5 pl-2 pr-2 pt-2 right-5 rounded-lg shadow-lg top-12 transition w-96 z-50">
                <div className="cursor-pointer duration-300 flex hover:bg-gray-200 dark:hover:bg-opacity-10 mb-2 pb-2.5 pl-2 pr-2 pt-2 rounded-md transition">
                  <div className="bouncing">
                    {false ? (
                      <>
                        <SavePostOptionsIcon
                          className="animate__animated animate__fadeIn animate__faster h-7 dark:hidden flex text-gray-700 w-7"
                          fill="black"
                        />
                        <SavePostOptionsIcon
                          className="animate__animated animate__fadeIn animate__faster h-7 dark:flex hidden text-gray-200 w-7"
                          fill="white"
                        />
                      </>
                    ) : (
                      <>
                        <SavePostOptionsIcon
                          className="h-7 dark:hidden flex text-gray-700 w-7"
                          fill="none"
                        />
                        <SavePostOptionsIcon
                          className="h-7 dark:flex hidden text-gray-200 w-7"
                          fill="none"
                        />
                      </>
                    )}
                  </div>
                  <div>
                    {false ? (
                      <h1 className="animate__animated animate__fadeIn animate__faster dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                        Post Saved
                      </h1>
                    ) : (
                      <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                        Save Post
                      </h1>
                    )}
                    {false ? (
                      <p className="animate__animated animate__fadeIn animate__faster dark:text-gray-400 ml-2.5 mt-0.5 text-gray-500 text-xs">
                        This post is now on your saved items.
                      </p>
                    ) : (
                      <p className="bouncing dark:text-gray-400 ml-2.5 mt-0.5 text-gray-500 text-xs">
                        Add this to your saved items.
                      </p>
                    )}
                  </div>
                </div>
                <hr className="bg-gray-400" />
                <div
                  className="cursor-pointer duration-300 dark:hover:bg-opacity-10 flex hover:bg-gray-200 items-center mt-2 pb-1.5 pl-2 pr-2 pt-1.5 rounded-md transition"
                  onClick={() => {
                    setOpenPostOptions(false);
                    setOpenEditPost(true);
                  }}
                >
                  <div className="bouncing">
                    <EditPostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-6"
                      fill="none"
                    />
                    <EditPostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-6"
                      fill="none"
                    />
                  </div>
                  <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                    Edit Post
                  </h1>
                </div>
                <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center mt-0.5 pb-1.5 pl-2 pr-2 pt-1.5 rounded-md transition">
                  <div className="bouncing">
                    <NotificationsPostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <NotificationsPostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <h1 className="bouncing  dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                    Turn off notifications for this post
                  </h1>
                </div>
                <hr className="bg-gray-500 mt-2 mb-2" />
                <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center mt-0.5  pb-1.5 pl-2 pr-2 pt-1.5 rounded-md  transition">
                  <div className="bouncing">
                    <MoveToArchivePostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <MoveToArchivePostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                    Move to Archive
                  </h1>
                </div>
                <div className="cursor-pointer duration-300 flex hover:bg-gray-200 dark:hover:bg-opacity-10 pb-2.5 pl-2 pr-2 pt-2 rounded-md transition">
                  <div className="bouncing">
                    <DeletePostPostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <DeletePostPostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <div>
                    <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                      Delete Post
                    </h1>
                    <p className="bouncing dark:text-gray-400 ml-2.5 mt-0.5 text-gray-500 text-xs">
                      Items in your trash are deleted inmediatly.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute bg-light-50 border-1 border-gray-200 dark:border-dark-400 dark:bg-dark-200 duration-300 hidden md:block pb-2.5 pl-2 pr-2 pt-2 right-5 rounded-lg shadow-lg top-12 transition w-96 z-50">
                <div className="cursor-pointer duration-300 flex hover:bg-gray-200 dark:hover:bg-opacity-10 mb-2 pb-2.5 pl-2 pr-2 pt-2 rounded-md transition">
                  <div className="bouncing">
                    <SavePostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <SavePostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <div>
                    <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                      Save Post
                    </h1>
                    <p className="bouncing dark:text-gray-400 ml-2.5 mt-0.5 text-gray-500 text-xs">
                      Add this to your saved items.
                    </p>
                  </div>
                </div>
                <hr className="bg-gray-400 mb-2" />
                <div className="cursor-pointer duration-300 flex hover:bg-gray-200 dark:hover:bg-opacity-10 mb-2 pb-2.5 pl-2 pr-2 pt-2 rounded-md transition">
                  <div className="bouncing">
                    <AddToFavoritesPostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <AddToFavoritesPostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <div>
                    <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                      Add {post?.user?.firstName} to Favorites
                    </h1>
                    <p className="bouncing dark:text-gray-400 ml-2.5 mt-0.5 text-gray-500 text-xs">
                      Prioritize her/his posts in News Feed.
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center mt-0.5 pb-1.5 pl-2 pr-2 pt-1.5 rounded-md transition">
                  <div className="bouncing">
                    <NotificationsPostOptionsIcon
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <NotificationsPostOptionsIcon
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <h1 className="bouncing  dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                    Turn off notifications for this post
                  </h1>
                </div>
                <div className="cursor-pointer duration-300 flex hover:bg-gray-200 dark:hover:bg-opacity-10 pb-2.5 pl-2 pr-2 pt-2 rounded-md transition">
                  <div className="bouncing">
                    <HidePostPostOptions
                      className="h-7 dark:hidden flex text-gray-700 w-7"
                      fill="none"
                    />
                    <HidePostPostOptions
                      className="h-7 dark:flex hidden text-gray-200 w-7"
                      fill="none"
                    />
                  </div>
                  <div>
                    <h1 className="bouncing dark:text-gray-200 duration-300 font-medium ml-2.5 text-md transition">
                      Hide Post
                    </h1>
                    <p className="bouncing dark:text-gray-400 ml-2.5 mt-0.5 text-gray-500 text-xs">
                      You will never see this post unless you want to.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
