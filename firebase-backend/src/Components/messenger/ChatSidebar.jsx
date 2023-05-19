import ReactTimeago from 'react-time-ago';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getEmail } from '../../utils/GetEmail.js';
import { db, auth } from '../../Database/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

export const ChatSidebar = ( { id, users } ) => {
    const [ user ] = useAuthState( auth );
    const [ messages, setMessages ] = useState( "" );
    const [ emailSnapshot ] = useCollection( db.collection( 'users' ).where( 'email', '==', getEmail( users, user ) ) );
    const recipientEmail = getEmail( users, user );
    const recipient = emailSnapshot?.docs?.[ 0 ]?.data();
    const recipientPhotoUrl = recipient?.photoURL;

    const handleSave = () => {
        localStorage.setItem( "id", id );
        localStorage.setItem( "recipientEmail", recipientEmail );
        localStorage.setItem( "recipientPhotoUrl", recipientPhotoUrl );
    };

    useEffect( () => db.collection( "chats" ).doc( id ).collection( "messages" ).orderBy( "timestamp", "desc" ).onSnapshot( ( snapshot ) => setMessages( snapshot.docs.map( ( doc ) => doc.data() ) ) ), [ id ] );

    return (
        <NavLink className="flex p-2 dark:hover:bg-opacity-10 hover:bg-gray-100 items-center hover:no-underline hover:text-black transition duration-300 animate__animated animate__fadeIn animate__faster cursor-pointer rounded-lg" activeClassName="bg-blue-50 dark:bg-opacity-10" to={{ pathname:`/messenger/chat/:${ id }`, props:{ id, users, recipientPhotoUrl, recipientEmail } } } onClick={ handleSave } >
            { recipient ? 
                <img className="h-14 w-14 rounded-full object-cover" src={ recipient?.photoURL } alt="" /> 
                :
                <img className="h-14 w-14 rounded-full object-cover" src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.30497-1/p100x100/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=m2l9WSr0blMAX9YZbXf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-mia3-1.xx&oh=2ca7a6fc4c034fbbd615a49d10dd8eed&oe=616E1851" alt="" /> 
            }
            <div className="ml-3 relative w-full">
                <h2 className="dark:text-ghost-white text-lg font-medium -mb-1">{ recipientEmail.split('@')[0].slice( 0, 20 ) }</h2>
                { messages[0]?.imageUrl && <p className="dark:text-gray-300 text-gray-700 text-sm">{ messages[0]?.name === user.displayName ? ( <p className="inline-flex">You</p> ) : ( messages[0]?.name.split(' ')[0] ) }<p className="mr-1 inline-flex">:</p><p className="font-semibold inline-flex">Photo</p><div className="dark:bg-gray-300  h-0.5 w-0.5 bg-gray-600 absolute ml-1.5 bottom-2 inline-flex rounded-full"></div> { messages[0]?.timestamp && <ReactTimeago className="dark:text-gray-300  text-gray-700 ml-3 animate__animated animate__fadeIn" date={ new Date( messages[0]?.timestamp?.toDate() ).toUTCString() } locale="en-US" timeStyle="twitter" /> } </p> }
                { messages[0]?.message && <p className="dark:text-gray-300 text-gray-700 text-sm">{ messages[0]?.name === user.displayName ? ( <p className="inline-flex">You</p> ) : ( messages[0]?.name.split(' ')[0] ) }<p className="mr-px inline-flex">:</p> { messages[0]?.message.slice( 0, 10 ) }<div className="dark:bg-gray-300  h-0.5 w-0.5 bg-gray-600 absolute ml-2 bottom-2 inline-flex rounded-full"></div> { messages[0]?.timestamp && <ReactTimeago className="dark:text-gray-300  text-gray-700 ml-4 animate__animated animate__fadeIn" date={ new Date( messages[0]?.timestamp?.toDate() ).toUTCString() } locale="en-US" timeStyle="twitter" /> } </p> }
                { messages[0]?.thumbUp && 
                    <p className="text-sm text-gray-700">{ messages[0]?.name === user.displayName ? 
                            ( <p className="inline-flex">You</p> ) 
                        :
                            ( messages[0]?.name.split(' ')[0] ) }<p className="mr-1 inline-flex">:</p>
                            <svg className="inline-flex md:hidden mb-1 cursor-pointer animate__animated animate__fadeIn animate__faster" width="15" height="15" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.9826 11.6183C4.60828 11.6183 5.11549 12.1264 5.11549 12.7531V23.8652C5.11549 24.4919 4.60828 25 3.9826 25H1.9483C1.60323 25 1.28302 24.831 1.08729 24.5527L1.01992 24.4434C0.339974 23.173 0 21.1282 0 18.3091C0 15.5561 0.324241 13.5415 0.972724 12.2654L1.08381 12.0596C1.24029 11.7866 1.53054 11.6183 1.84478 11.6183H3.9826ZM12.156 0.00761594C14.7645 0.348219 16.0687 2.01757 16.0687 5.01567C16.0687 5.62163 15.9057 6.9777 15.5796 9.08388C20.8973 9.19497 23.4034 10.1384 23.4034 11.9143C23.4034 12.3519 23.2913 12.7709 22.7617 13.1714C23.5872 13.6761 24 14.3946 24 15.3271C24 16.2595 23.5254 17.0221 22.5762 17.6148C23.0328 18.1306 23.2038 18.7325 23.0891 19.4205C22.9745 20.1084 22.455 20.6254 21.5308 20.9713C21.9798 22.9147 19.7908 23.8864 14.964 23.8864C7.85305 23.8864 7.18481 22.1039 7.16322 20.5009L7.16264 14.0401C7.08978 12.5657 7.51995 11.3273 8.45317 10.3249L8.64653 10.1276C10.3 8.52263 11.1936 6.918 11.3273 5.31371L11.1334 0.948153C11.1112 0.447279 11.4985 0.0231787 11.9986 0.000896938C12.0511 -0.00144561 12.1038 0.000802556 12.156 0.00761594Z" fill="#0584FE"/></svg><svg className="hidden md:inline-flex -mt-0.5 animate__animated animate__fadeIn animate__faster" width="14px" height="14px" viewBox="0 0 16 16"><path fill="#0080ff" d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"></path><path fill="#0080ff" d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path></svg><div className="h-0.5 w-0.5 bg-gray-600 absolute ml-1.5 bottom-2 inline-flex rounded-full"></div> { messages[0]?.timestamp && <ReactTimeago className="text-gray-700 ml-3 animate__animated animate__fadeIn" date={ new Date( messages[0]?.timestamp?.toDate() ).toUTCString() } locale="en-US" timeStyle="twitter" /> } 
                    </p>
                }
                <p className="absolute bottom-px right-1 font-semibold text-xs text-blue-500">Chat</p>
            </div>
        </NavLink>
    );
};