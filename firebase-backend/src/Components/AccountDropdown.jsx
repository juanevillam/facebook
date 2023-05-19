import screenful from "screenfull";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../Actions/auth";
import { useDarkMode } from "../Hooks/useDarkMode";
import { LogoutIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon, AnnotationIcon, CogIcon, MoonIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";

export const AccountDropdown = ({ profile }) => {
    const dispatch = useDispatch();
    const [ darkMode, setDarkMode ] = useDarkMode();
    const handleLogout = () => dispatch( startLogout() );
    const [ screenFull, setScreenFull ] = useState( false );
    const [ openAccountDisplayAccesibility, setOpenAccountDisplayAccesibility ] = useState( false );
    
    const toggleFullScreen = () =>  {
        if ( screenFull ) {
            setScreenFull( false );
            screenful.toggle( document.getElementById( "facebook-clone" ).ariaCurrent );
        } if ( !screenFull ) {
            setScreenFull( true );
        };

    };

    return (
        <div className="absolute animate__animated animate__fadeIn animate__faster bg-white-white dark:bg-dark-200 block h-max pb-2.5 pl-2 pr-2 pt-2 right-1 rounded-xl shadow-lg top-14 w-max z-50">
            { openAccountDisplayAccesibility ?
                <>
                    <div className="p-2">
                        <div className="flex space-x-5">
                            <ArrowLeftIcon className="cursor-pointer dark:bg-dark-100 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:text-white duration-300 h-9 p-2 hover:bg-gray-100 rounded-full text-black transition w-9 bouncing" onClick={ () => setOpenAccountDisplayAccesibility( false ) } />
                            <h1 className="dark:text-white font-bold text-2xl bouncing">Display & Accesiblity</h1>
                        </div>
                        <div className="duration-300 flex mb-2 mt-3 pb-2.5 pl-1 pt-2 rounded-xl transition">
                            <MoonIcon className="cursor-default dark:bg-dark-100 dark:text-white icon text-black bouncing" />
                            <div className="">
                                <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Dark Mode</h1>
                                <p className="dark:text-gray-300 ml-2.5 mt-px text-gray-600 w-80 text-sm bouncing">Adjust the appearance of The Facebook Clone to reduce glare and look cooler.</p>
                            </div>
                        </div>
                        <label className="container bouncing dark:text-white hover:bg-gray-200 rounded-md transition duration-300 dark:hover:bg-opacity-20" onClick={ () => setDarkMode( false ) }>
                            <input defaultChecked={ !darkMode } name="darkMode" type="radio" />
                            <span className="checkmark"></span>
                            Off
                        </label>
                        <label className="container bouncing dark:text-white hover:bg-gray-200 rounded-md transition duration-300 dark:hover:bg-opacity-20" onClick={ () => setDarkMode( true ) }>
                            <input defaultChecked={ darkMode } name="darkMode" type="radio" />
                            <span className="checkmark"></span>
                            On
                        </label>
                        <div className="duration-300 flex mb-2 mt-3 pb-2.5 pl-1 pt-2 rounded-xl transition">
                            <svg className="cursor-default dark:bg-dark-100 dark:text-white icon text-black bouncing" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            <div className="">
                                <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Full Screen</h1>
                                <p className="dark:text-gray-300 ml-2.5 mt-px text-gray-600 w-80 text-sm bouncing">Adjust the screen size of The Facebook Clone to maximise the screen and share more.</p>
                            </div>
                        </div>
                        <label className="container bouncing dark:text-white hover:bg-gray-200 rounded-md transition duration-300 dark:hover:bg-opacity-20" onClick={ toggleFullScreen }>
                            <input defaultChecked={ !screenful.isFullscreen } name="screenful.isFullscreen" type="radio" />
                            <span className="checkmark"></span>
                            Off
                        </label>
                        <label className="container bouncing dark:text-white hover:bg-gray-200 rounded-md transition duration-300 dark:hover:bg-opacity-20" onClick={ toggleFullScreen }>
                            <input defaultChecked={ screenful.isFullscreen } name="screenful.isFullscreen" type="radio" />
                            <span className="checkmark"></span>
                            On
                        </label>
                    </div>
                </>
                :
                <>
                    <NavLink activeClassName="bg-thunder-100 bg-opacity-20" className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 items-center mb-2 p-2 rounded-xl transition" to={`/:${ profile?.username }`}>
                        { profile?.profilePicture ?
                            <img alt="" className="bouncing h-16 object-cover rounded-full w-16" src={ profile?.profilePicture } />
                            :
                            <NoProfilePictureIcon className="bouncing h-16 object-cover rounded-full w-16" />
                        }
                        <div>
                            <h1 className="dark:text-white font-semibold ml-2.5 text-black text-lg bouncing">{ profile?.fullName }</h1>
                            <p className="dark:text-gray-400 ml-2.5 -mt-1 text-gray-600 text-md bouncing">See your profile</p>
                        </div>
                    </NavLink>
                    <hr className="bg-gray-600" />
                    <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 mb-2 mt-2 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition">
                        <AnnotationIcon className="dark:bg-dark-100 dark:text-white icon text-black bouncing" />
                        <div>
                            <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Give Feedback</h1>
                            <p className="dark:text-gray-400 ml-2.5 mt-px text-gray-600 text-sm bouncing">Help me improve this Facebook.</p>
                        </div>
                    </div>
                    <hr className="bg-gray-600" />
                    <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 mt-2 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center">
                                <CogIcon className="dark:bg-dark-100 dark:text-white icon text-black bouncing" />
                                <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Settings & Privacy</h1>
                            </div>
                            <ChevronRightIcon className="cursor-pointer h-7 text-gray-500 w-7 bouncing" />
                        </div>
                    </div>
                    <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center">
                                <QuestionMarkCircleIcon className="dark:bg-dark-100 dark:text-white icon text-black bouncing" />
                                <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Help & Support</h1>
                            </div>
                            <ChevronRightIcon className="cursor-pointer h-7 text-gray-500 w-7 bouncing" />
                        </div>
                    </div>
                    <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition" onClick={ () => setOpenAccountDisplayAccesibility( true ) }>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center">
                                <MoonIcon className="dark:bg-dark-100 dark:text-white icon text-black bouncing" />
                                <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Display & Accesibility</h1>
                            </div>
                            <ChevronRightIcon className="cursor-pointer h-7 text-gray-500 w-7 bouncing" />
                        </div>
                    </div>
                    <div className="cursor-pointer dark:hover:bg-dark-400 duration-300 flex hover:bg-gray-100 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition" onClick={ handleLogout }>
                        <div className="flex items-center w-full">
                            <LogoutIcon className="dark:bg-dark-100 dark:text-white icon text-black bouncing" />
                            <h1 className="dark:text-white font-semibold ml-2.5 text-black text-md bouncing">Log Out</h1>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};