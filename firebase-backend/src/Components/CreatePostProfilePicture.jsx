import React from "react";

export const CreatePostProfilePicture = ({ profilePicture }) => {
    return <img className="cursor-pointer h-12 object-cover rounded-full w-12" src={ profilePicture } alt="" />;
}