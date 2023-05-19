export const handleSeekChange = ( newValue, setVideo, video ) => setVideo({ 
    ...video, 
    played: parseFloat( newValue / 100 ) 
});