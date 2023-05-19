import React from "react";
import { NavLink } from "react-router-dom";

export const PageNotAvailable = () => {
    const handleReturn = () => window.history.back();

    return (
        <div className="dark:bg-dark-300 duration-300 flex h-screen items-center justify-center transition w-screen">
            <div className="animate__animated animate__fadeIn  mx-auto -mt-14 h-max w-max">
                <img className="dark:hidden h-28 mx-auto w-28" src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg" alt="" />
                <img className="dark:block hidden h-28 mx-auto w-28" src="https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg" alt="" />
                <h1 className="dark:text-gray-300 font-bold text-lg mt-3.5 text-gray-600 text-center">This Page Isn"t Available</h1>
                <p className="dark:text-gray-400 mb-4 text-sm text-gray-600 text-center">This page only works on mobile, it only shows on small screens. <br /> Check to see if the link you"re trying to open is correct.</p>
                <NavLink className="bg-thunder-200 cursor-pointer duration-300 font-medium hover:bg-blue-600 ml-32 pb-2 pl-8 pr-8 pt-2 rounded-md text-white text-center transition w-max" to="/home">Go to News Feed</NavLink>
                <p className="cursor-pointer font-medium hover:underline mt-4 text-blue-500 text-center text-md" onClick={ handleReturn }>Go Back</p>
                <NavLink className="cursor-pointer font-medium hover:bg-text-blue-500 hover:underline mt-1.5 ml-40 text-blue-500 text-center text-md" to="/messenger">Go to Messenger</NavLink>
            </div>
        </div>
    );
};