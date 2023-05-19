export const CommentsButton = ({ setOpenViewComments, openViewComments }) => {
  return (
    <>
      <div
        className="flex md:hidden w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300"
        onClick={() => setOpenViewComments(!openViewComments)}
      >
        {openViewComments ? (
          <svg
            className="h-6 w-6 mr-1.5 text-thunder-100 animate__animated animate__bounceIn animate__faster"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
        {openViewComments ? (
          <p className="font-medium text-thunder-100 animate__animated animate__bounceIn animate__faster">
            Comments
          </p>
        ) : (
          <p className="dark:text-gray-400">Comments</p>
        )}
      </div>
      <div
        className="hidden md:flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300"
        onClick={() => setOpenViewComments(!openViewComments)}
      >
        {openViewComments ? (
          <svg
            className="h-6 w-6 mr-1.5 text-thunder-100 animate__animated animate__bounceIn animate__faster"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
        {openViewComments ? (
          <p className="font-medium text-thunder-100 animate__animated animate__bounceIn animate__faster">
            Comments
          </p>
        ) : (
          <p className="dark:text-gray-400">Comments</p>
        )}
      </div>
    </>
  );
};
