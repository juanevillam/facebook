import { db, firebase } from "../Database/firebase";

export const handleHidePost = ( hiddened, postId, profile, setHiddened, setOpenPostOptions ) => { 
    if ( hiddened ) { 
        db.collection( "posts" ).doc( postId ).collection( "hides" ).add({ dateCreated: firebase.firestore.FieldValue.serverTimestamp(), fullName: profile?.fullName, id: profile?.id, profilePicture: profile?.profilePicture, username: profile?.username }); 
    } else { 
        db.collection( "posts" ).doc( postId ).collection( "hides" ).where( "id", "==", profile?.id ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => db.collection( "posts" ).doc( postId ).collection( "hides" ).doc( doc.id ).delete() )}); 
    }; 

    setHiddened( !hiddened ); 
    setOpenPostOptions( false ); 
};