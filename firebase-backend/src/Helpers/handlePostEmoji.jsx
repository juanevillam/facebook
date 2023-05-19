import { db, firebase } from "../Database/firebase";

export const handlePostEmoji = (  emojiUrl, postId, profile, setViewEmojis ) => {
    db.collection( "posts" ).doc( postId ).collection( "comments" ).add({ emojiUrl, dateCreated: firebase.firestore.FieldValue.serverTimestamp(), fullName: profile?.fullName, id: profile.id, profilePicture: profile.profilePicture, username: profile.username } );
    setViewEmojis( false );
};