export const handlePostFileToDatabase = async( image ) => {
    const formData = new FormData();

    // Your cloudinary endpoint:
    const cloudinaryURL = "";
    formData.append( "upload_preset", "facebook-clone" );
    formData.append( "file", image );

    try {
        const response = await fetch( cloudinaryURL, { method: "POST", body: formData } );

        if ( response.ok ) {
            const cloudinaryRESP = await response.json();
            return cloudinaryRESP.secure_url;
        } else {
            throw await response.json();
        };

    } catch ( error ) {
        console.log( error );
    };

    return
};