import Swal from "sweetalert2";
import { db } from "../Database/firebase";
import { setProfile } from "../Actions/auth";
import { handlePostFileToDatabase } from "./handlePostFileToDatabase";

export const handleSubmitCoverPhoto = async( dispatch, e, imageFromFilePicker, profile, profileFatherId ) => {
    e.preventDefault();
    
    Swal.fire({ title: "Editing Cover Photo", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    if ( imageFromFilePicker ) {
        const imageFromFilePickerPosted = await handlePostFileToDatabase( imageFromFilePicker );
        dispatch( setProfile({ ...profile, coverPhoto: imageFromFilePickerPosted }, profile?.fatherId ) );
        db.collection( "users" ).doc( profileFatherId ).update({ coverPhoto: imageFromFilePickerPosted });
    };

    Swal.close();
    Swal.fire( "Great!", "Your cover photo has been updated correctly.", "success" );
};