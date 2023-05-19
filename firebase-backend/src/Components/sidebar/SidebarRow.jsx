import React from "react";
import { NavLink } from "react-router-dom";

export const SidebarRow = ({ image, icon, title, to }) => {
    return (
        <NavLink className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 hover:no-underline hover:text-black items-center p-2 rounded-xl space-x-2 transition w-52" to={ to }>
            { icon && <img alt="" className="animate__animated animate__fadeIn h-7 w-7" src={ icon } /> }
            { image && <img  alt="" className="animate__animated animate__fadeIn h-8 object-cover rounded-full w-8" src={ image } /> }
            <p className="animate__animated animate__fadeIn dark:text-white font-medium hidden sm:inline-flex">{ title }</p>
        </NavLink>
    );
};