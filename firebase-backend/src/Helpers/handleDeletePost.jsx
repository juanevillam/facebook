import Swal from "sweetalert2";
import { db } from "../Database/firebase";

export const handleDeletePost = async( postId ) => { 
    Swal.fire({ title: "Deleting Post", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    await db.collection( "posts" ).doc( postId ).delete(); 
    Swal.close(); 

    Swal.close();
    Swal.fire( "Great!", "Your post has been deleted correctly", "success" );
};