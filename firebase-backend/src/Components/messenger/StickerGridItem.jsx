import './styles.css';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth, firebase } from '../../Database/firebase';

export const StickerGridItem = ( { url } ) => {
    const [ user ] = useAuthState( auth );
    let id = localStorage.getItem( "id" );
    const handleSend = () => db.collection( "groups" ).doc( id ).collection( "messages" ).add( { stickerUrl: url, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );

    return (
        <div className="StickerCard animate__animated animate__fadeIn" onClick={ handleSend }>
            <img className="StickerCard__Image" src={ url } alt="" />
        </div>
    );
};