import './styles.css';
import { Header } from '../Header';
import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import * as EmailValidator from 'email-validator';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { UserGroupIcon } from "@heroicons/react/solid";
import { db, auth } from '../../Database/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        outline: 'none',
        margin: '20px',
        padding: theme.spacing(1.4, 1.4, 1.4),
        width: '512px'
    },
}));  

const useStylesGroup = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '15px',
        outline: 'none',
        margin: '20px',
        padding: theme.spacing( 2 ),
        width: '312px'
    },
}));  

const useStylesSelf = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '15px',
        outline: 'none',
        margin: '20px',
        padding: theme.spacing( 2 ),
        width: '355px'
    },
}));  

export const MessengerHeader = () => {
    const classes = useStyles();
    const [ user ] = useAuthState( auth );
    const classesSelf = useStylesSelf();
    const classesGroup = useStylesGroup();
    const [ chat, setChat ] = useState( '' );
    const [ group, setGroup ] = useState( '' ) ;
    const [ openChat, setOpenChat ] = useState( false );
    const [ openGroup, setOpenGroup ] = useState( false );
    const [ openErrorSelf, setOpenErrorSelf ] = useState( false );
    const [ openErrorOther, setOpenErrorOther ] = useState( false );
    const userChat = db.collection( 'chats' ).where( 'users', 'array-contains', user.email );
    const [ chatsSnapshot ] = useCollection( userChat );

    const handleOpenChat = () => setOpenChat( true );
    const handleOpenGroup = () => setOpenGroup( true );
    const handleCloseChat = () => setOpenChat( false );
    const handleCloseGroup = () => setOpenGroup( false );
    const handleOpenErrorSelf = () => setOpenErrorSelf( true );
    const handleOpenErrorOther = () => setOpenErrorOther( true );
    const handleCloseErrorSelf = () => setOpenErrorSelf( false );
    const handleCloseErrorOther = () => setOpenErrorOther( false );
    const chatAlreadyExists = ( email ) => !!chatsSnapshot?.docs.find( chat => chat.data().users.find( user => user === email )?.length > 0 );
    
    const handleChat = () => {
        if ( !chat ) return null;
    
        if ( chat === user.email ) {
            handleCloseErrorOther();
            handleOpenErrorSelf();
            return;
        };
    
        if ( chatAlreadyExists( chat ) ) {
            handleOpenErrorOther();
            return;
        };
    
        if ( EmailValidator.validate( chat ) && !chatAlreadyExists( chat ) && chat !== user.email ) {
            db.collection( 'chats' ).add( { users: [ user.email, chat ] } );
            handleCloseChat();
        };
      };
    
    const handleGroup = () => {
        if ( !group ) return null;
        db.collection( "groups" ).add( { name: group, groupPictureUrl: "https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" } );
        handleCloseGroup();
        setGroup( "" );
    };

    return (
        <>  
            <div className="hidden md:block">
                <Header />
            </div>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classes.modal } open={ openChat } onClose={ handleCloseChat } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                <Fade in={ openChat }>
                    <div className={ classesGroup.paper }>
                        <h2 id="transition-modal-title" className="text-center">Please, enter an email address for <br />the user you want to chat with.</h2>
                        <div className="flex flex-col">
                            <input id="transition-modal-description" className="outline-none mt-6" value={ chat } onChange={ ( e ) => setChat( e.target.value ) } placeholder="Email address"/>
                            <button className="ChatButton" type="submit" disabled={ !chat } onClick={ handleChat }>Add</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classesGroup.modal } open={ openGroup } onClose={ handleCloseGroup } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                <Fade in={ openGroup }>
                    <div className={ classesGroup.paper }>
                        <h2 id="transition-modal-title" className="text-center">Please, enter a name for the<br /> group you want to create.</h2>
                        <div className="flex flex-col">
                            <input id="transition-modal-description" className="outline-none mt-6" value={ group } onChange={ ( e ) => setGroup( e.target.value ) } placeholder="Group Name" />
                            <button className="ChatButton" type="submit" disabled={ !group } onClick={ handleGroup }>Add</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classes.modal } open={ openErrorSelf } onClose={ handleCloseErrorSelf } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                <Fade in={ openErrorSelf }>
                    <div className={ classesSelf.paper }>
                        <h2 id="transition-modal-title" className="text-center">You can't create a chat with yourself. <br />Please, try other's person email account</h2>
                    </div>
                </Fade>
            </Modal>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classes.modal } open={ openErrorOther } onClose={ handleCloseErrorOther } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                <Fade in={ openErrorOther }>
                    <div className={ classes.paper }>
                        <h2 id="transition-modal-title" className="text-center">You already have a chat with <strong>{ chat }</strong>. <br />Please, try other's person email account.</h2>
                    </div>
                </Fade>
            </Modal>
            <div className="block md:hidden">
                <div className="flex bg-white-white dark:bg-dark-300 z-50 justify-between sticky top-0 pt-2 pl-3 pr-3 items-center">
                    <div className="animate__animated animate__fadeIn flex w-full justify-between">
                        <div className="flex flex-grow items-center">
                            <NavLink to="/messenger/settings">
                                <img className="h-10 w-10 rounded-full object-cover cursor-pointer" src={ user.photoURL } alt="" />
                            </NavLink>
                            <h3 className="dark:text-ghost-white text-2xl ml-4 font-semibold">Chats</h3>
                        </div>
                        <div className="flex items-center space-x-2">
                            <NavLink to="/home">
                                <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </NavLink>
                            <UserGroupIcon className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9" onClick={ handleOpenGroup } />
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9" viewBox="0 0 20 20" fill="currentColor" onClick={ handleOpenChat }>
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};