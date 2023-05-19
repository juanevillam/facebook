export const handleSetImageFromFilePicker = ( e, setImageFromFilePicker ) => {
    const reader = new FileReader();

    if ( e.target.files[0] ) {
        reader.readAsDataURL( e.target.files[0] );
    };

    reader.onload = ( readerEvent ) => {
        setImageFromFilePicker( readerEvent.target.result );
    };
};