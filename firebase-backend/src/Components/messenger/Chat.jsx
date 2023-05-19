import Swal from 'sweetalert2';
import { rgba } from "polished";
import styled from "styled-components";
import { GifGrid } from './GifGrid.jsx';
import ReactTimeago from 'react-time-ago';
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { AddCategory } from './AddCategory.jsx';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MessengerSidebar } from './MessengerSidebar.jsx';
import React, { useEffect, useRef, useState } from 'react';
import { db, firebase, auth } from '../../Database/firebase';

export const duration = "0.4s";

export const Dialog = styled.div`
    background-color: #FFFFFF;
    bottom: 0;
    right: 0;
    left: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    height: 300px;
    margin: auto;
    max-width: 500px;
    position: fixed;
    transition: transform ${duration};
    transform: translateY(${(p) => (p.openGiphy ? 0 : "100%")});
    z-index: 100;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 5000px;
    height: 5000px;
    background: ${rgba("black", 0.35)};
    visibility: ${(p) => (p.openGiphy ? "visible" : "hidden")};
    opacity: ${(p) => (p.openGiphy ? 1 : 0)};
    transition-property: visibility opacity;
    transition-duration: ${duration};
    z-index: 100;
`;

const useStyles = makeStyles( ( theme ) => ( { modal: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, paper: { backgroundColor: theme.palette.background.paper, borderRadius: '15px', outline: 'none', margin: '20px', padding: theme.spacing( 2.5 ), width: '312px' } } ) );

export const Chat = ( props ) => {
    const classes = useStyles();
    const filePicker = useRef( null );
    const lastMessage = useRef( null );
    const [ user ] = useAuthState( auth );
    const [ open, setOpen ] = useState( false );
    const [ message, setMessage ] = useState( '' );
    const [ messages, setMessages ] = useState( [] );
    const [ imageUrl, setImageUrl ] = useState( "" );
    const chatId = props?.history?.location?.props?.id;
    const [ showIcons, setShowIcons ] = useState( true );
    const [ openGiphy, setOpenGiphy ] = useState( false );
    const [ categories, setCategories ] = useState( [ "Meme" ] );
    const [ openGroupOptions, setOpenGroupOptions ] = useState( false );
    const recipientEmail = props?.history?.location?.props?.recipientEmail;
    const [ recipientEmailNoProps, setRecipientEmailNoProps ] = useState( "" );
    const recipientPhotoUrl = props?.history?.location?.props?.recipientPhotoUrl;
    // const [ recipientPictureURLNoProps, setRecipientPictureURLNoProps ] = useState( [] );
    
    const handleOpen = () => setOpen( true );
    const handleOpenGiphy = () => setOpenGiphy( true );
    const handleCloseGiphy = () => setOpenGiphy( false );
    const handleOpenGroupOptions = () => setOpenGroupOptions( !openGroupOptions );
    // const handleScroll = () => lastMessage.current.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    const handleClose = () => { 
        setOpen( false );
        setImageUrl( null );
    };

    const handleSendPhotoSubmit = ( e ) => {
        const reader = new FileReader();
        
        if ( e.target.files[0] ) {
            reader.readAsDataURL( e.target.files[0] );
        };
        
        reader.onload = ( readerEvent ) => {
            handleOpen();
            setImageUrl( readerEvent.target.result );
        };
    };

    const handleSubmitPhoto = ( e ) => {
        e.preventDefault();
        Swal.showLoading();

        if ( !props.history.location.props ) {
            let id = localStorage.getItem( "id" );
            db.collection( "chats" ).doc( id ).collection( "messages" ).add( { imageUrl: imageUrl, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        };

        db.collection( "chats" ).doc( chatId ).collection( "messages" ).add( { imageUrl: imageUrl, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        handleClose();
        Swal.close();
        Swal.fire('Image Sent!', '', 'success');
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        if ( !props.history.location.props ) {
            let id = localStorage.getItem( "id" );
            db.collection( "chats" ).doc( id ).collection( "messages" ).add( { message: message, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        }; 

        db.collection( "chats" ).doc( chatId ).collection( "messages" ).add( { message: message, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        setMessage( '' );
        // handleScroll();
    };

    const handleSubmitThumbUp = ( e ) => {
        e.preventDefault();

        if ( !props.history.location.props ) {
            let id = localStorage.getItem( "id" );
            db.collection( "chats" ).doc( id ).collection( "messages" ).add( { thumbUp: true, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        };

        db.collection( "chats" ).doc( chatId ).collection( "messages" ).add( { thumbUp: true, name: user.displayName, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        // handleScroll();
    };

    useEffect( () => {
        if ( !props.history.location.props ) {
            let id = localStorage.getItem( "id" );
            setRecipientEmailNoProps( localStorage.getItem( "recipientEmail" ) );
            // setRecipientPictureURLNoProps( localStorage.getItem( "recipientPhotoUrl" ) );
            db.collection( "chats" ).doc( id ).collection( "messages" ).orderBy( "timestamp", "asc" ).onSnapshot( ( snapshot ) => setMessages( snapshot.docs.map( ( doc ) => doc.data() ) ) );;
        };

        if ( chatId ) {
            db.collection( "chats" ).doc( chatId ).collection( "messages" ).orderBy( "timestamp", "asc" ).onSnapshot( ( snapshot ) => setMessages( snapshot.docs.map( ( doc ) => doc.data() ) ) );;
        };

        document.title = `Messenger • ${ user.displayName }`
    }, [ props.history.location.props, chatId, user.displayName ] );
    
        return (
        <>
            <div className="flex">
                <MessengerSidebar />
                <div className="w-full h-screen overflow-y-scroll dark:bg-dark-200 bg-white-white">
                    <div className="animate__animated animate__fadeIn flex bg-white-white dark:bg-dark-200 z-40 justify-between sticky top-0 items-center pt-2.5 pb-2.5 md:pr-3 pl-1.5 md:pl-0 shadow-sm">
                        <div className="flex flex-grow items-center ml-2 md:ml-3">
                            <NavLink className="block md:hidden hover:text-black mr-4" to="/messenger">
                                <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.183 2.56066C12.7688 1.97487 12.7688 1.02513 12.183 0.43934C11.5972 -0.146447 10.6475 -0.146447 10.0617 0.43934L0.43934 10.0617C-0.146447 10.6475 -0.146447 11.5972 0.43934 12.183L10.0617 21.8054C10.6475 22.3912 11.5972 22.3912 12.183 21.8054C12.7688 21.2196 12.7688 20.2699 12.183 19.6841L3.62132 11.1224L12.183 2.56066Z" fill="#AA00FF"/>
                                </svg>
                            </NavLink>
                            { recipientPhotoUrl ?
                                    <img className="h-10 w-10 rounded-full object-cover" src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.30497-1/p100x100/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=m2l9WSr0blMAX9YZbXf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-mia3-1.xx&oh=2ca7a6fc4c034fbbd615a49d10dd8eed&oe=616E1851" alt="" />
                                :   
                                    <img className="h-10 w-10 rounded-full object-cover" src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.30497-1/p100x100/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=m2l9WSr0blMAX9YZbXf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-mia3-1.xx&oh=2ca7a6fc4c034fbbd615a49d10dd8eed&oe=616E1851" alt="" />
                            }
                            <div className="flex-grow ml-1.5">
                                { recipientEmail ?
                                        <h3 className="dark:text-ghost-white text-lg font-medium -mb-1">{ recipientEmail.split('@')[0].slice( 0, 12 ) }</h3>
                                    :
                                        <h3 className="dark:text-ghost-white text-lg font-medium -mb-1">{ recipientEmailNoProps.split('@')[0].slice( 0, 12 ) }</h3>
                                }
                                { messages.length >= 1 ? 
                                    <>
                                        <p className="dark:text-gray-400 hidden md:block text-xs text-gray-700 mb-px ml-px">Last message { messages[ messages.length - 1 ]?.timestamp ? <ReactTimeago className="dark:text-gray-400 text-gray-700 animate__animated animate__fadeIn" date={ new Date( messages[ messages.length - 1 ]?.timestamp?.toDate() ).toUTCString() } locale="en-US" /> : <p className="inline-flex">...</p> } by { messages[ messages.length - 1 ]?.name.split(' ')[0] }</p>
                                        <p className="dark:text-gray-400 block md:hidden text-xs text-gray-700 mb-px ml-px">Active { messages[ messages.length - 1 ]?.timestamp ? <ReactTimeago className="dark:text-gray-400 text-gray-700 animate__animated animate__fadeIn" date={ new Date( messages[ messages.length - 1 ]?.timestamp?.toDate() ).toUTCString() } locale="en-US" /> : <p className="inline-flex">...</p> }</p>
                                    </>
                                    :
                                    <p className="dark:text-gray-400 text-xs text-gray-700 mb-px ml-px">No messages yet</p>
                                }
                            </div>
                            <div className="flex items-center space-x-4 mr-2">
                                <svg className="block md:hidden cursor-pointer" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87815 13.9919L10.0081 14.1218C12.2457 16.2882 14.1184 17.3056 15.6261 17.174L16.0605 16.7687C16.6785 16.2064 17.1444 15.85 17.4584 15.6994C18.112 15.3859 18.5707 15.3922 19.8094 16.0625C21.439 16.9442 22.5642 17.9691 23.1392 18.5441C23.6731 19.078 23.5072 19.9977 23.3197 20.4057L23.1955 20.6333C22.8619 21.2129 21.6521 23.1249 19.3334 23.4521C18.4523 23.5764 17.3399 23.4624 16.0357 23.0696C13.2419 22.1024 10.4598 20.3297 7.68932 17.7514L7.19661 17.2834L7.19197 17.288L6.95419 17.046L6.71199 16.808L6.71664 16.8034L6.24857 16.3107C3.67035 13.5402 1.89763 10.7581 0.930416 7.96428C0.537607 6.66006 0.423627 5.54772 0.547946 4.66655C0.89822 2.18383 3.06566 0.972407 3.46871 0.746715L3.50964 0.723616C3.85849 0.522447 4.88095 0.285854 5.45591 0.860816L5.72814 1.14078C6.32079 1.76756 7.18177 2.79378 7.93755 4.19059C8.6078 5.42934 8.61405 5.88801 8.30058 6.54161C8.11655 6.92534 7.625 7.53612 6.82595 8.37394C6.69439 9.88161 7.71179 11.7543 9.87815 13.9919Z" fill="#AA00FF"/>
                                </svg>
                                <svg className="block md:hidden cursor-pointer mr-1" width="25" height="16" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2 0C17.2987 0 19 1.7269 19 3.85714V14.1429C19 16.2731 17.2987 18 15.2 18H3.8C1.70132 18 0 16.2731 0 14.1429V3.85714C0 1.7269 1.70132 0 3.8 0H15.2ZM26.8658 4.02231C26.9538 4.17312 27 4.34278 27 4.5153V13.4849C27 14.0455 26.5224 14.5 25.9333 14.5C25.7521 14.5 25.5738 14.456 25.4153 14.3723L21.6858 12.4005C21.2625 12.1767 21 11.7521 21 11.2912V6.70894C21 6.24812 21.2625 5.82352 21.6858 5.59973L25.4153 3.62793C25.9303 3.35566 26.5797 3.53224 26.8658 4.02231Z" fill="#AA00FF"/>
                                </svg>
                                <NavLink className="block md:hidden" to={ `/messenger/chat/:${ chatId }/options` }>
                                    <svg className="cursor-pointer" width="25px" height="25px" viewBox="0 0 36 36">
                                        <g transform="translate(18,18)scale(1.2)translate(-18,-18)">
                                            <path fill="#AA00FF" stroke="#AA00FF" d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"></path>
                                        </g>
                                    </svg>
                                </NavLink>
                                <div className="hidden md:block">
                                    <svg width="27px" height="27px" viewBox="0 0 36 36" onClick={ handleOpenGroupOptions }>
                                        <g className="cursor-pointer" transform="translate(18,18)scale(1.2)translate(-18,-18)">
                                            <path fill="#AA00FF" stroke="#AA00FF" d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full">
                        <br />
                        { messages.map( message => (
                            <div className={`mr-4 ml-3 mt-3 p-1 pb-2 pr-3 pl-3 w-max relative max-w-xs ${ message.name === user.displayName && "ml-auto" }` }>
                                { message.message && <><p className="absolute font-semibold">{ message.name.split(' ')[0] }</p><p className="mt-6 text-white pr-2 pl-2 pt-1.5 pb-2 bg-blue-500 rounded-xl break-words">{ message.message } <span className="text-xs">{ new Date( message?.timestamp?.toDate() ).toLocaleTimeString().split( ':' ).slice( 0, 2 ).join( ':' ) } { new Date( message?.timestamp?.toDate() ).toLocaleTimeString().split(' ')[ 1 ] }</span></p></> }
                                { message.thumbUp && 
                                    <>
                                        <svg className="hidden md:block animate__animated animate__fadeIn animate__faster" width="30px" height="30px" viewBox="0 0 16 16"><path fill="#0080ff" d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"></path><path fill="#0080ff" d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path></svg>
                                        <svg className="block md:hidden cursor-pointer animate__animated animate__fadeIn animate__faster" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.9826 11.6183C4.60828 11.6183 5.11549 12.1264 5.11549 12.7531V23.8652C5.11549 24.4919 4.60828 25 3.9826 25H1.9483C1.60323 25 1.28302 24.831 1.08729 24.5527L1.01992 24.4434C0.339974 23.173 0 21.1282 0 18.3091C0 15.5561 0.324241 13.5415 0.972724 12.2654L1.08381 12.0596C1.24029 11.7866 1.53054 11.6183 1.84478 11.6183H3.9826ZM12.156 0.00761594C14.7645 0.348219 16.0687 2.01757 16.0687 5.01567C16.0687 5.62163 15.9057 6.9777 15.5796 9.08388C20.8973 9.19497 23.4034 10.1384 23.4034 11.9143C23.4034 12.3519 23.2913 12.7709 22.7617 13.1714C23.5872 13.6761 24 14.3946 24 15.3271C24 16.2595 23.5254 17.0221 22.5762 17.6148C23.0328 18.1306 23.2038 18.7325 23.0891 19.4205C22.9745 20.1084 22.455 20.6254 21.5308 20.9713C21.9798 22.9147 19.7908 23.8864 14.964 23.8864C7.85305 23.8864 7.18481 22.1039 7.16322 20.5009L7.16264 14.0401C7.08978 12.5657 7.51995 11.3273 8.45317 10.3249L8.64653 10.1276C10.3 8.52263 11.1936 6.918 11.3273 5.31371L11.1334 0.948153C11.1112 0.447279 11.4985 0.0231787 11.9986 0.000896938C12.0511 -0.00144561 12.1038 0.000802556 12.156 0.00761594Z" fill="#0584FE"/></svg>
                                    </>
                                }
                                { message.imageUrl && <img className="rounded-3xl max-h-40" src={ message.imageUrl } alt="" /> }
                            </div>
                            ))
                        }
                        <br /><br /><br ref={ lastMessage } /><br /><br /><br />
                    </div>
                    <div className="flex fixed bottom-0 border-t bg-white-white dark:bg-dark-200 dark:border-dark-100 z-50 w-full md:max-w-4xl justify-between space-x-3 items-center pt-1.5 pb-2 pr-2 pl-2">
                        { showIcons && (
                                <>
                                    <div className="hidden md:flex items-center space-x-3">
                                        <div className="animate__animated animate__fadeIn" onClick={ handleOpenGiphy }>
                                            <svg className="cursor-pointer animate__animated animate__fadeIn animate__faster" width="23px" height="23px" viewBox="0 0 24 24"><g fill-rule="evenodd"><polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 "></polygon><path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12" fill="#0084FF"></path></g></svg>
                                        </div>
                                        <div className="animate__animated animate__fadeIn" onClick={ () => filePicker.current.click() }>
                                            <div>
                                                <svg className="cursor-pointer animate__animated animate__fadeIn animate__faster" width="23px" height="23px" viewBox="0 -1 17 17"><g fill="none" fill-rule="evenodd"><path d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478 1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z" fill="#0080ff"></path><circle fill="#0080ff" cx="8.5" cy="4.5" r="1.5"></circle><path d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0 .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6 2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z" fill="#0080ff"></path><path d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7 .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z" stroke="#0080ff" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                                            </div>
                                            <input hidden type="file" ref={ filePicker } onChange={ handleSendPhotoSubmit } />
                                        </div>
                                        <div className="animate__animated animate__fadeIn" onClick={ handleOpenGiphy }>
                                            <svg className="cursor-pointer animate__animated animate__fadeIn animate__faster" width="23px" height="23px" viewBox="0 0 17 16" x="0px" y="0px" ><g fill-rule="evenodd"><circle fill="none" cx="5.5" cy="5.5" r="1"></circle><circle fill="none" cx="11.5" cy="4.5" r="1"></circle><path d="M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z" fill="none"></path><path d="M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z" fill="#0084FF"></path><path d="M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4 2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6 1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57 6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1 1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#0084FF" fill-rule="nonzero"></path></g></svg>
                                        </div>
                                        <div className="animate__animated animate__fadeIn" onClick={ handleOpenGiphy }>
                                            <svg className="cursor-pointer animate__animated animate__fadeIn animate__faster" width="23px" height="23px" viewBox="0 0 16 16" x="0px" y="0px"><path d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0 .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7 0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0 .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045 2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037 5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011 2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3 10.2 1.3 8s1.704-3.623 3.504-3.623z" fill="#0084FF" fill-rule="nonzero"></path></svg>
                                        </div>
                                    </div>
                                    <div className="flex md:hidden space-x-4 items-center">
                                        <div className="animate__animated animate__fadeIn" onClick={ handleOpenGiphy }>
                                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C6.20914 12 8 13.7909 8 16C8 18.2091 6.20914 20 4 20C1.79086 20 0 18.2091 0 16C0 13.7909 1.79086 12 4 12ZM16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12ZM4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0ZM16 0C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8C13.7909 8 12 6.20914 12 4C12 1.79086 13.7909 0 16 0Z" fill="#0584FE"/></svg>
                                        </div>
                                        <div className="animate__animated animate__fadeIn" onClick={ () => filePicker.current.click() }>
                                            <div>
                                                <svg width="24" height="20" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1225 0C15.7671 0 16.388 0.241512 16.8617 0.676443L18.5133 2.19312C18.9278 2.57369 19.455 2.80617 20.0122 2.85834L20.2525 2.86957H21.0128C23.491 2.86957 25.5 4.86806 25.5 7.33333V17.5362C25.5 20.0015 23.491 22 21.0128 22H4.98718C2.50898 22 0.5 20.0015 0.5 17.5362V7.33333C0.5 4.86806 2.50898 2.86957 4.98718 2.86957H5.74748C6.39207 2.86957 7.01301 2.62805 7.48666 2.19312L9.13834 0.676443C9.61199 0.241512 10.2329 0 10.8775 0H15.1225ZM13 5.5C9.41015 5.5 6.5 8.41015 6.5 12C6.5 15.5899 9.41015 18.5 13 18.5C16.5899 18.5 19.5 15.5899 19.5 12C19.5 8.41015 16.5899 5.5 13 5.5ZM13 7.5C15.4853 7.5 17.5 9.51472 17.5 12C17.5 14.4853 15.4853 16.5 13 16.5C10.5147 16.5 8.5 14.4853 8.5 12C8.5 9.51472 10.5147 7.5 13 7.5Z" fill="#0584FE"/></svg>
                                            </div>
                                            <input hidden type="file" ref={ filePicker } onChange={ handleSendPhotoSubmit } />
                                        </div>
                                        <div className="animate__animated animate__fadeIn" onClick={ handleOpenGiphy }>
                                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18ZM18 2H4C2.89543 2 2 2.89543 2 4V14.4655C2 14.5759 2.08954 14.6655 2.2 14.6655C2.23122 14.6655 2.26201 14.6582 2.2899 14.6441L8.3036 11.618C9.9999 10.7641 12.0003 10.7636 13.697 11.6168L19.7102 14.6403C19.8088 14.6899 19.9291 14.6501 19.9787 14.5514C19.9927 14.5236 20 14.4928 20 14.4616V4C20 2.89543 19.1046 2 18 2ZM6.5 4C7.88071 4 9 5.11929 9 6.5C9 7.88071 7.88071 9 6.5 9C5.11929 9 4 7.88071 4 6.5C4 5.11929 5.11929 4 6.5 4Z" fill="#0584FE"/></svg>
                                        </div>
                                        <div className="animate__animated animate__fadeIn" onClick={ handleOpenGiphy }>
                                            <svg width="16" height="22" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99996 22H13C13.5522 22 14 22.4477 14 23C14 23.5128 13.6139 23.9355 13.1166 23.9933L13 24H4.99996C4.44767 24 3.99996 23.5523 3.99996 23C3.99996 22.4872 4.386 22.0645 4.88334 22.0067L4.99996 22H13H4.99996ZM17.1011 10.6035C17.6531 10.6197 18.0875 11.0804 18.0713 11.6324C18.0293 13.0647 17.5712 14.5824 16.7941 15.9284C14.3088 20.233 8.80451 21.7079 4.49988 19.2226C1.74634 17.6329 0.0719678 14.7458 0.000875111 11.6258C-0.0117064 11.0737 0.425693 10.6159 0.977835 10.6033C1.52998 10.5907 1.98777 11.0281 2.00036 11.5803C2.0557 14.0091 3.35737 16.2536 5.49988 17.4906C8.84792 19.4236 13.1291 18.2764 15.0621 14.9284C15.6789 13.86 16.0402 12.6628 16.0722 11.5737C16.0884 11.0217 16.549 10.5873 17.1011 10.6035ZM8.99996 0C11.7614 0 14 2.23858 14 5V11.5C14 14.2614 11.7614 16.5 8.99996 16.5C6.23853 16.5 3.99996 14.2614 3.99996 11.5V5C3.99996 2.23858 6.23853 0 8.99996 0Z" fill="#0584FE"/></svg>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        { !showIcons && <svg className="animate__animated animate__fadeIn ml-2 cursor-pointer" width="12" height="19" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ () => setShowIcons( true ) } ><path d="M0.831511 13.6521C0.363251 14.1594 0.394875 14.9502 0.902146 15.4185C1.40942 15.8868 2.20024 15.8551 2.6685 15.3479L8.66863 8.84787C9.11064 8.36904 9.11064 7.63098 8.66863 7.15215L2.6685 0.652146C2.20024 0.144875 1.40942 0.113251 0.902146 0.581511C0.394875 1.04977 0.363251 1.8406 0.831511 2.34787L6.04899 8.00001L0.831511 13.6521Z" fill="#0584FE"/></svg> }
                        <form className="w-full bg-gray-100 rounded-full mr-1" onClick={ () => setShowIcons( false ) }>
                            <div className="flex items-center pr-3 pl-3 pb-1 w-full flex-grow bg-gray-100 rounded-xl dark:bg-dark-100">
                                <input className="w-full outline-none mt-0.5 p-1 mr-2 dark:bg-transparent dark:text-white bg-gray-100" type="text" placeholder="Aa" value={ message } onChange={ (e) => setMessage( e.target.value ) } />
                                <svg className="mt-1"  width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM16.7118 15.72C15.518 17.249 13.9759 17.9946 12 17.9946C10.0241 17.9946 8.48203 17.249 7.28821 15.72C6.94832 15.2847 6.3199 15.2073 5.88459 15.5472C5.44927 15.8871 5.37191 16.5155 5.71179 16.9508C7.28627 18.9674 9.41086 19.9946 12 19.9946C14.5891 19.9946 16.7137 18.9674 18.2882 16.9508C18.6281 16.5155 18.5507 15.8871 18.1154 15.5472C17.6801 15.2073 17.0517 15.2847 16.7118 15.72ZM8 8C7.17157 8 6.5 8.89543 6.5 10C6.5 11.1046 7.17157 12 8 12C8.82843 12 9.5 11.1046 9.5 10C9.5 8.89543 8.82843 8 8 8ZM16 8C15.1716 8 14.5 8.89543 14.5 10C14.5 11.1046 15.1716 12 16 12C16.8284 12 17.5 11.1046 17.5 10C17.5 8.89543 16.8284 8 16 8Z" fill="#0584FE"/>
                                </svg>
                                <button className="hidden" type="submit" onClick={ handleSubmit }>Send message</button>
                            </div>
                        </form>
                        { message ? 
                            <>
                                <svg className="cursor-pointer animate__animated animate__fadeIn animate__faster" width="28px" height="28px" viewBox="0 0 24 24" onClick={ handleSubmit }>
                                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0080ff" fill-rule="evenodd" stroke="none"></path>
                                </svg>
                            </>
                            :
                            <div className="animate__animated animate__fadeIn animate__faster" onClick={ handleSubmitThumbUp }>
                                <svg className="hidden md:block cursor-pointer animate__animated animate__fadeIn animate__faster" width="24px" height="24px" viewBox="0 0 16 16">
                                    <path fill="#0080ff" d="M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"></path><path fill="#0080ff" d="M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"></path>
                                </svg>
                                <svg className="block md:hidden cursor-pointer animate__animated animate__fadeIn animate__faster" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9826 11.6183C4.60828 11.6183 5.11549 12.1264 5.11549 12.7531V23.8652C5.11549 24.4919 4.60828 25 3.9826 25H1.9483C1.60323 25 1.28302 24.831 1.08729 24.5527L1.01992 24.4434C0.339974 23.173 0 21.1282 0 18.3091C0 15.5561 0.324241 13.5415 0.972724 12.2654L1.08381 12.0596C1.24029 11.7866 1.53054 11.6183 1.84478 11.6183H3.9826ZM12.156 0.00761594C14.7645 0.348219 16.0687 2.01757 16.0687 5.01567C16.0687 5.62163 15.9057 6.9777 15.5796 9.08388C20.8973 9.19497 23.4034 10.1384 23.4034 11.9143C23.4034 12.3519 23.2913 12.7709 22.7617 13.1714C23.5872 13.6761 24 14.3946 24 15.3271C24 16.2595 23.5254 17.0221 22.5762 17.6148C23.0328 18.1306 23.2038 18.7325 23.0891 19.4205C22.9745 20.1084 22.455 20.6254 21.5308 20.9713C21.9798 22.9147 19.7908 23.8864 14.964 23.8864C7.85305 23.8864 7.18481 22.1039 7.16322 20.5009L7.16264 14.0401C7.08978 12.5657 7.51995 11.3273 8.45317 10.3249L8.64653 10.1276C10.3 8.52263 11.1936 6.918 11.3273 5.31371L11.1334 0.948153C11.1112 0.447279 11.4985 0.0231787 11.9986 0.000896938C12.0511 -0.00144561 12.1038 0.000802556 12.156 0.00761594Z" fill="#0584FE"/>
                                </svg>
                            </div>
                        }
                    </div>
                </div>  
                { openGroupOptions && 
                    <div>
                        <p>group options</p>
                    </div>
                }
            </div>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classes.modal } open={ open } onClose={ handleClose } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                <Fade in={ open }>
                    <div className={ classes.paper }>
                        <h2 id="transition-modal-title" className="text-center mb-4">Do you want to send this image to { recipientEmail ? <strong className="inline-flex">{ recipientEmail }</strong> : <strong className="inline-flex">{ recipientEmailNoProps }</strong> }?</h2>
                        <img className="rounded-lg animate__animated animate__fadeIn" src={ imageUrl } alt="" />
                        <div className="flex w-full space-x-2 mt-4">
                            <button className="w-5/6 p-2.5 bg-gray-200 font-semibold rounded-lg hover:bg-gray-300 transition duration-300" onClick={ handleClose }>Discard</button>
                            <button className="w-5/6 p-2.5 bg-blue-500 font-semibold rounded-lg text-white hover:bg-blue-600 transition duration-300" onClick={ handleSubmitPhoto }>Send</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Overlay openGiphy={ openGiphy } onClick={ handleCloseGiphy } />
            <div className="SlideUp__Container">
                <Dialog className="dark:bg-gray-900" openGiphy={ openGiphy }>
                    <div className="w-full h-full p-4 overflow-y-scroll">
                        <div className="items-center rounded-full bg-gray-100 p-2 sticky top-0 z-50">
                            <AddCategory setCategories={ setCategories } />
                        </div>
                        <ol>
                            { categories.map( category  => <GifGrid key={ category } category={ category } /> ) }
                        </ol>
                    </div>
                </Dialog>
            </div>
        </>
    );
};