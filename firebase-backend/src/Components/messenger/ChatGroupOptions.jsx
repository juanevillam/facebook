import React from 'react';
import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import { PhoneIcon, VideoCameraIcon, UserIcon, BellIcon, SunIcon, TagIcon, SearchIcon, LockClosedIcon, UserGroupIcon, MinusCircleIcon, PhotographIcon } from '@heroicons/react/solid';

export const ChatGroupOptions = () => {
    let groupName = localStorage.getItem( "name" );
    const handleReturn = () => window.history.back();
    let groupPictureUrl = localStorage.getItem( "groupPictureUrl" );

    return (
        <>
            <div className="overscroll-y-auto scrollbar-hide">
                <div className="w-full h-screen overflow-y-scroll bg-white animate__animated animate__fadeIn">
                    <div className="flex bg-white z-50 justify-between top-0 items-center pt-3 pb-3 pr-4 pl-3.5 sticky shadow-sm">
                        <div className="flex flex-grow justify-between items-center">
                            <ArrowLeftIcon className="block cursor-pointer h-5 w-6" onClick={ handleReturn } />
                            <DotsVerticalIcon className="block cursor-pointer h-6 w-6" />
                        </div>
                    </div>               
                    <div className="w-full h-screen overflow-y-scroll bg-white">
                        <div className="mx-auto w-5/6 mt-3">
                            <img className="h-28 w-28 rounded-full object-cover mx-auto" src={ groupPictureUrl } alt="" />
                            <h1 className="text-2xl mt-3 font-semibold text-center">{ groupName.slice( 0, 17 ) }</h1>
                            <div className="flex w-10/12 mx-auto mt-4 justify-between">
                                <div>
                                    <PhoneIcon className="icon h-9 w-9 flex p-2 text-black bg-gray-100" />
                                    <p className="text-center text-sm mt-1.5">Audio</p>
                                </div>
                                <div>
                                    <VideoCameraIcon className="icon h-9 w-9 flex p-2 text-black bg-gray-100" />
                                    <p className="text-center text-sm mt-1.5">Video</p>
                                </div>
                                <div>
                                    <UserIcon className="icon h-9 w-9 flex p-2 text-black bg-gray-100" />
                                    <p className="text-center text-sm mt-1.5">Profile</p>
                                </div>
                                <div>
                                    <BellIcon className="icon h-9 w-9 flex p-2 text-black bg-gray-100" />
                                    <p className="text-center text-sm mt-1.5">Mute</p>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3.5 pt-4 pr-4">
                            <div className="flex justify-between w-full mb-4">
                                <p>Theme</p>
                                <SunIcon className="block cursor-pointer h-6 w-6 text-yellow-400" />
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Emoji</p>
                                <svg className="cursor-pointer animate__animated animate__fadeIn animate__faster" width="20px" height="20px" viewBox="0 0 16 16">
                                    <path fill="#0080ff" d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"></path><path fill="#0080ff" d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path>
                                </svg>
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Nicknames</p>
                                <TagIcon className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" />
                            </div>
                            <p className="text-sm font-medium text-gray-500 mb-3">More actions</p>
                            <div className="flex justify-between w-full mb-4">
                                <p>View Photos & Videos</p>
                                <PhotographIcon className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" />
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Search in Conversation</p>
                                <SearchIcon className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" />
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Go to Secret Conversation</p>
                                <LockClosedIcon className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" />
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Create group with Ana Sofia</p>
                                <UserGroupIcon className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" />
                            </div>
                            <p className="text-sm font-medium text-gray-500 mb-3">Privacy</p>
                            <div className="w-full mb-4">
                                <p>Notifications</p>
                                <p className="text-xs text-gray-600">On</p>
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Ignore Messages</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 3 } d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                            </div>
                            <div className="flex justify-between w-full mb-4">
                                <p>Block</p>
                                <MinusCircleIcon className="icon h-8 w-8 flex p-1.5 -mr-1 text-black bg-gray-100" />
                            </div>
                            <div className="w-full mb-4">
                                <p>Something's Wrong</p>
                                <p className="text-xs text-gray-600">Give me Feedback and Report Conversation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};