import React from "react";
import { NavLink } from "react-router-dom";
import { CogIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/outline";

export const StoriesSidebar = ({ profilePicture, fullName }) => {
    // const { story } = useSelector( state => state.story );

    const handleReturn = () => window.history.back();

    const handleShareStory = ( e ) => {
        e.preventDefault();
        document.getElementById( "StoriesSidebar__Footer" ).classList.toggle( "hidden" );
        document.getElementById( "StoriesSidebar__Footer__Loading" ).classList.remove( "hidden" );
        document.getElementById( "StoriesSidebar__Footer__Loading" ).classList.toggle( "flex" );
    };

    return (
        <div className="bg-white-white dark:bg-dark-200 duration-300 hidden md:block relative transition w-96">
            <div className="border-b-2 dark:border-dark-100 flex pb-2 pl-3 pt-2 shadow-sm">
                <XIcon className="animate__animated animate__fadeIn bg-gray-400 cursor-pointer dark:bg-dark-100 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 duration-300 hover:bg-gray-500 h-10 mr-2 p-2 rounded-full text-white transition w-10" onClick={ handleReturn } />
                <NavLink to="/feed">
                    <img className="animate__animated animate__fadeIn cursor-pointer h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" alt="" />
                </NavLink>
            </div>
            <div className="animate__animated animate__fadeIn border-b border-white-white dark:border-dark-100 pb-6 pl-3 pt-6 relative">
                <CogIcon className="absolute dark:text-white dark:hover:bg-gray-100 dark:hover:bg-opacity-20 duration-300 icon right-4 text-black top-4 transition"/>
                <h1 className="dark:text-white duration-300 font-bold text-black transition text-2xl">Your Story</h1>
                <div className="flex items-center mt-4">
                    <img alt="" className="h-16 object-cover rounded-full w-16" src={ profilePicture } />
                    <h1 className="dark:text-white duration-300 font-semibold ml-3 text-black text-lg transition">{ fullName }</h1>
                </div>
            </div>
            <div className="hidden border-t pl-3 pr-3 pb-2.5 pt-3 w-full absolute bottom-2 animate__animated animate__fadeIn" id="StoriesSidebar__Footer">
                <button className="p-2 w-full focus:outline-none bg-blue-600 hover:bg-blue-700 transition duration-300 text-white rounded-lg font-medium" onClick={ handleShareStory }>Share to Story</button>                   
            </div>
            <div className="hidden border-t pl-3 pr-3 pb-2.5 pt-3 w-full absolute bottom-2" id="StoriesSidebar__Footer__Loading">
                <button className= "mt-2 p-2 w-full focus:outline-none bg-gray-200 text-gray-400 rounded-lg font-medium">Share to Story</button>
            </div>
        </div>
    );
};