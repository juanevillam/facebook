import { db, firebase } from "../Database/firebase";

export const handlePostComment = ( comment, e, postId, profile, setComment, setViewMoreComments ) => { 
    if ( !comment ) return; 

    e.preventDefault();

    db.collection( "posts" ).doc( postId ).collection( "comments" ).add({ comment: comment, dateCreated: firebase.firestore.FieldValue.serverTimestamp(), fullName: profile?.fullName, id: profile.id, profilePicture: profile.profilePicture, username: profile.username });

    setComment( "" );
    setViewMoreComments( true );
};