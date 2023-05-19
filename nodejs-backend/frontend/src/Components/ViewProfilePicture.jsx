import React from "react";
import styled from "styled-components";
import { Dropdowns } from "./Dropdowns";
import { NavLink } from "react-router-dom";
import { NoProfilePictureIcon } from "../Icons/index";

export const ViewProfilePictureOverlay = styled.div`
  background: black;
  height: 5000px;
  left: 0;
  opacity: ${(props) => (props.openViewProfilePicture ? 1 : 0)};
  position: fixed;
  top: 0;
  transition-duration: 0.3s;
  transition-property: visibility opacity;
  visibility: ${(props) =>
    props.openViewProfilePicture ? "visible" : "hidden"};
  width: 5000px;
  z-index: 50;
`;

export const ViewProfilePicture = ({
  openViewProfilePicture,
  setOpenViewProfilePicture,
  user,
  userThatOwnThisProfile,
}) => {
  return (
    <div className="hidden md:block">
      <ViewProfilePictureOverlay
        openViewProfilePicture={openViewProfilePicture}
        onClick={() => setOpenViewProfilePicture(false)}
      />
      {openViewProfilePicture && (
        <div className="absolute h-screen inset-0 mx-auto rounded-lg z-50">
          <div className="absolute left-5 hidden md:flex space-x-4 top-4 z-10">
            <svg
              className="animate__animated animate__fadeIn animate__faster cursor-pointer h-7 text-white w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpenViewProfilePicture(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <NavLink to="/feed">
              <img
                alt=""
                className="animate__animated animate__fadeIn animate__faster cursor-pointer h-10 -mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
              />
            </NavLink>
          </div>
          {userThatOwnThisProfile?.profilePicture ? (
            <img
              alt=""
              className="animate__animated animate__fadeIn animate__faster h-full object-contain w-full"
              src={userThatOwnThisProfile?.profilePicture}
            />
          ) : (
            <NoProfilePictureIcon className="animate__animated animate__fadeIn animate__faster h-full object-contain w-full" />
          )}
          <div className="absolute flex right-3 space-x-4 top-2">
            <Dropdowns user={user} usedOn="CreateStory" />
          </div>
        </div>
      )}
    </div>
  );
};
