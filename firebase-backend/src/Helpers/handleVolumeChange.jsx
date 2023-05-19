export const handleVolumeChange = ( newValue, setVideo, video ) => setVideo({ 
    ...video, 
    muted: newValue === 0 ? true : false,
    volume: parseFloat( newValue / 100 )
});