export const handlePlaybackRate = ( rate, setVideo, video ) => setVideo({ 
    ...video, 
    playbackRate: rate 
});