import { rgba } from "polished";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { StoryOptions } from "./StoryOptions";
import { XIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import { setUserIsViewingStory } from "../Actions/ui";
import { handlePlayVideo } from "../Helpers/handlePlayVideo";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { handleDeleteStory } from "../Helpers/handleDeleteStory";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";

export const ViewStoryOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openViewStory ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openViewStory ? "visible" : "hidden" };
    width: 5000px;
    z-index: 99999;
`;

export const ViewStoryDialog = styled.div`
    background-color: none; 
    bottom: 0; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    height: 100%; 
    left: 0; 
    position: fixed; 
    right: 0; 
    transition: transform 0.3s; 
    transform: translateX( ${ p => p.openViewStory ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;

export const ViewStory = ({ openViewStory, profile, setOpenViewStory, story, storyId }) => {
    const dispatch = useDispatch();
    const videoRef = useRef( null );
    const userIsViewingStory = false;
    const [ muted, setMuted ] = useState( false );
    const [ playing, setPlaying ] = useState( false );
    const muteVideoHandler = () => setMuted( !muted );
    const deleteStoryHandler = () => handleDeleteStory( storyId );
    const [ openStoryOptions, setOpenStoryOptions ] = useState( false );
    const playVideoHandler = () => handlePlayVideo( playing, videoRef, setPlaying );

    return (
        <div className="block md:hidden">
            <ViewStoryOverlay openViewStory={ openViewStory } onClick={ () => setOpenViewStory( false ) } />
            <ViewStoryDialog openViewStory={ openViewStory }>
                <div className="bg-black items-center justify-center h-full md:hidden relative w-full z-20">
                    <div className="absolute cursor-pointer h-full text-transparent top-0 w-full z-10" onClick={ playVideoHandler }>s</div>    
                    <div className="absolute flex items-center left-0 pl-2 pr-2 top-2 w-full z-40">
                        <div className="flex flex-grow items-center">
                            <NavLink to={`/:${ story?.username }`}>
                                { story?.profilePicture ?
                                    <img alt="" className="animate__animated animate__fadeIn animate__faster h-10 object-cover rounded-full w-10" src={ story?.profilePicture } />
                                    :
                                    <NoProfilePictureIcon className="animate__animated animate__fadeIn animate__faster h-10 object-cover rounded-full w-10" />
                                }
                            </NavLink>
                            <NavLink to={`/:${ story?.username }`}>
                                <h1 className="animate__animated animate__fadeIn animate__faster font-medium ml-2 text-white">{ story?.fullName }</h1>
                            </NavLink>
                        </div>
                        { story?.image[ story?.image.length - 1 ] === "4" &&
                            <>
                                <div className="cursor-pointer duration-300 hover:bg-gray-200 hover:bg-opacity-20 mr-2 p-2.5 rounded-full transition" onClick={ muteVideoHandler }>
                                    { muted ?
                                        <svg className="animate__animated animate__fadeIn animate__faster" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 48 48" width="18">
                                            <path clipRule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fillRule="evenodd" />
                                        </svg>
                                        :
                                        <svg className="animate__animated animate__fadeIn animate__faster" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 48 48" width="18">
                                            <path clipRule="evenodd" d="M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z" fillRule="evenodd" />
                                        </svg>
                                    }
                                </div>
                                <div className="cursor-pointer duration-300 hover:bg-gray-200 hover:bg-opacity-20 mr-2 p-2.5 rounded-full transition" onClick={ playVideoHandler }>
                                    { playing ? 
                                        <svg className="animate__animated animate__fadeIn animate__faster" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 48 48" width="18">
                                            <path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z" />
                                        </svg>
                                        :
                                        <svg className="animate__animated animate__fadeIn animate__faster h-4.5 w-4.5" color="#ffffff" fill="#ffffff" role="img" viewBox="0 0 48 48">
                                            <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"/ >
                                        </svg>
                                    }
                                </div>
                            </>                        
                        }
                        <DotsHorizontalIcon className={`${ openStoryOptions && "bg-gray-200" } cursor-pointer dark:bg-opacity-10 dark:text-white duration-300 hidden hover:bg-gray-200 h-8 md:flex p-1 rounded-full text-gray-600 transition w-8`} onClick={ () => setOpenStoryOptions( !openStoryOptions ) } />
                        <XIcon className="cursor-pointer flex duration-300 hover:bg-gray-200 hover:bg-opacity-20 h-9 md:hidden p-1.5 rounded-full transition text-white w-9" onClick={ () => { videoRef?.current?.pause(); setPlaying( false ); dispatch( setUserIsViewingStory( userIsViewingStory ) ); setOpenViewStory( false ) } } />
                    </div>
                    <StoryOptions createdBy={ story?.id } deleteStoryHandler={ deleteStoryHandler } fullName={ story?.fullName } openStoryOptions={ openStoryOptions } profileId={ profile?.id } />
                    { story?.image[ story?.image.length - 1 ] === "4" ? 
                        <video className="animate__animated animate__fadeIn animate__faster h-full object-contain rounded-lg w-full z-40" loop={ true } muted={ muted } ref={ videoRef } src={ story?.image } />
                        :
                        <img alt="" className="animate__animated animate__fadeIn animate__faster h-full object-cover z-40" src={ story?.image } />
                    }
                </div>
            </ViewStoryDialog>
        </div>
    );
};