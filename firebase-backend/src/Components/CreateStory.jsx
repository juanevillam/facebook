import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { CameraIcon, CogIcon, XIcon } from "@heroicons/react/solid";

export const DialogCreateStory = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    position: fixed;
    transition: transform 0.3s;
    transform: translateY( ${ ( p ) => ( p.openCreateStory ? 0 : "100%" ) } );
    z-index: 100000;
`;

export const OverlayCreateStory = styled.div`
    background: ${ rgba( "black", 0.4 ) };
    height: 100%;
    left: 0;
    opacity: ${ ( p ) => ( p.openCreateStory ? 1 : 0 ) };
    position: fixed;
    top: 0;
    transition-duration: 0.3s;
    transition-property: visibility opacity;
    visibility: ${ ( p ) => ( p.openCreateStory ? "visible" : "hidden" ) };
    width: 5000px;
    z-index: 1;
`;

export const CreateStory = ({ openCreateStory, setOpenCreateStory }) => {
    return (
        <>
            <OverlayCreateStory openCreateStory={ openCreateStory } onClick={ () => setOpenCreateStory( false ) } />
            <DialogCreateStory openCreateStory={ openCreateStory }>
                <div className="bg-whiteWhite dark:bg-dark-200 h-screen w-full">
                    <div className="flex items-center justify-between ml-2 mr-2 pt-2">
                        <XIcon className="cursor-pointer dark:text-white dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-9 p-1 rounded-full text-black transition w-9" onClick={ () => setOpenCreateStory( false ) } />
                        <h1 className="dark:text-white font-semibold text-black text-xl">Create Story</h1>
                        <CogIcon className="cursor-pointer dark:text-white dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-9 p-1 rounded-full text-black transition w-9" />
                    </div>
                    <div className="animate__animated animate__fadeIn flex ml-2 mt-4 p-2 ">
                        <div className="bg-gradient-to-b cursor-pointer from-purple-400 grid h-40 items-center justify-center mr-2 rounded-md to-pink-500 w-32">
                            <div>
                                <svg className="bg-white duration-300 h-10 mx-auto p-2 rounded-full shadow-md text-black transition w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } />
                                </svg>
                                <h1 className="font-medium mt-2 text-center text-white">Text</h1>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b cursor-pointer from-blue-400 grid h-40 items-center justify-center mr-2 rounded-md to-green-500 w-32">
                            <div>
                                <svg className="bg-white duration-300 h-10 mx-auto p-2 rounded-full shadow-md text-black transition w-10" fill="none" stroke="currentColor" viewBox="0 0 25 25">
                                    <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } />
                                </svg>
                                <h1 className="font-medium mt-2 text-center text-white">Music</h1>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b cursor-pointer from-red-500 grid h-40 items-center justify-center mr-2 rounded-md to-yellow-500 w-32">
                            <div>
                                <svg className="bg-white duration-300 h-10 mx-auto p-2 rounded-full shadow-md text-black transition w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } />
                                </svg>
                                <h1 className="font-medium mt-2 text-center text-white">Selfie</h1>
                            </div>
                        </div>
                    </div>
                    <CameraIcon className="absolute bottom-6 cursor-pointer dark:bg-gray-100 dark:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-20 duration-300 hover:bg-gray-200 h-14 mx-auto p-2.5 right-4 rounded-full shadow-lg text-blue-500 transition w-14" />
                </div>
            </DialogCreateStory>
        </>
    );
};