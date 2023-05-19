export const handleSeekMouseUp = ( newValue, playerRef, setVideo, video ) => { 
    setVideo({ 
        ...video, 
        seeking: false 
    }); 

    playerRef.current.seekTo( newValue / 100, "fraction" ) 
};