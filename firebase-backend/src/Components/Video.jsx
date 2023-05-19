import ReactPlayer from "react-player";
import VideoControls from "./VideoControls";
import React, { useRef, useState } from "react";
import { handleMute } from "../Helpers/handleMute";
import { handleRewind } from "../Helpers/handleRewind";
import { handleProgress } from "../Helpers/handleProgress";
import { handleDuration } from "../Helpers/handleDuration";
import { handlePlayPause } from "../Helpers/handlePlayPause";
import { handleSeekChange } from "../Helpers/handleSeekChange";
import { handleSeekMouseUp } from "../Helpers/handleSeekMouseUp";
import { handleFastForward } from "../Helpers/handleFastForward";
import { handlePlaybackRate } from "../Helpers/handlePlaybackRate";
import { handleVolumeChange } from "../Helpers/handleVolumeChange";
import { handleSeekMouseDown } from "../Helpers/handleSeekMouseDown";
import { handleDisplayFormat } from "../Helpers/handleDisplayFormat";
import { handleFormatDuration } from "../Helpers/handleFormatDuration";
import { handleVolumeSeekDown } from "../Helpers/handleVolumeSeekDown";

export const Video = ({ image }) => {
    const playerRef = useRef( null );
    const controlsRef = useRef( null );
    const [ timeDisplayFormat, setTimeDisplayFormat ] = useState( "normal" );
    const [ video, setVideo ] = useState({ pip: false, playing: false, light: false, muted: false, played: 0, duration: 0, playbackRate: 1.0, volume: 0.2, loop: true, seeking: false });
    
    const rewindHandler = () => handleRewind( playerRef );  
    const muteHandler = () => handleMute( setVideo, video );
    const fastForwardHandler = () => handleFastForward( playerRef );
    const playPauseHandler = () => handlePlayPause( setVideo, video );
    const seekMouseDownHandler = ( ) => handleSeekMouseDown( setVideo, video );
    const durationHandler = ( duration ) => handleDuration( duration, setVideo, video );
    const playbackRateHandler = ( rate ) => handlePlaybackRate( rate, setVideo, video );
    const progressHandler = ( changeState ) => handleProgress( changeState, setVideo, video );
    const seekChangeHandler = ( e, newValue ) => handleSeekChange( newValue, setVideo, video );
    const duration = playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
    const volumeChangeHandler = ( e, newValue ) => handleVolumeChange( newValue, setVideo, video );
    const currentTime = playerRef && playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
    const displayFormatHandler = () => handleDisplayFormat( setTimeDisplayFormat, timeDisplayFormat );
    const volumeSeekDownHandler = ( e, newValue ) => handleVolumeSeekDown( newValue, setVideo, video );
    const seekMouseUpHandler = ( e, newValue ) => handleSeekMouseUp( newValue, playerRef, setVideo, video );
      
    const totalDuration = handleFormatDuration( duration );
    const elapsedTime = timeDisplayFormat === "normal" ? handleFormatDuration( currentTime ) : `-${ handleFormatDuration( duration - currentTime ) }`;
  
    return (
        <div className="bg-black hidden md:block relative -mb-2">
            <ReactPlayer controls={ false } light={ video.light } loop={ video.loop } muted={ video.muted } onProgress={ progressHandler } playbackRate={ video.playbackRate } playing={ video.playing } pip={ video.pip } ref={ playerRef } url={ image } volume={ video.volume } width="100%" />
            <VideoControls elapsedTime={ elapsedTime } muted={ video.muted } onChangeDispayFormat={ displayFormatHandler } onDuration={ durationHandler } onFastForward={ fastForwardHandler } onMute={ muteHandler } onPlaybackRateChange={ playbackRateHandler } onPlayPause={ playPauseHandler } onRewind={ rewindHandler } onSeek={ seekChangeHandler } onSeekMouseDown={ seekMouseDownHandler } onSeekMouseUp={ seekMouseUpHandler } onVolumeChange={ volumeChangeHandler } onVolumeSeekDown={ volumeSeekDownHandler } playbackRate={ video.playbackRate } played={ video.played } playing={ video.playing } ref={ controlsRef } totalDuration={ totalDuration } volume={ video.volume } />
        </div>
    );
};