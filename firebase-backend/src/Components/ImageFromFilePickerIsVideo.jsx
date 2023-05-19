import React, { useRef, useState } from "react";
import { handlePlayVideo } from "../Helpers/handlePlayVideo";
import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";

export const ImageFromFilePickerIsVideo = ({ height, image, objectFit, rounded, setOpenViewPost, svgHeight, svgWidth }) => {
    const videoRef = useRef( null );
    const [ muted, setMuted ] = useState( false );
    const [ playing, setPlaying ] = useState( true );
    const playVideoHandler = () => handlePlayVideo( playing, videoRef, setPlaying );

    return (
        <div className={`bg-black dark:bg-dark-300 dark:bg-opacity-40 cursor-pointer h-full relative ${ rounded }`}>
            <div className="absolute block cursor-pointer h-full md:hidden text-transparent top-0 w-full z-10" onClick={ () => setOpenViewPost( true ) }>s</div>
            <div className="absolute cursor-pointer hidden h-full md:block text-transparent top-0 w-full z-10" onClick={ playVideoHandler }>s</div>
            { playing &&
                <>
                    <svg className={`absolute animate__animated animate__fadeIn animate__faster block duration-300 hover:scale-125 left-1/5 md:hidden ${ svgHeight } ${ svgWidth } ${ rounded ? "top-1/5" : "top-1/3" } transform transition w-max z-20`} color="#ffffff" fill="#ffffff" onClick={ () => setOpenViewPost( true ) } role="img" viewBox="0 0 48 48">
                        <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"/ >
                    </svg>
                    <svg className={`absolute animate__animated animate__fadeIn animate__faster duration-300 hidden hover:scale-125 left-1/5 md:block ${ svgHeight } ${ svgWidth } ${ rounded ? "top-1/5" : "top-1/3" } transform transition w-max z-20`} color="#ffffff" fill="#ffffff" onClick={ playVideoHandler } role="img" viewBox="0 0 48 48">
                        <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"/ >
                    </svg>
                </>
            }
            <video className={`animate__animated animate__fadeIn ${ height } ${ objectFit } ${ rounded } w-full z-50`} loop={ true } muted={ muted } ref={ videoRef } src={ image } />
            <div className="absolute animate__animated animate__fadeIn animate__faster bg-black bg-opacity-80 bottom-3 cursor-pointer hidden hover:scale-110 md:block md:right-4 p-2.5 right-2 rounded-full transform transition z-50" onClick={ () => setMuted( !muted ) }>
                { muted ?
                    <VolumeOffIcon className="cursor-pointer h-4 text-ghost-white w-4" /> 
                    : 
                    <VolumeUpIcon className="cursor-pointer h-4 text-ghost-white w-4" />
                }
            </div>
        </div>
    );
};