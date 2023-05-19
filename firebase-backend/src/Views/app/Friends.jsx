import React, { useEffect, useState } from 'react';
import { auth, db } from '../../Database/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Sidebar } from '../../components/friends/Sidebar.jsx';
import { UserCard } from '../../components/friends/UserCard.jsx';

export const Friends = () => {
    const [ user ] = useAuthState( auth );
    const [ allUsers, setAllUsers ] = useState( [] );
    document.title = `Friends • ${ user.displayName }`;
    useEffect( () => db.collection( "users" ).where( "userId", "!=", user.uid ).onSnapshot( snapshot => setAllUsers( snapshot.docs.map( doc => ( { id: doc.id, user: doc.data() } ) ) ) ), [ user.uid ] );

    return (
        <>
            <div className="flex scrollbar-hide">
                <Sidebar />
                <div className="dark:bg-black flex-grow h-screen pb-44 pt-3 md:pl-8 overflow-y-auto scrollbar-hide">
                    <div className="card-columns row animate__animated animate__fadeIn">
                        { allUsers.map( ( { id, user } ) => (
                            <UserCard key={ id } userId={ user.userId } profile={ user.fullName } userPhotoUrl= { user.photoUrl } friend={ false } />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};