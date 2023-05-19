import Swal from "sweetalert2";
import { db } from "../Database/firebase";
import { setProfile } from "../Actions/auth";

export const handleDeletCoverPhoto = async( dispatch, e, profile, profileFatherId ) => {
    e.preventDefault();
    
    Swal.fire({ title: "Editing Cover Photo", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    dispatch( setProfile({ ...profile, coverPhoto: "" }, profile?.fatherId ) );
    await db.collection( "users" ).doc( profileFatherId ).update({ coverPhoto: "" });

    Swal.close();
    Swal.fire( "Great!", "Your cover photo has been removed correctly.", "success" );
};