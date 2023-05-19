export const handleSetFelling = ( felling, fellingProp, fellingEmoji, setFelling, setFellingEmoji, setOpenFellings ) => {
    if ( felling ) {
        setFelling( "" );
        setOpenFellings( false );
        setFellingEmoji( "" );
    } else {
        setFelling( fellingProp );
        setOpenFellings( false );
        setFellingEmoji( fellingEmoji );
    };
};