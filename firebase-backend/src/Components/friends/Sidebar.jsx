import React from 'react';
import { ClipboardListIcon, CogIcon, GiftIcon, UserAddIcon, UserGroupIcon } from '@heroicons/react/solid';

export const Sidebar = () => {
    return (
        <div className="bg-white border-r-2 hidden h-screen relative w-max xl:block">
            <div className="flex justify-between pl-3 pr-3 pt-3 w-80">
                <p className=" font-bold text-black text-2xl">Friends</p>
                <div className="flex space-x-3">
                    <CogIcon className="flex h-9 icon p-1.5 text-black w-9"/>
                </div>
            </div>
            <div className="pl-2 pr-2 pt-3 space-y-0.5">
                <div className="animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                    <UserAddIcon className="flex h-9 icon p-1.5 text-black w-9" />
                    <h2 className="font-medium ml-2.5 mt-1 text-lg">Friend Requests</h2>
                </div>
                <div className="animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                    <UserGroupIcon className="flex h-9 icon p-1.5 text-black w-9" />
                    <h2 className="font-medium ml-2.5 mt-1 text-lg">All Friends</h2>
                </div>
                <div className="animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                    <GiftIcon className="flex h-9 icon p-1.5 text-black w-9" />
                    <h2 className="font-medium ml-2.5 mt-1 text-lg">Birthdays</h2>
                </div>
                <div className="animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 flex hover:bg-gray-100 p-2 rounded-xl transition">
                    <ClipboardListIcon className="flex h-9 icon p-1.5 text-black w-9" />
                    <h2 className="font-medium ml-2.5 mt-1 text-lg">Custom Lists</h2>
                </div>
            </div>
        </div>
    );
};