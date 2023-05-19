import { Post } from "../Components/Post";
import { db } from "../Database/firebase";
import React, { useEffect, useState } from "react";
import { CameraIcon, SearchIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon, BookmarkIcon, CogIcon, PlayIcon, VideoCameraIcon } from '@heroicons/react/solid';

export const Watch = ({ profile }) => {
    const [ videos, setVideos ] = useState( [] );
    const handleReturn = () => window.history.back();
    useEffect( () => db.collection( "posts" ).orderBy( "dateCreated", "desc" ).onSnapshot( snapshot => setVideos( snapshot.docs.map( doc => ({ id: doc.id, post: doc.data() }) ) ) ), [] );

    return (
        <>
            <div className="hidden md:flex flex-grow overscroll-y-auto scrollbar-hide">
                <div className="border-r border-t dark:border-dark-200 md:w-72 lg:w-96 hidden md:block relative bg-white-white dark:bg-dark-200">
                    <div className="animate__animated animate__fadeIn flex items-center justify-between pb-2 pl-3 pr-3 pt-2 relative">
                        <h1 className="dark:text-ghost-white font-bold text-black text-2xl">Watch</h1>
                        <CogIcon className="dark:text-white dark:hover:bg-opacity-20 dark:hover:bg-white flex icon text-black"/>
                    </div>
                    <div className="bg-gray-100 dark:bg-dark-100 hidden items-center lg:w-11/12 md:flex ml-2 mb-2 md:w-44 p-2 rounded-full">
                        <SearchIcon className="cursor-pointer dark:text-gray-400 h-5 ml-1 mr-2 text-gray-500" />
                        <input className="bg-transparent cursor-pointer dark:placeholder-gray-400 dark:text-white flex-shrink hidden lg:ml-0 md:inline-flex md:-ml-2 outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
                    </div>
                    <div className="p-2.5 space-y-1">
                        <div className="cursor-pointer bg-gray-100 dark:bg-opacity-10 dark:bg-white duration-300 flex items-center p-2 rounded-lg space-x-3 transition w-full">
                            <PlayIcon className="dark:text-white flex icon text-black" />
                            <p className="dark:text-white font-semibold">Home</p>
                        </div>
                        <div className="cursor-pointer dark:hover:bg-opacity-10 dark:hover:bg-white duration-300 flex hover:bg-gray-100 items-center p-2 rounded-lg space-x-3 transition w-full">
                            <VideoCameraIcon className="dark:text-white flex icon text-black" />
                            <p className="dark:text-white font-semibold">Live</p>
                        </div>
                        <div className="cursor-pointer dark:hover:bg-opacity-10 dark:hover:bg-white duration-300 flex hover:bg-gray-100 items-center p-2 rounded-lg space-x-3 transition w-full">
                            <BookmarkIcon className="dark:text-white flex icon text-black" />
                            <p className="dark:text-white font-semibold">Saved Videos</p>
                        </div>
                    </div>
                    <hr className="dark:bg-gray-400 ml-4 mr-4 mt-2"/>
                </div>
                <div className="dark:bg-dark-300 flex-grow h-screen pb-20 pt-4 md:pl-8 md:pr-8 overflow-y-auto scrollbar-hide">
                    <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-3xl animate__animated animate__fadeIn">                            
                        { videos.map(({ id, post }) => <Post key={ id } post={ post } postId={ id } profile={ profile } /> ) }
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className="flex overscroll-y-auto overflow-x-hidden scrollbar-hide">
                    <div className="dark:bg-dark-300 h-screen overscroll-y-auto overflow-x-hidden scroll-mandatory scrollbar-hide w-screen">
                        <div className="absolute flex items-center left-3 space-x-3 top-4 z-50">
                            <ArrowLeftIcon className="animate__animated animate__fadeIn animate__faster cursor-pointer h-6 text-white w-6" onClick={ handleReturn } />
                            <h1 className="animate__animated animate__fadeIn animate__faster font-semibold text-2xl text-white">Watch</h1>
                        </div>
                        <CameraIcon className="absolute animate__animated animate__fadeIn animate__faster cursor-pointer h-8 right-3 text-white top-4 w-8 z-50" />
                        { videos.map(({ id, post }) => <Post key={ id } post={ post } postId={ id } profile={ profile } /> ) }
                    </div>
                </div>
            </div>
        </>
    );
};