import Swal from "sweetalert2";
import { db } from "../Database/firebase";
import { handleReturn } from "./handleReturn";

export const handleDeleteStory = async( storyId ) => { 
    Swal.fire({ title: "Deleting Story", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    await db.collection( "stories" ).doc( storyId ).delete(); 
    Swal.close(); 

    Swal.close();
    Swal.fire( "Great!", "Your story has been deleted correctly", "success" );
    handleReturn();
};