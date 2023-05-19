import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../Database/firebase";
import { startLogout } from "../Actions/auth.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/solid";
import { PageNotAvailable } from "../Components/PageNotAvailable.jsx";

export const Menu = () => {
    const dispatch = useDispatch();
    const [ user ] = useAuthState( auth );
    const [ seeMore, setSeeMore ] = useState( false );
    const handleSeeMore = () => setSeeMore( !seeMore );
    const handleLogout = () => dispatch( startLogout() );

    return (
        <>
            <div className="hidden md:flex scrollbar-hide">
                <PageNotAvailable />
            </div>
            <div className="flex md:hidden scrollbar-hide">
                <div className="dark:bg-dark-300 flex-grow h-screen pb-40 md:pl-8 overflow-y-auto scrollbar-hide w-screen">
                    <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl animate__animated animate__fadeIn">                            
                       <div className="block mt-2 mr-4 ml-4">
                            <div className="flex w-full justify-between">
                                <h1 className="dark:text-ghost-white text-2xl font-semibold mt-1">Menu</h1>
                                <div className="flex space-x-2">
                                    <SearchIcon className="dark:text-white icon h-9 w-9 flex p-1.5 text-black" />
                                </div>   
                           </div>
                           <div className="flex w-full mt-3 mb-2.5">
                                <div className="flex space-x-3 items-center">
                                    <img className="h-10 w-10 rounded-full" src={ user.photoURL } alt="" />
                                    <div>
                                        <h1 className="dark:text-white text-lg font-semibold">{ user.displayName }</h1>
                                        <p className="dark:text-gray-400 text-sm text-gray-500 -mt-1">See your profile</p>
                                    </div>
                                </div>   
                           </div>
                           <div className="flex mt-3 space-x-2">
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Groups</p>
                                </div>
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://www.facebook.com/rsrc.php/v3/yr/r/2uPlV4oORjU.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Saved</p>
                                </div>
                           </div>
                           <div className="flex space-x-2 mt-2">
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://www.facebook.com/rsrc.php/v3/y1/r/uGfRd5KPhOI.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Gaming</p>
                                </div>
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/kULMG0uFcEQ.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Weather</p>
                                </div>
                           </div>
                           <div className="flex space-x-2 mt-2">
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">COVID-19 <br /> Information Center </p>
                                </div>
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Find Friends</p>
                                </div>
                           </div>
                           <div className="flex space-x-2 mt-2">
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Videos</p>
                                </div>
                                <div className="bg-white-white dark:bg-dark-100 hover:bg-gray-100 transition duration-300 cursor-pointer h-full -mt-6 w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                    <img className="h-7" src="https://www.facebook.com/rsrc.php/v3/ys/r/9BDqQflVfXI.png" alt="" />
                                    <p className="mt-1 font-medium dark:text-white">Marketplace</p>
                                </div>
                            </div>
                            { !seeMore && <div className="cursor-pointer mt-7 bg-gray-200 hover:bg-gray-300 dark:bg-dark-100 dark:text-ghost-white transition duration-300 w-full p-1.5 rounded-lg font-medium text-center animate__animated animate__fadeIn" onClick={ handleSeeMore }>See More</div> }
                            { seeMore && <div className="mb-2 animate__animated animate__fadeIn">
                                    <div className="flex space-x-2 mt-2">             
                                         <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                             <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/6Wl4cU2AiL8.png" alt="" />
                                             <p className="mt-1 font-medium dark:text-white">Campus</p>
                                         </div>
                                         <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full -mt-6 w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png" alt="" />
                                            <p className="mt-1 font-medium dark:text-white">Emotional Health</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 mt-2">
                                        <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png" alt="" />
                                            <p className="mt-1 font-medium dark:text-white">Crisis Response</p>
                                        </div>
                                        <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full -mt-6 w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png" alt="" />
                                            <p className="mt-1 font-medium dark:text-white">Fundraisers</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 mt-2">
                                        <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/l6e-P1BHJLy.png" alt="" />
                                            <p className="mt-1 font-medium dark:text-white">Recent & Favorites</p>
                                        </div>
                                        <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full -mt-6 w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png" alt="" />
                                            <p className="mt-1 font-medium dark:text-white">Facebook Pay</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 mt-2">
                                        <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/FBOwekDrmB5.png" alt="" />
                                            <p className="mt-1 font-medium dark:text-white">Live Videos</p>
                                        </div>
                                        <div className="bg-white-white cursor-pointer hover:bg-gray-100 transition duration-300 dark:bg-dark-100 h-full -mt-6 w-6/12 rounded-xl shadow-md pt-2.5 pr-3 pl-3 pb-2.5">
                                            <img className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="" />
                                            <p className="mt-1.5 font-medium dark:text-white">Messenger</p>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer mt-4 bg-gray-200 hover:bg-gray-300 dark:bg-dark-100 dark:text-ghost-white transition duration-300 w-full p-1.5 rounded-lg font-medium text-center animate__animated animate__fadeIn" onClick={ handleSeeMore }>See Less</div>       
                                </div>
                            }
                            <NavLink className="border-b-2 border-t-2 mt-3 cursor-pointer dark:border-dark-100 flex items-center justify-between pb-2.5 pl-2 pr-2 pt-2.5 hover:text-black w-full" to="/settings-privacy">
                                <div className="flex flex-grow items-center space-x-4">
                                    <img className="h-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/lMh6BH0qkl7.png" alt="" />
                                    <h1 className="dark:text-white font-semibold">Settings & Privacy</h1>
                                </div>
                                <ChevronRightIcon className="h-5" />
                            </NavLink>       
                            <div className="border-b-2 cursor-pointer dark:border-dark-100 flex items-center justify-between pb-2.5 pl-2 pr-2 pt-2.5 w-full">
                                <div className="flex flex-grow items-center space-x-4">
                                    <img className="h-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/fJK06igzfM7.png" alt="" />
                                    <h1 className="dark:text-white font-semibold">Security & Login</h1>
                                </div>
                                <ChevronRightIcon className="h-5" />
                            </div>
                            <div className="border-b-2 cursor-pointer dark:border-dark-100 flex items-center justify-between pb-2.5 pl-2 pr-2 pt-2.5 w-full">
                                <div className="flex flex-grow items-center space-x-4">
                                    <img className="h-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/SvZaw7J3vAy.png" alt="" />
                                    <h1 className="dark:text-white font-semibold">Your Facebook Information</h1>
                                </div>
                                <ChevronRightIcon className="h-5" />
                            </div>
                            <div className="cursor-pointer mt-3 bg-gray-200 hover:bg-gray-300 dark:bg-dark-100 dark:text-ghost-white transition duration-300 w-full p-1.5 rounded-lg font-medium text-center" onClick={ handleLogout }>Log Out</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};