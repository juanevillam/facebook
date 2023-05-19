import Swal from "sweetalert2";
import React, { useState } from "react";
import ReactTimeago from "react-time-ago";
import { db } from "../Database/firebase";
import { NavLink } from "react-router-dom";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";

export const Comment = ({ comment, commentId, createdBy, postId, profile, width }) => {
    const [ openPostCommentOptions, setOpenPostCommentOptions ] = useState( false );

    const handleDeleteComment = async() => {
        Swal.fire({
            title: "Deleting Comment",
            text: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading() 
        });

        await db.collection( "posts" ).doc( postId ).collection( "comments" ).doc( commentId ).delete();

        Swal.close();
    };

    return (
        <div className="animate__animated animate__fadeIn group mb-1.5 relative">
            <div className="flex">
                <NavLink to={`/:${ comment?.username }`}>
                    { comment?.profilePicture ?
                        <img alt="" className="cursor-pointer h-11 object-cover rounded-full w-11" src={ comment?.profilePicture } />
                        :
                        <NoProfilePictureIcon className="cursor-pointer h-11 object-cover rounded-full w-11" />
                    }
                </NavLink>
                <div className={`bg-gray-100 break-words dark:bg-dark-100 ml-2 pb-2 pl-3 pr-3 pt-2 rounded-2xl ${ width }`}>
                    <NavLink to={`/:${ comment?.username }`}>
                        <p className="dark:text-white font-semibold hover:underline text-gray-700 text-xs">{ comment?.fullName }</p>
                    </NavLink>
                    { comment?.comment && 
                        <p className="dark:text-white font-regular text-gray-700  text-sm">{ comment?.comment }</p>
                    }
                    { comment?.emojiUrl && 
                        <img alt="" className="h-7 mt-1 w-7" src={ comment?.emojiUrl } /> 
                    }
                </div>
                { createdBy === profile?.id && <DotsHorizontalIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 group-hover:opacity-100 hidden hover:bg-gray-200 h-8 md:block ml-1.5 mt-1.5 opacity-0 p-1.5 rounded-full text-gray-600 transition w-8" onClick={ () => setOpenPostCommentOptions( !openPostCommentOptions ) } /> }
                { openPostCommentOptions && createdBy === profile?.id &&
                    <div className="absolute animate__animated animate__fadeIn animate__faster bg-white-white dark:bg-dark-100 hidden h-max md:block pb-2.5 pl-2 pr-2 pt-2 right-5 rounded-xl shadow-2xl top-10 w-96 z-50">
                        <div className="cursor-pointer duration-300 flex hover:bg-gray-100 dark:hover:bg-opacity-10 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition" onClick={ handleDeleteComment }>
                            <svg className="h-7 text-black dark:text-white w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <div>
                                <h1 className="dark:text-gray-200 font-medium ml-2.5 text-black text-md">Delete Comment</h1>
                                <p className="dark:text-gray-400 ml-2.5 mt-0.5 text-gray-600 text-xs">Items in your trash are deleted inmediatly.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="flex mt-0.5 space-x-1">
                <p className="cursor-pointer dark:text-gray-400 font-semibold hover:underline ml-16 text-gray-600 text-xs">Like</p>
                <p className="cursor-pointer dark:text-gray-400 font-semibold hover:underline ml-16 text-gray-600 text-xs">•</p>
                <p className="cursor-pointer dark:text-gray-400 font-semibold hover:underline ml-16 text-gray-700 text-xs">Reply</p>
                <p className="cursor-pointer dark:text-gray-400 font-semibold hover:underline ml-16 text-gray-600 text-xs">•</p>
                { comment?.dateCreated && <ReactTimeago className="dark:text-gray-400 font-normal text-gray-500 text-xs" date={ new Date( comment?.dateCreated?.toDate() ) } locale="en-US" timeStyle="twitter" /> }
            </div>
        </div>
    );
};