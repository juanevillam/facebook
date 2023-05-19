import './styles.css';
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { ChatSidebar } from './ChatSidebar.jsx';
import { GroupSidebar } from './GroupSidebar.jsx';
import * as EmailValidator from 'email-validator';
import Backdrop from '@material-ui/core/Backdrop';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../Database/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { DotsHorizontalIcon, PencilAltIcon, SearchIcon, UserGroupIcon } from '@heroicons/react/solid';

const useStyles = makeStyles( ( theme ) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '20px',
      outline: 'none',
      padding: theme.spacing(3.4, 3.4, 3.4),
    },
}));

export const MessengerSidebar = () => {
  const classes = useStyles();
  const [ user ] = useAuthState( auth );
  const [ chat, setChat ] = useState( '' ) ;
  const [ group, setGroup ] = useState( '' ) ;
  const [ open, setOpen ] = useState( false );
  const [ groups, setGroups ] = useState( [] ) ;
  const [ openGroup, setOpenGroup ] = useState( false );
  const [ openErrorSelf, setOpenErrorSelf ] = useState( false );
  const [ openErrorOther, setOpenErrorOther ] = useState( false );
  const userChat = db.collection( 'chats' ).where( 'users', 'array-contains', user.email );
  const [ chatsSnapshot ] = useCollection( userChat );
  
  const handleOpen = () => setOpen( true );
  const handleClose = () => setOpen( false );
  const handleOpenGroup = () => setOpenGroup( true );
  const handleCloseGroup = () => setOpenGroup( false );
  const handleOpenErrorSelf = () => setOpenErrorSelf( true );
  const handleOpenErrorOther = () => setOpenErrorOther( true );
  const handleCloseErrorSelf = () => setOpenErrorSelf( false );
  const handleCloseErrorOther = () => setOpenErrorOther( false );

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
        handleClose();
    };
  };

  const chatAlreadyExists = ( email ) => !!chatsSnapshot?.docs.find( chat => chat.data().users.find( user => user === email )?.length > 0 );

    const handleGroup = () => {
      if( !group ) return null;
      db.collection( "groups" ).add({
        name: group,
        groupPictureUrl: "https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
      })
      handleCloseGroup();
      setGroup( "" );
    };

    useEffect( () => db.collection( "groups" ).onSnapshot( ( snapshot ) => setGroups( snapshot.docs.map( ( doc ) => ( { id: doc.id, data: doc.data() } ) ) ) ), [] );

    return (
        <div className="w-100 max-w-sm overflow-y-scroll h-screen hidden md:block relative bg-white-white dark:bg-dark-200 border-r-2 dark:border-dark-100">
            <div className="sticky top-0 z-30 bg-white-white dark:bg-dark-200">
              <div className="pl-3 pt-3 pb-2 pr-3 flex justify-between">
                  <NavLink className="dark:text-ghost-white font-bold text-black text-2xl" to="/messenger">Chats</NavLink>
                  <div className="flex space-x-3">
                      <DotsHorizontalIcon className="dark:text-white dark:hover:bg-opacity-20 dark:hover:bg-white flex h-9 icon text-black w-9" />
                      <UserGroupIcon className="dark:text-white dark:hover:bg-opacity-20 dark:hover:bg-white flex h-9 icon text-black w-9" onClick={ handleOpenGroup } />
                      <PencilAltIcon className="dark:text-white dark:hover:bg-opacity-20 dark:hover:bg-white flex h-9 icon text-black w-9" onClick={ handleOpen } />
                  </div>
              </div>
              <div className="bg-gray-100 dark:bg-dark-100 hidden items-center lg:w-11/12 md:flex ml-2 mb-4 md:w-44 p-2 rounded-full">
                <SearchIcon className="cursor-pointer dark:text-gray-400 h-5 ml-1 mr-2 text-gray-500" />
                <input className="bg-transparent cursor-pointer dark:placeholder-gray-400 dark:text-white flex-shrink hidden lg:ml-0 md:inline-flex md:-ml-2 outline-none placeholder-gray-500" type="text" placeholder="Search Messenger" />
            </div>
              <hr className="mr-4 ml-4 bg-gray-400" />
            </div>
            <div className="pr-2 pl-2 space-y-1 pt-2">
              { chatsSnapshot?.docs.map( ( chat ) => <ChatSidebar key={ chat.id } id={ chat.id } users={ chat.data().users } /> ) }
              { groups.map( ( group ) => <GroupSidebar key={ group.id } id={ group.id } name={ group.data.name } groupPictureUrl={ group.data.groupPictureUrl } /> ) }
              <br /><br /><br />
            </div>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classes.modal } open={ open } onClose={ handleClose } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
              <Fade in={ open }>
                <div className={ classes.paper }>
                  <h2 id="transition-modal-title" className="text-center">Please, enter an email address for <br />the user you want to chat with.</h2>
                  <div className="flex flex-col">
                      <input id="transition-modal-description" className="outline-none mt-6" value={ chat } onChange={ ( e ) => setChat( e.target.value ) } placeholder="Email address"/>
                      <button className="ChatButton" type="submit" disabled={ !chat } onClick={ handleChat }>Add</button>
                  </div>
                </div>
              </Fade>
            </Modal>
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={ classes.modal } open={ openGroup } onClose={ handleCloseGroup } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
              <Fade in={ openGroup }>
                <div className={ classes.paper }>
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
                  <div className={ classes.paper }>
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
        </div>
    );
};