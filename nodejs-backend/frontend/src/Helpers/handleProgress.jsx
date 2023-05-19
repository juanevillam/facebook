export const handleProgress = ( changeState, setVideo, video ) => {
    if ( !video.seeking ) setVideo({ ...video, ...changeState }) 
};