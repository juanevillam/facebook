import Swal from 'sweetalert2';
import firebase from 'firebase';
import screenful from "screenfull";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import ReactTimeago from 'react-timeago';
import { XIcon } from '@heroicons/react/solid';
import VideoControls from "./VideoControls.jsx";
import { Comments } from '../../home/posts/Comments.jsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from '../../../Database/firebase';
import { EmojiPicker } from '../../home/posts/EmojiPicker.jsx';
import { useCollection } from 'react-firebase-hooks/firestore';
import { formatDuration } from '../../../utils/FormatDuration.js';
import { DotsHorizontalIcon, PlayIcon } from '@heroicons/react/outline';

export const Toast = Swal.mixin({ toast: true, position: 'bottom-end', showConfirmButton: false, timer: 1200, didOpen: ( toast ) => { toast.addEventListener( 'mouseenter', Swal.stopTimer ); toast.addEventListener( 'mouseleave', Swal.resumeTimer ) }});
export const DialogCommentsMobile = styled.div`background-color: white;border-top-left-radius: 15px;border-top-right-radius: 15px;bottom: 0;right: 0;left: 0;height: 70%;position: fixed;transition: transform 0.3s;transform: translateY( ${ ( p ) => ( p.viewMoreCommentsMobile ? 0 : "100%" ) } );z-index: 100000;`;

let count = 0;    

export const Video = ( { videoId, profile, image, username, felling, fellingEmoji, timestamp, message, userPhotoUrl, userId, hidden } ) => {
    const [ user ] = useAuthState( auth );
    const [ likes, setLikes ] = useState( [] );
    // const [ saved, setSaved ] = useState( false );
    const [ liked, setLiked ] = useState( false );
    const [ comment, setComment ] = useState( "" );
    const [ comments, setComments ] = useState( [] );
    const [ hiddened, setHiddened ] = useState( hidden );
    const [ commentMobile, setCommentMobile ] = useState( "" );
    const [ openPostOptions, setOpenPostOptions ] = useState( false );
    const [ viewMoreComments, setViewMoreComments ] = useState( false );
    const [ openPostOptionsMobile, setOpenPostOptionsMobile ] = useState( false );
    const [ viewMoreCommentsMobile, setViewMoreCommentsMobile ] = useState( false );
    const [ likeSnapshot ] = useCollection( db.collection( "posts"  ).doc( videoId ).collection( "likes" ).where( 'uid', '==', user.uid ) );
    const like = likeSnapshot?.docs?.[ 0 ]?.data();
   
    // const [ saveSnapshot ] = useCollection( db.collection( "posts"  ).doc( videoId ).collection( "saves" ).where( 'uid', '==', user.uid ) );
    // const postSaved = saveSnapshot?.docs?.[ 0 ]?.data();
    
    const handleDeletePost = async() => { Swal.fire({ title: 'Deleting Post', text: 'Please wait...', didOpen: () => Swal.showLoading()  }); await db.collection( 'posts' ).doc( videoId ).delete();Swal.close(); };
    const handlePostCommentMobile = ( e ) => { e.preventDefault(); if ( !commentMobile ) return; db.collection( "posts" ).doc( videoId ).collection( "comments" ).add( { text: commentMobile, userId: user.uid, username: profile, userPhoto: user.photoURL, timestamp: firebase.firestore.FieldValue.serverTimestamp() } ); Toast.fire( { icon: 'success', title: 'Comment added', hideClass: { popup: 'animate__animated animate__fadeOut' } } ); setCommentMobile( "" ); };
    const handlePostComment = ( e ) => {e.preventDefault();if( !comment ) return;db.collection( "posts" ).doc( videoId ).collection( "comments" ).add( { text: comment, userId: user.uid, username: profile, userPhoto: user.photoURL, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );Toast.fire( { icon: 'success', title: 'Comment added', hideClass: { popup: 'animate__animated animate__fadeOut' } } );setComment( "" );setViewMoreComments( true );};
    useEffect( () => { let unsubscribe; let unsubscribeLikes; if ( videoId ) { unsubscribe = db.collection( "posts" ).doc( videoId ).collection( "comments" ).orderBy( "dateCreated", "asc" ).onSnapshot( snapshot => setComments( snapshot.docs.map( doc => ( { id: doc.id, comment: doc.data() } ) ) ) ); unsubscribeLikes = db.collection( 'posts' ).doc( videoId ).collection( 'likes' ).onSnapshot( ( snapshot ) => setLikes( snapshot.docs ) ); }; return () => { unsubscribe(); unsubscribeLikes() }; }, [ videoId ] );
    /*const handleTogleSave = ( e ) => {e.preventDefault();if ( saved ) {db.collection( 'posts' ).doc( videoId ).collection( 'saves' ).add( { username: username, uid: user.uid ,timestamp: firebase.firestore.FieldValue.serverTimestamp() } );} if ( !saved ) {db.collection( 'posts' ).doc( videoId ).collection( 'saves' ).where( "uid", "==", user.uid ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => { db.collection( 'posts' ).doc( videoId ).collection( 'saves' ).doc( doc.id ).delete() } ) } ); };  setSaved( !saved ); };*/
    const handleTogleLike = ( e ) => { e.preventDefault(); if ( liked ) { db.collection( 'posts' ).doc( videoId ).collection( 'likes' ).add( { username: username, uid: user.uid ,timestamp: firebase.firestore.FieldValue.serverTimestamp() } );  } if ( !liked ) { db.collection( 'posts' ).doc( videoId ).collection( 'likes' ).where( "uid", "==", user.uid ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => { db.collection( 'posts' ).doc( videoId ).collection( 'likes' ).doc( doc.id ).delete() } ) } ); };  setLiked( !liked ); };
    const handleTogleHidePost = () => { if ( hiddened ) { db.collection( 'posts' ).doc( videoId ).collection( 'hides' ).add( { username: username, uid: user.uid ,timestamp: firebase.firestore.FieldValue.serverTimestamp() } );  } else { db.collection( 'posts' ).doc( videoId ).collection( 'hides' ).where( "uid", "==", user.uid ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => { db.collection( 'posts' ).doc( videoId ).collection( 'hides' ).doc( doc.id ).delete() } ) } );  }; setOpenPostOptionsMobile( false ); setHiddened( !hiddened ); };
    
    const [ timeDisplayFormat, setTimeDisplayFormat ] = React.useState( "normal" );
    const [state, setState] = useState({ pip: false, playing: false, controls: false, light: false, muted: false, played: 0, duration: 0, playbackRate: 1.0, volume: 0.2, loop: true, seeking: false });
    const [stateMobile, setStateMobile] = useState({ pipMobile: false, playingMobile: false, controlsMobile: false, lightMobile: false, mutedMobile: false, playedMobile: 0, durationMobile: 0, playbackRateMobile: 1.0, volumeMobile: 0.2, loopMobile: true, seekingMobile: false });
    const playerRef = useRef( null );
    const playerRefMobile = useRef( null );
    const controlsRef = useRef( null );
    const playerContainerRef = useRef( null );
    const { playing, light, muted, loop, playbackRate, pip, played, volume } = state;
    const { playingMobile, lightMobile, mutedMobile, loopMobile, playbackRateMobile, pipMobile, volumeMobile } = stateMobile;

    const handleProgress = ( changeState ) => {
      if ( count > 3 ) { controlsRef.current.style.visibility = "hidden"; count = 0 };
      if ( !state.seeking ) setState({ ...state, ...changeState }) 
    };

    const handleProgressMobile = ( changeState ) => {
      if ( !stateMobile.seeking ) setStateMobile({ ...stateMobile, ...changeState }) 
    };
  
    const hanldeMute = () => setState({ ...state, muted: !state.muted });
    const handleDuration = ( duration ) => setState({ ...state, duration });
    const handleSeekMouseDown = ( e ) => setState({ ...state, seeking: true });
    const handlePlayPause = () => setState({ ...state, playing: !state.playing });
    const handlePlayPauseMobile = () => setStateMobile({ ...stateMobile, playingMobile: !stateMobile.playingMobile });
    const toggleFullScreen = () => screenful.toggle( playerContainerRef.current );
    const handlePlaybackRate = ( rate ) => setState({ ...state, playbackRate: rate });
    const handleRewind = () => playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);  
    const handleFastForward = () => playerRef.current.seekTo( playerRef.current.getCurrentTime() + 10 );
    const handleSeekChange = ( e, newValue ) => setState({ ...state, played: parseFloat( newValue / 100 ) });
    const handleDisplayFormat = () => setTimeDisplayFormat( timeDisplayFormat === "normal" ? "remaining" : "normal" );
    const handleVolumeSeekDown = ( e, newValue ) => setState({ ...state, seeking: false, volume: parseFloat( newValue / 100 ) });
    const handleSeekMouseUp = ( e, newValue ) => { setState({ ...state, seeking: false }); playerRef.current.seekTo( newValue / 100, "fraction" ) };
    const handleVolumeChange = ( e, newValue ) => setState({ ...state, volume: parseFloat( newValue / 100 ), muted: newValue === 0 ? true : false, });

    const duration = playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
    const currentTime = playerRef && playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
    
    const totalDuration = formatDuration( duration );
    const elapsedTime = timeDisplayFormat === "normal" ? formatDuration( currentTime ) : `-${ formatDuration( duration - currentTime ) }`;

    return (
        <>
            <div className={`animate__animated animate__fadeIn animate__faster bg-white hidden max-w-4xl mb-3 md:block ${ image[ image.length - 1 ] !== "4" && "md:hidden" } md:rounded-xl mx-auto rounded-none`}>
                <div className="dark:bg-dark-200 max-w-4xl md:rounded-lg md:shadow-sm mx-auto rounded-none">
                    <div className="flex justify-between">
                        <div className="flex p-2.5 space-x-2.5 ">
                            <img className="h-11 rounded-full" src={ userPhotoUrl } alt="" />
                            <div className="-mt-0.5">
                                <div className="md:-mb-1 -mb-1.5">
                                    <h1 className="dark:text-white font-medium inline-flex md:text-lg -mb-1.5 text-black text-md ">{ username.split( ' ' ).slice( 0, 2 ).join( ' ' ) } </h1>
                                    <div className="dark:text-white hidden md:inline-block">{ felling && <><img className="h-5 w-5 inline-flex ml-2 -mt-0.5 mr-1" src={ fellingEmoji } alt="" /> <p className="font-medium inline-flex text-md md:text-lg">is felling { felling }</p></> }</div>
                                    <div className="dark:text-white inline-block md:hidden">{ felling && <><p className="font-medium inline-flex ml-1.5 text-md">is</p><img className="h-5 inline-flex ml-1.5 -mt-0.5 w-5" src={ fellingEmoji } alt="" /></>}</div>
                                </div>
                                <ReactTimeago className="dark:text-gray-400 font-normal md:text-sm text-gray-500 text-xs" date={ new Date( timestamp?.toDate() ).toUTCString() } />
                            </div>    
                        </div>
                        <div className="flex p-2.5 relative space-x-1.5">
                            <DotsHorizontalIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 hidden hover:bg-gray-200 h-8 md:flex -mt-1 p-1 rounded-full text-gray-600 transition w-8" onClick={ () => setOpenPostOptions( !openPostOptions ) } />
                            <DotsHorizontalIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 flex hover:bg-gray-200 h-8 md:hidden -mt-1 p-1 rounded-full text-gray-600 transition w-8" onClick={ () => setOpenPostOptionsMobile( !openPostOptionsMobile ) } />
                            { user.uid !== userId && <XIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 flex hover:bg-gray-200 h-8 -mt-1 p-1 rounded-full text-gray-600 transition w-8" onClick={ handleTogleHidePost } /> }
                            { openPostOptions && user.uid === userId &&
                                <>
                                <div className="absolute animate__animated animate__fadeIn animate__faster bg-white hidden md:block pb-2.5 pl-2 pr-2 pt-2 right-5 rounded-xl shadow-lg top-12 w-96 z-50">
                                    <div className="cursor-pointer duration-300 flex hover:bg-gray-100 mb-2 pb-2.5 pl-2 pr-2 pt-2 rounded-xl transition">
                                        <svg className="bouncing h-7 text-black w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-black text-md">Save Post</h1>
                                            <p className="bouncing ml-2.5 mt-0.5 text-gray-600 text-xs">Add this to your saved items.</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="cursor-pointer duration-300 flex hover:bg-gray-100 items-center mt-2 pb-1.5 pl-2 pr-2 pt-1.5 rounded-xl transition">
                                        <svg className="bouncing h-7 text-black w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-black text-md">Edit Post</h1>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer duration-300 flex hover:bg-gray-100 items-center mt-0.5 pb-1.5 pl-2 pr-2 pt-1.5 rounded-xl transition">
                                        <svg className="bouncing h-7 text-black w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <div>
                                            <h1 className="font-medium ml-2.5 text-black text-md">Edit Audience</h1>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer duration-300 flex hover:bg-gray-100 items-center mt-0.5 pb-1.5 pl-2 pr-2 pt-1.5 rounded-xl transition">
                                        <svg className="bouncing h-7 text-black w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-black text-md">Turn off notifications for this post</h1>
                                        </div>
                                    </div>
                                    <hr className="bg-gray-500 mt-2 mb-2" />
                                    <div className="flex items-center mt-0.5 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer">
                                        <svg className="bouncing h-7 text-black w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-black text-md">Move to Archive</h1>
                                        </div>
                                    </div>
                                    <div className="flex pt-2 pr-2 pl-2 pb-2.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer" onClick={ handleDeletePost }>
                                        <svg className="bouncing h-7 text-black w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-black text-md">Delete Post</h1>
                                            <p className="bouncing ml-2.5 mt-0.5 text-gray-600 text-xs">Items in your trash are deleted inmediatly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bg-white-white border-dark-400 border-1 dark:bg-dark-200 md:dark:block hidden pb-2.5 pl-2 pr-2 pt-2 right-5 rounded-lg shadow-lg top-12 w-96 z-50">
                                    <div className="cursor-pointer duration-300 flex hover:bg-opacity-10 hover:bg-white mb-2 pb-2.5 pl-2 pr-2 pt-2 rounded-lg transition">
                                        <svg className="bouncing h-7 text-gray-200 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-gray-200 text-md">Save Post</h1>
                                            <p className="bouncing ml-2.5 mt-0.5 text-gray-400 text-xs">Add this to your saved items.</p>
                                        </div>
                                    </div>
                                    <hr className="bg-gray-400" />
                                    <div className="cursor-pointer duration-300 flex hover:bg-opacity-10 hover:bg-white items-center mt-2 pb-1.5 pl-2 pr-2 pt-1.5 rounded-lg transition">
                                        <svg className="bouncing h-7 text-gray-200 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-gray-200 text-md">Edit Post</h1>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer duration-300 flex hover:bg-opacity-10 hover:bg-white items-center mt-0.5 pb-1.5 pl-2 pr-2 pt-1.5 rounded-lg transition">
                                        <svg className="bouncing h-7 text-gray-200 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-gray-200 text-md">Edit Audience</h1>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer duration-300 flex hover:bg-opacity-10 hover:bg-white items-center mt-0.5 pb-1.5 pl-2 pr-2 pt-1.5 rounded-lg transition">
                                        <svg className="bouncing h-7 text-gray-200 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-gray-200 text-md">Turn off notifications for this post</h1>
                                        </div>
                                    </div>
                                    <hr className="bg-gray-500 mt-2 mb-2" />
                                    <div className="flex items-center mt-0.5 pt-1.5 pr-2 pl-2 pb-1.5 rounded-lg hover:bg-opacity-10 hover:bg-white transition duration-300 cursor-pointer">
                                        <svg className="bouncing h-7 text-gray-200 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-gray-200 text-md">Move to Archive</h1>
                                        </div>
                                    </div>
                                    <div className="flex pt-2 pr-2 pl-2 pb-2.5 rounded-lg hover:bg-opacity-10 hover:bg-white transition duration-300 cursor-pointer" onClick={ handleDeletePost }>
                                        <svg className="bouncing h-7 text-gray-200 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <div>
                                            <h1 className="bouncing font-medium ml-2.5 text-gray-200 text-md">Delete Post</h1>
                                            <p className="bouncing ml-2.5 mt-0.5 text-gray-400 text-xs">Items in your trash are deleted inmediatly.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            }
                            { openPostOptions && user.uid !== userId &&
                                <div className="hidden md:block right-14 pt-2 pl-2 pr-2 pb-2.5 z-50 top-12 absolute bg-white-white dark:bg-dark-200 shadow-lg rounded-xl h-max w-96 animate__animated animate__fadeIn animate__faster">
                                    <div className="flex mb-2 pt-2 pr-2 pl-2 pb-2.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer"><svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg><div><h1 className="text-black text-md font-medium ml-2.5">Save Post</h1><p className="text-gray-600 text-xs ml-2.5 mt-0.5">Add this to your saved items.</p></div></div>
                                    <hr />
                                    <div className="flex mt-2 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer"><svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg><div><h1 className="text-black text-md font-medium ml-2.5">Add { username.split(' ')[0] } to Favorites</h1><p className="text-gray-600 text-xs ml-2.5 mt-0.5">Prioritize her/his posts in News Feed.</p></div></div>
                                    <div className="flex mt-2 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer"><svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg><div><h1 className="text-black text-md font-medium ml-2.5">Turn off notifications for this post</h1><p className="text-gray-600 text-xs ml-2.5 mt-0.5">Add this to your saved items.</p></div></div>
                                    <div className="flex mt-2 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer" onClick={ handleTogleHidePost }><svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg><div><h1 className="text-black text-md font-medium ml-2.5">Hide Post</h1><p className="text-gray-600 text-xs ml-2.5 mt-0.5">You will never see this post unless you want to.</p></div></div>
                                </div>
                            }
                        </div>
                    </div>
                    <p className="pl-3.5 text-md text-black mb-2 dark:text-white">{ message }</p>
                    { image[ image.length - 1 ] === "4"  && 
                        <>
                            <div className="bg-black hidden md:block relative">
                                <ReactPlayer controls={ false } light={ light } loop={ loop } muted={ muted } onProgress={ handleProgress } playbackRate={ playbackRate } playing={ playing } pip={ pip } ref={ playerRef } style={{ maxHeight: "512px" }} url={ image } volume={ volume } width="100%" />
                                <VideoControls elapsedTime={ elapsedTime } muted={ muted } onChangeDispayFormat={ handleDisplayFormat } onDuration={ handleDuration } onFastForward={ handleFastForward } onMute={ hanldeMute } onPlaybackRateChange={ handlePlaybackRate } onPlayPause={ handlePlayPause } onRewind={ handleRewind } onSeek={ handleSeekChange } onSeekMouseDown={ handleSeekMouseDown } onSeekMouseUp={ handleSeekMouseUp } onToggleFullScreen={ toggleFullScreen } onVolumeChange={ handleVolumeChange } onVolumeSeekDown={ handleVolumeSeekDown } playbackRate={ playbackRate } played={ played } playing={ playing } ref={ controlsRef } totalDuration={ totalDuration } volume={ volume } />
                            </div>
                        </>
                    }
                    { ( like || comments.length > 0 ) && <div className="pl-3 mt-3 flex items-center mr-5 justify-between animate__animated animate__fadeIn animate__faster">{ like && <div className="flex mb-3 items-center space-x-2 animate__animated animate__bounceIn animate__faster"><img className="h-5 w-5" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" /><p className="text-gray-500 inline-flex animate__animated animate__fadeIn animate__faster dark:text-gray-400">{ like.username === user.displayName ? <p>You</p> : <p>{ like.username.split( ' ' ).slice( 0, 2 ).join( ' ' ) }</p> }{ !liked && like.username !== user.displayName && <p className="text-gray-500 inline-flex">, { like.user === user.displayName ? <p className="ml-1">{ user.displayName.split( ' ' ).slice( 0, 2 ).join( ' ' ) }</p> : <p className="ml-1"> You</p> }</p> } { likes.length > 2 && <p>, and others</p> } </p> </div> }{ comments.length > 0 && <p className="hidden md:inline-flex mb-3 ml-1 text-gray-500 dark:text-gray-400 cursor-pointer hover:underline animate__animated animate__bounceIn animate__faster" onClick={ () => setViewMoreComments( !viewMoreComments ) }>{ comments.length } <div className="text-transparent">i</div> { comments.length > 1 ? <p>Comments</p> : <p>Comment</p> }</p> }{ comments.length > 0 && <p className="inline-flex md:hidden ml-1 mb-3 text-gray-500 dark:text-gray-400 cursor-pointer hover:underline animate__animated animate__bounceIn animate__faster" onClick={ () => { setComment( undefined ); setViewMoreCommentsMobile( !viewMoreCommentsMobile ) } }>{ comments.length } <div className="text-transparent">i</div> { comments.length > 1 ? <p>Comments</p> : <p>Comment</p> }</p> }</div> }
                    <hr className="bg-gray-500 -mt-px" />
                    <div className="flex justify-between">
                        <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300" onClick={ handleTogleLike }>{ like ? <svg className="h-6 w-6 mr-1.5 text-thunder-100 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor"> <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg> : <svg className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /> </svg> } { like ? <p className="font-medium text-thunder-100 animate__animated animate__bounceIn animate__faster">Like</p> : <p className="dark:text-gray-400">Like</p> }</div>
                        <div className="hidden md:flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300" onClick={ () => setViewMoreComments( !viewMoreComments ) }>{ viewMoreComments ? <svg className="h-6 w-6 mr-1.5 text-thunder-100 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7" clipRule="evenodd" /></svg> : <svg className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}{ viewMoreComments ? <p className="font-medium text-thunder-100 animate__animated animate__bounceIn animate__faster">Comments</p> : <p className="dark:text-gray-400">Comments</p> }    </div>
                        <div className="flex md:hidden w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300" onClick={ () => setViewMoreCommentsMobile( true ) }>{ viewMoreComments ? <svg className="h-6 w-6 mr-1.5 text-thunder-100 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7" clipRule="evenodd" /></svg> : <svg className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}{ viewMoreComments ? <p className="font-medium text-thunder-100 animate__animated animate__bounceIn animate__faster">Comments</p> : <p className="dark:text-gray-400">Comments</p> }    </div>
                        <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 dark:text-gray-400 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300"><svg className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>Share</div>
                    </div>
                    <hr className="bg-gray-400" />
                    <div>
                        { viewMoreComments && <div className="border-blue-500 border-l-3 pl-5 pr-5 mt-2 hidden md:block">{ comments.length < 1 && <h1 className="dark:text-ghost-white">No comments yet. Be the first to commet!</h1> }{ comments.map( ( { id, comment } ) =><Comments key={ id } postId={ videoId } commentId={ id } userId={ comment.userId } userPhoto={ comment.userPhoto } username={ comment.username } text={ comment.text } emojiUrl={ comment.emojiUrl } timestamp={ comment.timestamp } width="max-w-sm" />  ) }</div> }
                        <div className="items-center hidden md:flex space-x-2 pl-5 pr-5 mt-3"><img className="rounded-full cursor-pointer h-11" src={ user.photoURL } alt="" /><form className="flex w-full -mt-1"><div className="flex rounded-full h-10 border-1 bg-gray-100 dark:bg-dark-100 dark:border-dark-100 flex-grow justify-between w-full"> <input className="pl-4 text-left font-normal flex-grow bg-transparent outline-none input dark:placeholder-gray-300 dark:text-gray-200" placeholder="Write a comment..."  value={ comment } onChange={ ( e ) => setComment( e.target.value ) } />  <div className="flex items-center ml-2 mr-1 relative"><EmojiPicker postId={ videoId } /><svg className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 dark:text-gray-400 dark:hover:bg-opacity-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div></div><button hidden type="submit" onClick={ handlePostComment }>Hidden Submit</button></form></div>
                        <p className="hidden md:flex ml-20 text-xs pb-3 text-gray-600 dark:text-gray-400">Press enter to post.</p>
                    </div>
                </div>
            </div>
            <div className={`bg-black h-screen md:hidden ${ image[ image.length - 1 ] !== "4" && "hidden" } relative scroll-start w-screen`}>
                <ReactPlayer controls={ false } height="100vh" light={ lightMobile } loop={ loopMobile } muted={ mutedMobile } onProgress={ handleProgressMobile } playbackRate={ playbackRateMobile } playing={ playingMobile } pip={ pipMobile } ref={ playerRefMobile } url={ image } volume={ volumeMobile } width="100vw" />
                <PlayIcon className="absolute cursor-pointer h-80 left-24 opacity-0 top-20" onClick={ handlePlayPauseMobile } />
                <p className="absolute bottom-20 left-3 text-white">@{ username.replace(/ /g,'').toLocaleLowerCase() }</p>
                <p className="absolute bottom-14 left-4 text-white">{ message }</p>
                <div className="absolute right-2.5 space-y-3 items-center bottom-32 z-20">
                    <div onClick={ handleTogleLike }>
                        { !like ? 
                            <svg className="cursor-pointer h-8 text-white w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg> 
                            : 
                            <svg className="animate__animated animate__bounceIn animate__faster cursor-pointer h-8 text-blue-600 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg> 
                        }
                        <p className="font-semibold -ml-1 text-center text-white">{ likes.length }</p>
                    </div>
                    <div>
                        <svg className="cursor-pointer h-8 text-white w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ () => setViewMoreCommentsMobile( true ) }>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p className="font-semibold -ml-1 text-center text-white">{ comments.length }</p>
                    </div>
                    <svg className="cursor-pointer h-8 mb-10 text-white w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </div>
                <DialogCommentsMobile viewMoreCommentsMobile={ viewMoreCommentsMobile }>
                    <div className="border-b pb-2 border-gray-300 flex items-center justify-between w-full pr-2 pl-2 pt-2.5">
                        { like &&
                            <div className="flex items-center space-x-2">
                                <img className="h-5 w-5" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                                <p className="text-black font-medium inline-flex animate__animated animate__fadeIn animate__faster">{ like.username === user.displayName ? <p>You</p> : <p>{ like.username.split( ' ' ).slice( 0, 2 ).join( ' ' ) }</p> }{ !liked && like.username !== user.displayName && <p className="text-black inline-flex">, { like.user === user.displayName ? <p className="ml-1">{ user.displayName.split( ' ' ).slice( 0, 2 ).join( ' ' ) }</p> : <p className="ml-1"> You</p> }</p> } { likes.length > 2 && <p>, and others</p> } </p> 
                            </div>
                        }
                        <XIcon className="h-9 w-9 -mt-1 text-black hover:bg-gray-200 rounded-full transition duration-300 p-1 cursor-pointer" onClick={ () => setViewMoreCommentsMobile( false ) } />
                    </div>
                    <div className="animate__animated animate__fadeIn animate__faster pt-3 pl-3 pr-3 h-screen pb-52 overflow-y-auto">
                        { comments.length < 1 && <h1>No comments yet. Be the first to comment!</h1>}
                        { comments.map( ( { id, comment } ) =><Comments key={ id } postId={ videoId } id={ id } userId={ comment.userId } userPhoto={ comment.userPhoto } username={ comment.username } text={ comment.text } timestamp={ comment.timestamp } emojiUrl={ comment.emojiUrl } width="max-w-sm" /> ) }
                        <div className="absolute pb-1 bottom-0 w-full left-0 bg-white border-t animate__animated animate__fadeIn animate__faster">
                            <div className="items-center flex space-x-2 pl-3.5 pr-3.5 mt-2">
                                <img className="rounded-full cursor-pointer h-11" src={ user.photoURL } alt="" />
                                <form className="flex w-60 -mt-1">
                                    <div className="flex rounded-full h-10 border-1 bg-gray-100 flex-grow justify-between w-full"> 
                                        <input className="pl-4 text-left font-normal flex-grow bg-transparent outline-none input" placeholder="Write a comment..." value={ commentMobile } onChange={ ( e ) => setCommentMobile( e.target.value ) } />
                                        <div className="flex items-center ml-2 mr-2">
                                            <svg className="h-8 w-8 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <svg className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        { commentMobile && <svg className="cursor-pointer mt-2 animate__animated animate__fadeIn animate__faster mr-2" width="20px" height="20px" viewBox="0 0 24 24" onClick={ handlePostCommentMobile }><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0080ff" fill-rule="evenodd" stroke="none"></path></svg> }
                                    </div>
                                    <button hidden type="submit" onClick={ handlePostCommentMobile }>Hidden Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </DialogCommentsMobile>
            </div>
        </>
    );
};