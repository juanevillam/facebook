/* eslint-disable eqeqeq */
// ** Timeago.js / Dates
import { format } from "timeago.js";

// ** React Router DOM
import { NavLink } from "react-router-dom";

// ** React
import { useEffect, useState } from "react";

// ** Custom Components
import { Video } from "./Video.jsx";
import { Comments } from "./Comments.jsx";
import { LikeButton } from "./LikeButton.jsx";
import { EmojiPicker } from "./EmojiPicker.jsx";
import { PostOptions } from "./PostOptions.jsx";
import { ShareButton } from "./ShareButton.jsx";
import { ViewComments } from "./ViewComments.jsx";
import { EditPostModal } from "./EditPostModal.jsx";
import { CommentsButton } from "./CommentsButton.jsx";

// ** React Redux
import { useDispatch, useSelector } from "react-redux";

// ** Helpers
import { handleLike } from "../Helpers/handleLike.jsx";
import { postComment } from "../Helpers/postComment.jsx";

// ** Icons
import { XIcon } from "@heroicons/react/solid";
import { NoProfilePictureIcon } from "../Icons/index";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export const Post = ({ post, token, user }) => {
  // ** Hooks
  const dispatch = useDispatch();
  const comments = post?.comments;
  const likes = post?.likes.length;
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [openEditPost, setOpenEditPost] = useState(false);
  const [openPostOptions, setOpenPostOptions] = useState(false);
  const [openViewComments, setOpenViewComments] = useState(false);
  const { isUploadingComment } = useSelector((state) => state.UiReducer);

  // ** Methods
  const hidePostHandler = () => console.log("hidePostHandler");
  const postCommentHandler = (e) =>
    postComment(comment, dispatch, e, post?._id, setComment, user?._id);
  const likeHandler = () =>
    handleLike(isLiked, post?._id, setIsLiked, user?._id);

  // ** useEffect
  useEffect(
    () => setIsLiked(post?.likes?.includes(user?._id)),
    [user?._id, post?.likes]
  );

  return (
    <>
      <div className="animate__animated animate__fadeIn animate__faster bg-light-50 dark:bg-dark-200 duration-300 max-w-4xl md:my-4 md:rounded-lg md:shadow-sm mt-3 mx-auto rounded-none transition z-0">
        <div className="flex justify-between">
          <div className="flex pb-2.5 pl-3 pr-2.5 pt-2.5 space-x-2.5">
            <NavLink to={`/${post?.user?.username}`}>
              {post?.profilePicture ? (
                <img
                  alt=""
                  className="h-11 object-cover rounded-full w-11"
                  src={post?.profilePicture}
                />
              ) : (
                <NoProfilePictureIcon className="h-11 object-cover rounded-full w-11" />
              )}
            </NavLink>
            <div className="-mt-0.5">
              <div className="md:-mb-0.5 -mb-1.5">
                <NavLink to={`/${post?.user?.username}`}>
                  <h1 className="dark:text-white font-medium hover:underline inline-flex md:text-lg -mb-1.5 text-black text-md ">
                    {post?.user?.fullName}
                  </h1>
                </NavLink>
                <div className="dark:text-white hidden md:inline-block">
                  {post?.felling && (
                    <>
                      <img
                        alt=""
                        className="h-5 w-5 inline-flex ml-2 -mt-0.5 mr-2"
                        src={post?.fellingEmoji}
                      />
                      <p className="font-medium inline-flex text-md md:text-lg">
                        is felling {post?.felling}
                      </p>
                    </>
                  )}
                </div>
                <div className="dark:text-white inline-block md:hidden">
                  {post?.felling && (
                    <>
                      <p className="font-medium inline-flex ml-1.5 text-md">
                        is
                      </p>
                      <img
                        alt=""
                        className="h-5 inline-flex ml-1.5 -mt-0.5 w-5"
                        src={post?.fellingEmoji}
                      />
                    </>
                  )}
                </div>
              </div>
              <p className="dark:text-gray-400 font-normal md:text-sm pl-0.5 text-gray-500 text-xs">
                {format(post?.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex pb-2.5 pr-1 pt-2.5 relative space-x-1.5">
            <DotsHorizontalIcon
              className={`${
                openPostOptions && "bg-gray-200"
              } cursor-pointer dark:bg-opacity-10 dark:text-gray-400 duration-300 hidden hover:bg-gray-200 h-8 md:flex -mt-1 p-1 rounded-full text-gray-600 transition w-8`}
              onClick={() => setOpenPostOptions(!openPostOptions)}
            />
            <DotsHorizontalIcon
              className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 flex hover:bg-gray-200 h-8 md:hidden -mt-1 p-1 rounded-full text-gray-600 transition w-8"
              onClick={() => setOpenPostOptions(!openPostOptions)}
            />
            {post?.user?._id !== user?._id && (
              <XIcon
                className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 flex hover:bg-gray-200 h-8 -mt-1 p-1 rounded-full text-gray-600 transition w-8"
                onClick={hidePostHandler}
              />
            )}
            <PostOptions
              openPostOptions={openPostOptions}
              post={post}
              setOpenEditPost={setOpenEditPost}
              setOpenPostOptions={setOpenPostOptions}
              user={user}
            />
          </div>
        </div>
        <p
          className={`dark:text-white pl-3.5 text-black ${
            !post?.image && "mb-1 text-xl"
          }`}
        >
          {post?.thoughts}
        </p>
        {post?.image && (
          <>
            {post?.image[post?.image?.length - 1] === "4" ? (
              <div className="mt-2">
                <Video image={post?.image} />
              </div>
            ) : (
              <>
                <NavLink
                  className="block mt-2 h-max"
                  to={`/post/:${post?._id}`}
                >
                  <img
                    alt=""
                    className="animate__animated animate__fadeIn cursor-pointer w-full"
                    src={post?.image}
                  />
                </NavLink>
              </>
            )}
          </>
        )}
        {isLiked && (
          <div className="flex items-center justify-between pl-3 pr-4 pt-2.5">
            <div
              className={`animate__animated animate__bounceIn animate__faster flex items-center space-x-2 ${
                !post?.image ? "mb-2" : "mb-3"
              }`}
            >
              <img
                alt=""
                className="h-5 w-5"
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              />
              <div className="text-gray-500 inline-flex animate__animated animate__fadeIn animate__faster dark:text-gray-400">
                <p>You</p>
                {likes.length > 2 && <p>, and others</p>}
              </div>
            </div>
            {comments.length > 0 && (
              <div
                className="animate__animated animate__bounceIn animate__faster cursor-pointer dark:text-gray-400 hidden hover:underline mb-3 md:inline-flex ml-1 text-gray-500"
                onClick={() => setOpenViewComments(!openViewComments)}
              >
                {comments.length}
                <div className="text-transparent">i</div>
                {comments.length > 1 ? <p>Comments</p> : <p>Comment</p>}
              </div>
            )}
            {comments.length > 0 && (
              <div
                className="animate__animated animate__bounceIn animate__faster cursor-pointer dark:text-gray-400 hover:underline inline-flex mb-3 md:hidden text-gray-500"
                onClick={() => {
                  setOpenViewComments(!openViewComments);
                }}
              >
                {comments.length}
                <div className="text-transparent">i</div>
                {comments.length > 1 ? <p>Comments</p> : <p>Comment</p>}
              </div>
            )}
          </div>
        )}
        <hr className={`bg-gray-500 -mt-px`} />
        <div className="flex justify-between">
          <LikeButton isLiked={isLiked} likeHandler={likeHandler} />
          <CommentsButton
            setOpenViewComments={setOpenViewComments}
            openViewComments={openViewComments}
          />
          <ShareButton />
        </div>
        <hr className="bg-gray-400" />
        <div>
          {openViewComments && (
            <div className="border-blue-500 border-l-3 pb-3 pl-4 pr-4 pt-3 hidden md:block">
              {comments?.length === 0 ? (
                <h1 className="dark:text-light-400">
                  No comments yet. Be the first to commet!
                </h1>
              ) : (
                <Comments comments={comments} user={user} />
              )}
            </div>
          )}
          <div className="items-center hidden md:flex space-x-2 pl-4 pr-4 mt-3">
            <NavLink to={`/${post?.username}`}>
              <NoProfilePictureIcon className="cursor-pointer h-12 object-cover rounded-full w-12" />
            </NavLink>
            <form className="flex -mt-1 w-full" onSubmit={postCommentHandler}>
              <div className="flex rounded-full h-10 border-1 bg-gray-100 dark:bg-dark-100 dark:border-dark-100 flex-grow justify-between w-full">
                <input
                  className="pl-4 text-left font-normal flex-grow bg-transparent outline-none input dark:placeholder-gray-300 dark:text-gray-200"
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={`${
                    isUploadingComment
                      ? "Uploading a comment..."
                      : "Write a comment..."
                  }`}
                  value={comment}
                />
                <div className="flex items-center ml-2 mr-1 relative">
                  {isUploadingComment ? (
                    <svg
                      className="animate-spin h-5 mr-2 text-white w-5"
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
                  ) : (
                    <>
                      <EmojiPicker postId={post?._id} userId={user?._id} />
                      <svg
                        className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 dark:text-gray-400 dark:hover:bg-opacity-10 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </div>
              <button
                disabled={isUploadingComment}
                hidden
                type="submit"
                onClick={postCommentHandler}
              >
                Hidden Submit
              </button>
            </form>
          </div>
          <p className="hidden md:flex ml-20 text-xs pb-3 text-gray-600 dark:text-gray-400">
            {isUploadingComment ? "Please wait" : "Press enter to post."}
          </p>
        </div>
      </div>
      <EditPostModal
        openEditPost={openEditPost}
        post={post}
        setOpenEditPost={setOpenEditPost}
        token={token}
        user={user}
      />
      <ViewComments
        comment={comment}
        openViewComments={openViewComments}
        postCommentHandler={postCommentHandler}
      />
    </>
  );
};
