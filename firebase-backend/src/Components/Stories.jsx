import "../Styles/Stories.css";
import { Story } from "./Story.jsx";
import { db } from "../Database/firebase";
import { NavLink } from "react-router-dom";
import { CreateStory } from "./CreateStory";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/solid";

export const Stories = ({ profile }) => {
    const [ stories, setStories ] = useState( [] );
    const [ openCreateStory, setOpenCreateStory ] = useState( false );

    useEffect( () => {
        let unsubscribe = db.collection( "stories" ).onSnapshot( snapshot => setStories( snapshot.docs.map( doc => ( { id: doc.id, story: doc.data() } ) ) ) );
        return () => unsubscribe();
    }, [] );
    
    return (
        <>
            <div className="animate__animated animate__fadeIn animate__faster bg-whiteWhite dark:bg-dark-200 flex items-center max-w-2xl md:hidden mt-2 -mb-2 w-full z-40">
                <div className="flex h-max items-center max-w-12/12 overflow-y-hidden overflow-x-scroll pb-2 pl-3 pr-1 pt-2 scrollbar-hide">
                    <div className="dark:bg-dark-100 cursor-pointer duration-300 hover:scale-105 h-52 mr-2 rounded-xl transform transition w-24" onClick={ () => setOpenCreateStory( true ) }>
                        { profile?.profilePicture ?
                            <img alt="" className="animate__animated animate__fadeIn animate__faster NewStory__Image" src={ profile?.profilePicture } />
                            :
                            <img alt="" className="animate__animated animate__fadeIn animate__faster NewStory__Image" src="https://scontent.fccs6-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=KDrWhKdadx4AX8CbdBo&_nc_ht=scontent.fccs6-1.fna&oh=00_AT-ZnQZ8UQmrem6W9pove09BjMZLnIdbzlRotvG-1NugxQ&oe=61FCCDF8" />
                        }
                        <PlusIcon className="animate__animated animate__fadeIn animate__faster bg-blue-600 cursor-pointer duration-300 group-hover:bg-blue-700 h-9 mt-2.5 mx-auto p-1 rounded-full text-white transition w-9" />
                        <p className="animate__animated animate__fadeIn animate__faster text-black dark:text-white duration-300 text-center font-medium mt-3 text-xs transition">Create Story</p>
                    </div>
                    { stories.map( ({ id, story }) => <Story key={ id } profile={ profile } story={ story } storyId={ id } /> ) }
                </div>
            </div>
            <div className="animate__animated animate__fadeIn animate__faster hidden items-center justify-center md:flex mt-3">
                { stories.length > 0 ? 
                    <div className="flex mx-auto scrollbar-hide scroll-auto max-w-lg md:max-w-2xl relative mb-2">
                        <div className="flex relative">
                            <NavLink className="animate__animated animate__fadeIn animate__faster dark:bg-dark-200 duration-300 group NewStory transition" to="/stories/create">
                                { profile?.profilePicture ?
                                    <img alt="" className="animate__animated animate__fadeIn animate__faster NewStory__Image" src={ profile?.profilePicture } />
                                    :
                                    <img alt="" className="animate__animated animate__fadeIn animate__faster NewStory__Image" src="https://scontent.fccs6-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=KDrWhKdadx4AX8CbdBo&_nc_ht=scontent.fccs6-1.fna&oh=00_AT-ZnQZ8UQmrem6W9pove09BjMZLnIdbzlRotvG-1NugxQ&oe=61FCCDF8" />
                                }
                                <PlusIcon className="animate__animated animate__fadeIn animate__faster p-1.5 mx-auto group-hover:bg-blue-700 h-8 w-8 mt-2.5 bg-blue-600 rounded-full text-white cursor-pointer transition duration-300" />
                                <p className="animate__animated animate__fadeIn animate__faster text-black dark:text-white duration-300 text-center font-medium mt-2 text-sm transition">Create Story</p>
                            </NavLink>
                            { stories.map( ({ id, story }) => <Story key={ id } profile={ profile } story={ story } storyId={ id } /> ) }
                            { stories.length >= 4 && 
                                <NavLink className="absolute -right-2 top-20 z-30" to="/stories">
                                    <ArrowRightIcon className="bg-whiteWhite cursor-pointer dark:bg-dark-200 dark:hover:bg-dark-100 dark:hover:bg-opacity-90 dark:text-gray-400 duration-300 hover:bg-gray-200 h-9 mx-auto p-2 rounded-full shadow-sm text-gray-600 transition w-9" />
                                </NavLink>
                            }
                        </div>
                    </div>
                    :
                    <NavLink className="animate__animated animate__fadeIn animate__faster bg-white duration-300 hover:no-underline max-w-xl mb-2 mx-auto rounded-xl shadow-sm transition w-full" to="/stories/create">
                        <div className="dark:bg-dark-200 flex items-center p-2 rounded-lg">
                            <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex flex-grow focus:outline-none hover:bg-gray-100 items-center pb-2 pt-1.5 px-3 rounded-xl transition w-full">
                                <PlusIcon className="bg-blue-100 dark:text-thunder-100 dark:bg-thunder-100 dark:bg-opacity-20 duration-300 h-10 p-2 rounded-full text-blue-600 transition w-10" />
                                <div className="flex-grow ml-3">
                                    <h1 className="dark:text-white duration-300 font-medium text-black text-lg transition">Create Story</h1>
                                    <p className="dark:text-gray-400 duration-300 font-normal -mt-0.5 text-gray-600 text-md transition">Share a photo or write something.</p>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                }
            </div>
            <CreateStory openCreateStory={ openCreateStory } setOpenCreateStory={ setOpenCreateStory } />
        </>
    );
};