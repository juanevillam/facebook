import Swal from "sweetalert2";
import { db } from "../Database/firebase";
import { handleReturn } from "./handleReturn";
import { handlePostFileToDatabase } from "./handlePostFileToDatabase";

export const handleSubmitStory = async( imageFromFilePicker, profile, setImageFromFilePicker, setOpenCreateStory ) => {
    Swal.fire({ title: "Uploading Story", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    const imagefromFilePickerPosted = await handlePostFileToDatabase( imageFromFilePicker );
    
    if ( imagefromFilePickerPosted ) {
        db.collection( "stories" ).add({
            id: profile.id,
            dateCreated: new Date(),
            username: profile.username, 
            fullName: profile.fullName, 
            image: imagefromFilePickerPosted, 
            profileFatherId: profile.fatherId,
            profilePicture: profile.profilePicture,
        });
        Swal.close();
        Swal.fire( "Great!", "Your story has been uploaded correctly", "success" );
    };

    setOpenCreateStory( false );
    setImageFromFilePicker( null );
    handleReturn();
};
