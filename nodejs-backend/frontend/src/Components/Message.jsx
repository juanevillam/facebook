import { useState } from "react";
import { MoreOptionsIconMessenger } from "../Icons/index";

export const Message = ({ message, user }) => {
  const [moreOptions, setMoreOptions] = useState(false);

  return (
    <div className="flex group items-center">
      {message?.text && (
        <div
          className={`flex items-center ${
            message?.sender === user?._id && "ml-auto"
          }`}
        >
          {message?.sender === user?._id && (
            <MoreOptionsIconMessenger
              moreOptions={moreOptions}
              setMoreOptions={setMoreOptions}
            />
          )}
          <div
            className={`animate__animated animate__fadeIn lg:text-base max-w-xs mb-1.5 pb-3 pl-4 pr-4 pt-3 ${
              message?.text?.length > 30 && "pl-6 pr-6"
            } ${
              message?.sender === user?._id
                ? "bg-thunder-300 dark:bg-thunder-300 ml-auto"
                : "bg-light-100 dark:bg-dark-100"
            } rounded-full text-justify text-sm w-max xl:max-w-lg`}
          >
            <p
              className={`${
                message?.sender === user?._id
                  ? "text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {message?.text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
