import { db, firebase } from "../Database/firebase";

export const handleSave = ( postId, profile, saved, setSaved ) => { 
    if ( saved ) {
        db.collection( "posts" ).doc( postId ).collection( "saves" ).add({ dateCreated: firebase.firestore.FieldValue.serverTimestamp(), fullName: profile?.fullName, id: profile?.id, profilePicture: profile?.profilePicture, username: profile?.username });
    } if ( !saved ) {
        db.collection( "posts" ).doc( postId ).collection( "saves" ).where( "id", "==", profile?.id ).get().then( ( querySnapshot ) => querySnapshot.forEach( ( doc ) => db.collection( "posts" ).doc( postId ).collection( "saves" ).doc( doc.id ).delete() ) ); 
    }; 

    setSaved( !saved ); 
};