import Swal from "sweetalert2";
import { db } from "../Database/firebase";
import { setProfile } from "../Actions/auth";

export const handleSubmitBio = async( bio, dispatch, e, setBio, profile, profileFatherId ) => {
    e.preventDefault();
    
    Swal.fire({ title: "Editing Bio", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    dispatch( setProfile({ ...profile, bio }, profile?.fatherId ) );
    await db.collection( "users" ).doc( profileFatherId ).update({ bio });

    setBio( "" );
    Swal.close();
    Swal.fire( "Great!", "Your bio has been added correctly.", "success" );
};