export const handleSetActive = ( open, iconId, setOpen ) => {
    document.getElementById( iconId ).classList.toggle( "dark:text-blue-500" );
    document.getElementById( iconId ).classList.toggle( "text-blue-500" );
    document.getElementById( iconId ).classList.toggle( "bg-blue-100" );
    document.getElementById( iconId ).classList.remove( "dark:bg-dark-100" );
    document.getElementById( iconId ).classList.toggle( "dark:bg-thunder-200" );
    document.getElementById( iconId ).classList.toggle( "dark:bg-opacity-30" );
    setOpen( !open );
}