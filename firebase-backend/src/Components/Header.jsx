import "../Styles/Header.css";
import React, { useState } from "react";
import { Dropdowns } from "./Dropdowns";
import { MenuIcon } from "../Icons/Menu";
import { HomeIcon } from "../Icons/Home";
import { WatchIcon } from "../Icons/Watch";
import { GamingIcon } from "../Icons/Gaming";
import { FriendsIcon } from "../Icons/Friends";
import { FacebookIcon } from "../Icons/Facebook";
import { SearchIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { NavLink, useLocation } from "react-router-dom";
import { MessengerIconMobile } from "../Icons/Messenger";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";
import Headroom from "react-headroom";

export const Header = ({ profile }) => {
    const location = useLocation();
    const [ openSearch, setOpenSearch ] = useState( false );
    
    return (
        <>
            <div className="hidden md:block relative inset-x-0">
                <div className="bg-white-white dark:bg-dark-200 duration-300 flex items-center md:px-3 shadow-sm sticky top-0 transition z-50">
                    <div className="flex flex-none items-center">
                        <NavLink to="/feed">
                            <img className="cursor-pointer h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" alt="" />
                        </NavLink>
                        <div className="bg-gray-100 cursor-pointer dark:bg-dark-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-20 duration-300 hover:bg-gray-200 items-center flex ml-2 p-2.5 rounded-full transition w-max" onClick={ () => setOpenSearch( true ) }>
                            <SearchIcon className="cursor-pointer duration-300 dark:text-gray-400 h-6 md:h-5 md:w-5 text-gray-500 transition w-6" />
                            <input className="bg-transparent cursor-pointer dark:placeholder-gray-400 duration-300 font-light flex-shrink hidden ml-2 outline-none placeholder-gray-500 transition xl:inline-flex" type="text" placeholder="Search Facebook" />
                        </div>
                    </div>
                    <div className="flex-grow hidden justify-center md:flex">
                        <div className="flex space-x-2">
                            <div className="Navlink relative">
                                <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black left-4 opacity-0 pb-1.5 pl-2.5 pr-2.5 pt-1.5 rounded-lg text-sm text-whiteWhite Tooltip top-14 xl:left-6">Home</div>
                                <NavLink className="cursor-pointer dark:bg-opacity-10 duration-300 flex group hover:bg-gray-100 h-12 items-center mt-1 mb-1 px-8 rounded-lg transition xl:px-10" activeClassName="activeHome group" to="/home">
                                   <HomeIcon />
                                </NavLink>
                            </div>
                            <div className="Navlink relative">
                                <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black left-3 opacity-0 pb-1.5 pl-2.5 pr-2.5 pt-1.5 rounded-lg text-sm text-whiteWhite Tooltip top-14 xl:left-5">Friends</div>
                                <NavLink className="cursor-pointer dark:bg-opacity-10 duration-300 flex group hover:bg-gray-100 h-12 items-center mt-1 mb-1 px-8 rounded-lg transition xl:px-10" activeClassName="activeFriends group" to="/friends">
                                    <FriendsIcon />
                                </NavLink>
                            </div>
                            <div className="Navlink relative">
                                <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black left-3.5 opacity-0 pb-1.5 pl-2.5 pr-2.5 pt-1.5 rounded-lg text-sm text-whiteWhite Tooltip top-14 xl:left-6">Watch</div>
                                <NavLink className="cursor-pointer dark:bg-opacity-10 duration-300 flex group hover:bg-gray-100 h-12 items-center mt-1 mb-1 px-8 rounded-lg transition xl:px-10" activeClassName="activeWatch group" to="/watch">
                                    <WatchIcon />
                                </NavLink>
                            </div>
                            <div className="Navlink relative">
                                <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black left-2.5 opacity-0 pb-1.5 pl-2.5 pr-2.5 pt-1.5 rounded-lg text-sm text-whiteWhite Tooltip top-14 xl:left-4.5">Gaming</div>
                                <NavLink className="cursor-pointer dark:bg-opacity-10 duration-300 flex group hover:bg-gray-100 h-12 items-center mt-1 mb-1 px-8 rounded-lg transition xl:px-10" activeClassName="activeMarketplace group" to="/marketplace">
                                    <GamingIcon />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none hidden items-center justify-end relative xl:flex">
                        <NavLink activeClassName="bg-thunder-100 bg-opacity-10" className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-100 items-center mr-3 p-1 pr-2 rounded-full transition w-max" to={`/:${ profile?.username }`}>
                            { profile?.profilePicture ? 
                                <img alt="" className="cursor-pointer h-7 object-cover rounded-full w-7" src={ profile?.profilePicture } />
                                :
                                <NoProfilePictureIcon className="cursor-pointer h-7 rounded-full object-cover w-7" />
                            }
                            { profile?.fullName ?
                                <p className={`dark:text-white ${ location.pathname === `/:${ profile?.username }` && "dark:text-thunder-100 text-thunder-100" } font-semibold hidden md:inline-flex pl-2 pr-1 text-sm whitespace-nowrap`}>{ profile?.fullName?.split(" ")[0] }</p>
                                :
                                <p className="dark:text-white font-semibold hidden md:inline-flex pl-2 pr-1 text-sm whitespace-nowrap">You</p>
                            }
                        </NavLink>
                    </div>
                    <Dropdowns profile={ profile } usedOn="Header" />
                    { openSearch && 
                        <div className="absolute animate__animated animate__fadeIn animate__faster bg-ghost-white dark:bg-dark-200 h-32 left-0 pl-2 pr-2 pt-2.5 right-5 rounded-xl shadow-lg top-0 w-80 z-50">
                            <div className="flex w-full">
                                <ArrowLeftIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:hover:bg-white dark:text-gray-400 duration-300 hover:bg-gray-200 h-9 mt-0.5 p-2 rounded-full text-gray-600 transition" onClick={  () => setOpenSearch( false ) } />
                                <div className="bg-gray-200 dark:bg-dark-100 flex items-center ml-2 p-2 rounded-full">
                                    <SearchIcon className="cursor-pointer dark:text-gray-400 h-5 ml-1 text-gray-500" />
                                    <input className="bg-transparent dark:placeholder-gray-400 flex-shrink hidden md:inline-flex ml-2 outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
                                </div>
                            </div>
                        </div>
                    }                    
                </div>
            </div>
                <div className="block md:hidden">
                    <Headroom>
                        <div className="bg-white-white dark:bg-dark-200 dark:border-dark-100 border-b border-gray-300 pb-2 pl-2 pr-2 pt-2" >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-none items-center">
                                    <NavLink to="/feed">
                                        <FacebookIcon type="text" />
                                    </NavLink>
                                </div>
                                <div className="flex space-x-2">
                                    <svg className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                    <NavLink to="/messenger">
                                        <MessengerIconMobile />
                                    </NavLink>
                                </div>  
                            </div>
                            <div className="flex justify-between mr-1 mt-2 -mb-2">
                                <NavLink className="cursor-pointer flex items-center" activeClassName="activeHome group" to="/home">
                                    <HomeIcon />
                                </NavLink>
                                <NavLink className="cursor-pointer flex items-center" activeClassName="activeFriends group" to="/friends">
                                   <FriendsIcon />
                                </NavLink>
                                <NavLink className="cursor-pointer flex items-center" activeClassName="activeWatch group" to="/watch">
                                   <WatchIcon />
                                </NavLink>
                                <NavLink className="cursor-pointer flex items-center" activeClassName="activeMarketplace group" to="/marketplace">
                                    <GamingIcon />
                                </NavLink>
                                <NavLink className="cursor-pointer flex items-center" activeClassName="activeMenu group" to="/menu">
                                    <MenuIcon />
                                </NavLink>
                            </div>
                        </div>
                    </Headroom>
                </div>

        </>
    );
};