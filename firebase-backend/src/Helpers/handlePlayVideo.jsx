export const handlePlayVideo = ( playing, videoRef, setPlaying ) => {
  if ( playing ) {
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  };

  setPlaying( !playing );
};