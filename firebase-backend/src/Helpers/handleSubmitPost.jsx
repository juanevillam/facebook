import Swal from "sweetalert2";
import { db, firebase } from "../Database/firebase";
import { handlePostFileToDatabase } from "./handlePostFileToDatabase";

export const handleSubmitPost = async( felling, fellingEmoji, imageFromFilePicker, profile, setFelling, setFellingEmoji, setImageFromFilePicker, setOpenCreatePost, setOpenMobile, setThoughts, thoughts ) => {
    setOpenMobile( false );
    setOpenCreatePost( false );

    Swal.fire({ title: "Uploading Post", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    if ( imageFromFilePicker ) {
        const imagefromFilePickerPosted = await handlePostFileToDatabase( imageFromFilePicker );
        
        if ( imagefromFilePickerPosted ) {
            db.collection( "posts" ).add({
                felling,
                thoughts, 
                fellingEmoji,
                createdBy: profile.id,
                username: profile.username, 
                fullName: profile.fullName, 
                image: imagefromFilePickerPosted, 
                profileFatherId: profile.fatherId,
                profilePicture: profile.profilePicture,
                dateCreated: firebase.firestore.FieldValue.serverTimestamp(), 
            });
        }
        Swal.close();
        Swal.fire( "Great!", "Your post has been uploaded correctly", "success" );
    } else {
        await db.collection( "posts" ).add({
            felling,
            thoughts, 
            image: "", 
            fellingEmoji,
            createdBy: profile.id,
            username: profile.username, 
            fullName: profile.fullName, 
            profileFatherId: profile.fatherId,
            profilePicture: profile.profilePicture,
            dateCreated: firebase.firestore.FieldValue.serverTimestamp(), 
        });
        Swal.close();
        Swal.fire( "Great!", "Your post has been uploaded correctly", "success" );
    };

    setFelling( "" );
    setThoughts( "" );
    setFellingEmoji( "" );
    setImageFromFilePicker( null );
};
