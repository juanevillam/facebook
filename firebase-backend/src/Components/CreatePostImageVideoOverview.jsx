import React from "react";
import ReactPlayer from "react-player";
import { PlayIcon } from "@heroicons/react/solid";

export const CreatePostImageVideoOverview = ({ handlePlayPause, imageFromFilePicker, playerRef, playing, setImageFromFilePicker }) => {
    return (
        <>
            { imageFromFilePicker && imageFromFilePicker[ 13 ] === "4" && 
                <div className="relative">
                    <PlayIcon className="absolute cursor-pointer h-12 left-1.5 opacity-0 top-2 z-50" onClick={ handlePlayPause } />
                    <ReactPlayer height="50px" loop={ true } playing={ playing } ref={ playerRef } url={ imageFromFilePicker } width="60px" />
                </div>
            }
            { imageFromFilePicker && (
                <div className="cursor-pointer duration-150 filter flex flex-col hover:brightness-110 hover:scale-105 transform transition" onClick={ () => setImageFromFilePicker( null ) }>
                    <img className="h-10 object-contain rounded-lg" src={ imageFromFilePicker } alt="" />
                </div>
            )}
        </>
    );
};