export const handleOpen = ( open, iconId, setOpen ) => {
    if ( open ) {
        document.getElementById( iconId ).classList.remove( "dark:text-blue-500" );
        document.getElementById( iconId ).classList.remove( "text-blue-500" );
        document.getElementById( iconId ).classList.remove( "bg-blue-100" );
        document.getElementById( iconId ).classList.remove( "dark:bg-dark-100" );
        document.getElementById( iconId ).classList.remove( "dark:bg-thunder-200" );
        document.getElementById( iconId ).classList.remove( "dark:bg-opacity-30" );
        setOpen( !open );
    };
};