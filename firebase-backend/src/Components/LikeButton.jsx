import React from "react";

export const LikeButton = ({ like, likeHandler }) => {
    return (
        <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300" onClick={ likeHandler }>
            { like ? 
                <svg className="h-6 w-6 mr-1.5 text-thunder-100 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg> 
                : 
                <svg className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            }
            { like ? <p className="font-medium text-thunder-100 animate__animated animate__bounceIn animate__faster">Like</p> : <p className="dark:text-gray-400">Like</p> }
        </div>
    );
};