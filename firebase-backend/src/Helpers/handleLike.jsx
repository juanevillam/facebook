import { db, firebase } from "../Database/firebase";

export const handleLike = ( liked, postId, profile, setLiked ) => { 
    if ( liked ) { 
        db.collection( "posts" ).doc( postId ).collection( "likes" ).add({ dateCreated: firebase.firestore.FieldValue.serverTimestamp(), fullName: profile?.fullName, id: profile?.id, profilePicture: profile?.profilePicture, username: profile?.username }); 
    } if ( !liked ) { 
        db.collection( "posts" ).doc( postId ).collection( "likes" ).where( "id", "==", profile?.id ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => db.collection( "posts" ).doc( postId ).collection( "likes" ).doc( doc.id ).delete() )}); 
    }; 
    
    setLiked( !liked ); 
};