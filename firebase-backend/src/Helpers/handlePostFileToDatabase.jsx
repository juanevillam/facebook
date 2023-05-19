export const handlePostFileToDatabase = async( image ) => {
    const formData = new FormData();
    const cloudinaryURL = "https://api.cloudinary.com/v1_1/juanevillam/upload";
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