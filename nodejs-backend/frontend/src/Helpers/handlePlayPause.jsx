export const handlePlayPause = ( setVideo, video ) => setVideo({ 
    ...video, 
    playing: !video.playing 
});