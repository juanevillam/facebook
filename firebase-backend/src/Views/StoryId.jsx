import { db } from "../Database/firebase";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";
import { XIcon } from "@heroicons/react/solid";
import { handleSave } from "../Helpers/handleSave";
import { Dropdowns } from "../Components/Dropdowns";
import { handleReturn } from "../Helpers/handleReturn";
import { StoryOptions } from "../Components/StoryOptions";
import React, { useEffect, useRef, useState } from "react";
import { handlePlayVideo } from "../Helpers/handlePlayVideo";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { handleDeleteStory } from "../Helpers/handleDeleteStory";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";
import { PauseIcon } from "../Icons/PauseIcon";
import { PlayIcon } from "../Icons/Play";
import { UnmuteIcon } from "../Icons/Unmute";
import { MuteIcon } from "../Icons/Mute";
import { CloseIcon } from "../Icons/Close";

export const StoryId = ({ profile }) => {
    const { url } = useRouteMatch();
    const videoRef = useRef( null );
    const [ story, setStory ] = useState( [] );
    const [ muted, setMuted ] = useState( false );
    const [ saved, setSaved ] = useState( false );
    const [ storyId, setStoryId ] = useState( [] );
    const [ playing, setPlaying ] = useState( false );
    const muteVideoHandler = () => setMuted( !muted );
    const deleteStoryHandler = () => handleDeleteStory( storyId );
    const [ openStoryOptions, setOpenStoryOptions ] = useState( false );
    const saveHandler = () => handleSave( storyId, profile, saved, setSaved );
    const playVideoHandler = () => handlePlayVideo( playing, videoRef, setPlaying );

    useEffect(() => {
        db.collection( "stories" ).doc( url.substring( 10 ) ).get().then( ( doc ) => {
            if ( doc.exists ) {
                setStoryId( doc.id );
                setStory( doc.data() );
            };
        }).catch( ( error ) => {
            console.log( "Error getting document:", error );
        }); 
            
    }, [ url ]);

    return (
        <div className="flex h-screen scrollbar-hide w-screen">
            <div className="bg-black flex flex-grow items-center justify-center mx-auto relative">
                <div className="absolute left-5 hidden md:flex space-x-4 top-4">
                    <CloseIcon className="animate__animated animate__fadeIn animate__faster cursor-pointer duration-300 hover:bg-white hover:bg-opacity-10 h-9 p-2 rounded-full text-white transition w-9" strokeWidth={ 2 } onClick={ handleReturn } />
                    <NavLink to="/feed">
                        <img alt="" className="animate__animated animate__fadeIn animate__faster cursor-pointer h-10 -mt-2" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" />
                    </NavLink>
                </div>
                { story?.image && 
                    <div className="bg-black mx-auto relative h-full md:max-h-100 md:h-full md:w-max w-screen">
                        <div className="absolute flex items-center left-0 md:top-3 pl-2 pr-2 top-2 w-full z-20">
                            <div className="flex flex-grow items-center">
                                <NavLink to={`/:${ story?.username }`}>
                                    { story?.profilePicture ?
                                        <img alt="" className="animate__animated animate__fadeIn animate__faster h-10 object-cover rounded-full w-10" src={ story?.profilePicture } />
                                        :
                                        <NoProfilePictureIcon className="animate__animated animate__fadeIn animate__faster h-10 object-cover rounded-full w-10" />
                                    }
                                </NavLink>
                                <NavLink to={`/:${ story?.username }`}>
                                    <h1 className="animate__animated animate__fadeIn animate__faster font-medium hover:underline ml-2 text-white">{ story?.fullName }</h1>
                                </NavLink>
                            </div>
                            { story?.image[ story?.image.length - 1 ] === "4" && 
                                <>
                                    <div className="cursor-pointer duration-300 hover:bg-gray-200 hover:bg-opacity-20 mr-1 p-2.5 rounded-full transition" onClick={ muteVideoHandler }>
                                        { muted ?
                                            <UnmuteIcon className="animate__animated animate__fadeIn animate__faster h-4.5 w-4.5" />
                                            :
                                            <MuteIcon className="animate__animated animate__fadeIn animate__faster h-4.5 w-4.5" />
                                        }
                                    </div>
                                    <div className="cursor-pointer duration-300 hover:bg-gray-200 hover:bg-opacity-20 mr-2 p-2.5 rounded-full transition" onClick={ playVideoHandler }>
                                        { playing ?
                                            <PauseIcon className="animate__animated animate__fadeIn animate__faster h-4.5 w-4.5" />
                                            :
                                            <PlayIcon className="animate__animated animate__fadeIn animate__faster h-4.5 pl-px w-4.5" />
                                        }
                                    </div>
                                </>
                            }
                            <DotsHorizontalIcon className={`${ openStoryOptions && "bg-gray-200" } cursor-pointer duration-300 hidden hover:bg-gray-200 hover:bg-opacity-20 h-8 md:flex p-1 rounded-full text-white transition w-8`} onClick={ () => setOpenStoryOptions( !openStoryOptions ) } />
                            <XIcon className="cursor-pointer flex h-6 md:hidden text-white w-6" onClick={ handleReturn } />
                        </div>
                        <StoryOptions createdBy={ story?.id } deleteStoryHandler={ deleteStoryHandler } fullName={ story?.fullName } openStoryOptions={ openStoryOptions } profileId={ profile?.id } saveHandler={ saveHandler } />
                        { story?.image[ story?.image.length - 1 ] === "4" ? 
                            <video className="animate__animated animate__fadeIn animate__faster h-full object-contain rounded-lg w-full" loop={ true } muted={ muted } ref={ videoRef } src={ story?.image } />
                            :
                            <img alt="" className="animate__animated animate__fadeIn animate__faster h-full max-w-2xl md:rounded-lg object-cover rounded-none" src={ story?.image } />
                        }
                    </div>
                }
                <div className="absolute flex right-3.5 space-x-4 top-2">
                    <Dropdowns fullName={ profile?.fullName } profilePicture={ profile?.profilePicture } usedOn="CreateStory" />
                </div>
            </div>
        </div>
    );
};