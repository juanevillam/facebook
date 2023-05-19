import Swal from 'sweetalert2';
import firebase from 'firebase';
import { rgba } from "polished";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
// import ReactTimeago from 'react-timeago';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../Database/firebase';
import { Toast } from '../../Components/home/posts/Post';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Comments } from '../../Components/home/posts/Comments.jsx';
import { EmojiPicker } from '../../Components/home/posts/EmojiPicker';
import { DotsHorizontalIcon, DotsVerticalIcon, XIcon } from "@heroicons/react/outline";

export const DialogCommentsMobile = styled.div`
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    bottom: 0;
    right: 0;
    left: 0;
    height: 95%;
    position: fixed;
    transition: transform 0.3s;
    transform: translateY( ${ ( p ) => ( p.viewMoreCommentsMobile ? 0 : "100%" ) } );
    z-index: 100000;
`;

export const OverlayCommentsMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 5000px;
    height: 5000px;
    background: ${ rgba( "black", 0.4 ) };
    visibility: ${ ( p ) => ( p.viewMoreCommentsMobile ? "visible" : "hidden" ) };
    opacity: ${ ( p ) => ( p.viewMoreCommentsMobile ? 1 : 0 ) };
    transition-property: visibility opacity;
    transition-duration: 0.2s;
    z-index: 99999;
`;

export const Post = ( props ) => {
    const [ user ] = useAuthState( auth );
    const username = user.displayName;
    const [ likes, setLikes ] = useState( [] );
    const [ liked, setLiked ] = useState( false );
    const [ comment, setComment ] = useState( "" );
    const userId = localStorage.getItem( "userId" );
    const [ comments, setComments ] = useState( [] );
    const handleReturn = () => window.history.back();
    const imageNoProps = localStorage.getItem( "image" );
    const image = props?.history?.location?.props?.image;
    const postId = props?.history?.location?.props?.postId;
    const postIdNoProps = localStorage.getItem( "postId" );
    const messageNoProps = localStorage.getItem( "message" );
    const message = props?.history?.location?.props?.message;
    const [ commentMobile, setCommentMobile ] = useState( "" );
    const postUsername = props?.history?.location?.props?.username;
    const postUsernameNoProps = localStorage.getItem( "username" );
    // const timestamp = props?.history?.location?.props?.timestamp;
    const [ viewPostOptions, setViewPostOptions ] = useState( true );
    const [ openPostOptions, setOpenPostOptions ] = useState( false );
    const userPhotoUrl = props?.history?.location?.props?.userPhotoUrl;
    const userPhotoUrlNoProps = localStorage.getItem( "userPhotoUrl" );
    const [ viewMoreComments, setViewMoreComments ] = useState( true );
    const [ viewMoreCommentsMobile, setViewMoreCommentsMobile ] = useState( false );
    const [ likeSnapshot ] = useCollection( db.collection( "posts" ).doc( postIdNoProps ).collection( "likes" ).where( 'uid', '==', user.uid ) );
    const like = likeSnapshot?.docs?.[ 0 ]?.data();

    const handleDeletePost = async() => {
        Toast.fire( { icon: "success", title: "Post deleted", hideClass: { popup: "animate__animated animate__fadeOut" } } );
        await db.collection( "posts" ).doc( postIdNoProps ).delete();
        Swal.close();
        handleReturn();
    };

    const handleTogleLike = ( e ) => {
        e.preventDefault();
        if ( liked ) {
            db.collection( "posts" ).doc( postIdNoProps ).collection( "likes" ).add( { username: username, uid: user.uid ,timestamp: firebase.firestore.FieldValue.serverTimestamp() } ); 
        } if ( !liked ) {
            db.collection( "posts" ).doc( postIdNoProps ).collection( "likes" ).where( "uid", "==", user.uid ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => { db.collection( "posts" ).doc( postIdNoProps ).collection( "likes" ).doc( doc.id ).delete() } ) } ); 
        }; 
        setLiked( !liked ); 
    };

    const handlePostComment = ( e ) => {
        e.preventDefault();
        
        if( !comment ) return;

        if( props ) {
            db.collection( "posts" ).doc( postIdNoProps ).collection( "comments" ).add( { text: comment, userId: user.uid, username: user.displayName, userPhoto: user.photoURL, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        } else {
            db.collection( "posts" ).doc( postId ).collection( "comments" ).add( { text: comment, userId: user.uid, username: user.displayName, userPhoto: user.photoURL, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        };
        
        setComment( "" );
    };

    const handlePostCommentMobile = ( e ) => {
        e.preventDefault();

        if( !commentMobile ) return;

        if ( props ) {
            db.collection( "posts" ).doc( postIdNoProps ).collection( "comments" ).add( { text: commentMobile, userId: user.uid, username: user.displayName, userPhoto: user.photoURL, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        } else {
            db.collection( "posts" ).doc( postId ).collection( "comments" ).add( { text: commentMobile, userId: user.uid, username: user.displayName, userPhoto: user.photoURL, timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
        };

        setCommentMobile( "" );
    };
    
    useEffect( () => {
        db.collection( "posts" ).doc( postIdNoProps ).collection( "likes" ).onSnapshot( ( snapshot ) => setLikes( snapshot.docs ) );
        db.collection( "posts" ).doc( postIdNoProps ).collection( "comments" ).orderBy( "timestamp", "asc" ).onSnapshot( snapshot => setComments( snapshot.docs.map( doc => ( { id: doc.id, comment: doc.data() } ) ) ) );
    }, [ postIdNoProps ] )
    
    return (
        <>
            <div className="block h-screen w-screen bg-black md:hidden">
                <div className="w-full flex mb-1 pt-1 pl-2 pr-0.5 justify-between">
                    <XIcon className="h-9 w-9 text-white bg-black hover:bg-gray-900 rounded-full transition duration-300 p-1 cursor-pointer" onClick={ handleReturn } />
                    <DotsVerticalIcon className="h-9 w-9 text-white bg-black hover:bg-gray-900 rounded-full transition duration-300 p-1 cursor-pointer" />
                </div>
                { image ? <img className="object-contain h-full w-full animate__animated animate__fadeIn animate__faster" src={ image } alt="" /> : <img className="object-contain h-full w-full animate__animated animate__fadeIn animate__faster" src={ imageNoProps } alt="" /> }
                <div className="animate__animated animate__fadeIn animate__faster pt-3 pl-3 pr-3 h-screen pb-52 overflow-y-auto">
                    <div className="absolute pb-1 bottom-0 w-full left-0 bg-black animate__animated animate__fadeIn animate__faster">
                        <div className="bg-none pl-4 pb-3 pt-2 text-white break-words inline-flex">    
                            { postUsername ? <p>{ postUsername.split( ' ' ).slice( 0, 2 ).join( ' ' ) } </p> : <p>{ postUsernameNoProps.split( ' ' ).slice( 0, 2 ).join( ' ' ) } </p> } : { message ? <p className="inline-flex ml-1">{ message }</p> : <p className="inline-flex ml-1">{ messageNoProps }</p> }
                        </div>
                        <div className="flex w-full justify-between pl-3 pr-3 pb-3">
                            <div className="flex items-center space-x-2">
                                <img className="h-5 w-5" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                                <p className="text-white font-semibold text-sm inline-flex animate__animated animate__fadeIn animate__faster">{ likes.length }</p> 
                            </div>
                            <div className="flex items-center" onClick={ () => setViewMoreCommentsMobile( true ) }>
                                { comments.length > 0 && <p className="inline-flex text-white cursor-pointer font-semibold text-sm hover:underline animate__animated animate__bounceIn animate__faster">{ comments.length } <div className="text-black">i</div> { comments.length > 1 ? <p>Comments</p> : <p>Comment</p> }</p> } 
                            </div>
                        </div>
                        <div className="flex justify-between border-t border-gray-600">
                            <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-900 transition duration-300" onClick={ handleTogleLike }>
                                { like ? 
                                    <svg className="h-6 w-6 mr-1.5 text-blue-500 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg> 
                                    : 
                                    <svg className="h-6 w-6 mr-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg> 
                                }
                                { like ? <p className="font-medium text-blue-500 animate__animated animate__bounceIn animate__faster">Like</p> : <p className="text-white">Like</p> }
                            </div>
                            <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer hover:bg-gray-900 transition duration-300" onClick={ () => setViewMoreCommentsMobile( !viewMoreCommentsMobile ) }>
                                { viewMoreCommentsMobile ? <svg className="h-6 w-6 mr-1.5 text-blue-500 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7" clipRule="evenodd" /></svg> : <svg className="h-6 w-6 mr-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> }
                                { viewMoreCommentsMobile ? <p className="font-medium text-blue-500 animate__animated animate__bounceIn animate__faster">Comments</p> : <p className="text-white">Comments</p> }    
                            </div>
                            <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 cursor-pointer hover:bg-gray-900 transition duration-300 text-white">
                                <svg  className="h-6 w-6 mr-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                Share
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <OverlayCommentsMobile viewMoreCommentsMobile={ viewMoreCommentsMobile } onClick={ () => setViewMoreCommentsMobile( false ) } />
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
                        { comments.map( ( { id, comment } ) =><Comments key={ id } postId={ postId } id={ id } userId={ comment.userId } userPhoto={ comment.userPhoto } username={ comment.username } text={ comment.text } timestamp={ comment.timestamp } emojiUrl={ comment.emojiUrl } width="max-w-sm" /> ) }
                        <div className="absolute pb-1 bottom-0 w-full left-0 bg-white border-t animate__animated animate__fadeIn animate__faster">
                            <div className="items-center flex space-x-2 pl-3.5 pr-3.5 mt-2">
                                <img className="rounded-full cursor-pointer h-11" src={ user.photoURL } alt="" />
                                <form className="flex w-60 -mt-1">
                                    <div className="flex rounded-full h-10 border-1 bg-gray-100 flex-grow justify-between w-full"> 
                                        <input className="pl-4 text-left font-normal flex-grow bg-transparent outline-none input" placeholder="Write a comment..." value={ commentMobile } onChange={ ( e ) => setCommentMobile( e.target.value ) } />
                                        <div className="flex items-center ml-2 mr-2">
                                            <svg className="h-8 w-8 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <svg className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
            <div className="hidden md:flex scrollbar-hide h-screen">
                <div className="mx-auto relative bg-black flex items-center justify-center animate__animated animate__fadeIn animate__faster flex-grow">
                    <div className="absolute top-4 left-5 space-x-4 flex">
                        <svg className="h-7 w-7 text-white cursor-pointer animate__animated animate__fadeIn animate__faster" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ handleReturn }><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M6 18L18 6M6 6l12 12" /></svg>
                        <NavLink to="/feed"><img className="h-10 cursor-pointer -mt-2" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" alt="" /></NavLink>
                    </div>
                    <svg className="absolute top-5 right-5 h-6 w-6 text-white cursor-pointer animate__animated animate__fadeIn" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ () => setViewPostOptions( !viewPostOptions ) }><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.8 } d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    { image ? <img className="h-screen animate__animated max-w-3xl ml-14 animate__fadeIn animate__faster" src={ image } alt="" /> : <img className="h-screen" src={ imageNoProps } alt="" /> }
                </div>
                { viewPostOptions &&
                    <div className="w-80 hidden md:block relative bg-white-white dark:bg-dark-200">
                        <div className="pr-3 pb-2.5 pt-2 justify-end space-x-2 flex border-b-2 dark:border-dark-100">
                            <HeaderDropdowns />
                        </div>
                        <div className="pl-3 -mt-2 animate__animated animate__fadeIn animate__faster">
                            <div className="flex justify-between mt-4 relative">
                                <div className="flex items-center">
                                    { userPhotoUrl ? <img className="rounded-full h-12 w-12" src={ userPhotoUrl } alt="" /> : <img className="rounded-full h-12 w-12" src={ userPhotoUrlNoProps } alt="" /> }
                                    <div className="ml-2">
                                        { postUsername ? <h1 className="text-black font-semibold dark:text-white">{ postUsername.split( ' ' ).slice( 0, 2 ).join( ' ' ) }</h1> : <h1 className="text-black font-semibold dark:text-white">{ postUsernameNoProps.split( ' ' ).slice( 0, 2 ).join( ' ' ) }</h1> }
                                        {  /* { timestamp ? <ReactTimeago className="text-gray-500 dark:text-gray-400 text-sm ml-1 font-normal" date={ new Date( timestamp?.toDate() ).toUTCString() }  /> : <ReactTimeago className="text-gray-500 dark:text-gray-400 text-sm ml-1 font-normal" date={ new Date( post.timestamp?.toDate() ).toUTCString() }  /> } */ }
                                    </div>
                                </div>
                                <DotsHorizontalIcon className="mr-3 mt-1 h-9 w-9 dark:hover:bg-opacity-10 dark:text-gray-400 text-gray-600 hover:bg-gray-200 rounded-full transition duration-300 p-1.5 cursor-pointer" onClick={ () => setOpenPostOptions( !openPostOptions ) } />
                                { openPostOptions && user.uid === userId &&
                                    <div className="hidden md:block right-5 pt-2 z-50 pl-2 pr-2 pb-2.5 top-12 absolute bg-white shadow-lg rounded-xl h-max w-96 animate__animated animate__fadeIn animate__faster">
                                        <div className="flex mb-2 pt-2 pr-2 pl-2 pb-2.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer">
                                            <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                            <div>
                                                <h1 className="text-black text-md font-medium ml-2.5">Save Post</h1>
                                                <p className="text-gray-600 text-xs ml-2.5 mt-0.5">Add this to your saved items.</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="flex items-center mt-2 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer">
                                            <svg className="h-7 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                            <div><h1 className="text-black text-md font-medium ml-2.5">Edit Post</h1></div>
                                        </div>
                                        <div className="flex items-center mt-0.5 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer">
                                            <svg className="h-7 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                            <div><h1 className="text-black text-md font-medium ml-2.5">Edit Audience</h1></div>
                                        </div>
                                        <div className="flex items-center mt-0.5 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer">
                                            <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            <div><h1 className="text-black text-md font-medium ml-2.5">Turn off notifications for this post</h1></div>
                                        </div>
                                        <hr className="bg-gray-500 mt-2 mb-2" />
                                        <div className="flex items-center mt-0.5 pt-1.5 pr-2 pl-2 pb-1.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer">
                                            <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                                            <div><h1 className="text-black text-md font-medium ml-2.5">Move to Archive</h1></div>
                                        </div>
                                        <div className="flex pt-2 pr-2 pl-2 pb-2.5 rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer" onClick={ handleDeletePost }>
                                            <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            <div>
                                                <h1 className="text-black text-md font-medium ml-2.5">Delete Post</h1>
                                                <p className="text-gray-600 text-xs ml-2.5 mt-0.5">Items in your trash are deleted inmediatly.</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            { message ? <p className="mt-2 ml-1 dark:text-white">{ message }</p> : <p className="mt-2 ml-1 dark:text-white">{ messageNoProps }</p> }
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center space-x-2 ml-0.5">
                                    <img className="h-5 w-5" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                                    <p className="text-gray-500 dark:text-gray-300">{ likes.length }</p>
                                </div>
                                { comments.length > 0 && <p className="hidden md:inline-flex mr-3 text-gray-500 cursor-pointer hover:underline animate__animated animate__bounceIn animate__faster dark:text-gray-300" onClick={ () => setViewMoreComments( !viewMoreComments ) }>{ comments.length } <div className="text-transparent">i</div> { comments.length > 1 ? <p>Comments</p> : <p>Comment</p> }</p> }
                            </div>
                        </div>
                        <div className="mt-3 mr-3 ml-3">
                            <hr className="bg-gray-400" />
                            <div className="flex justify-between z-0">
                                <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer dark:hover:bg-opacity-10 hover:bg-gray-200 transition duration-300" onClick={ handleTogleLike }>
                                    { like ? 
                                        <svg className="h-6 w-6 mr-1.5 text-blue-500 animate__animated animate__bounceIn" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                        </svg> 
                                        : 
                                        <svg className="h-6 w-6 mr-1.5 dark:text-gray-400 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                    }
                                    { like ? <p className="font-medium text-blue-500 animate__animated animate__bounceIn">Like</p> : <p className="dark:text-gray-400">Like</p> }
                                </div>
                                <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer dark:hover:bg-opacity-10 hover:bg-gray-200 transition duration-300" onClick={ () => setViewMoreComments( !viewMoreComments ) }>
                                    { viewMoreComments ? 
                                        <svg className="h-6 w-6 mr-1.5 text-blue-500 animate__animated animate__bounceIn animate__faster" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7" clipRule="evenodd" />
                                        </svg> 
                                        : 
                                        <svg className="h-6 w-6 mr-1.5 dark:text-gray-400 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    }
                                    { viewMoreComments ? <p className="font-medium text-blue-500 animate__animated animate__bounceIn animate__faster">Comments</p> : <p className="dark:text-gray-400">Comments</p> }    
                                </div>
                                <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 hover:bg-gray-200 transition duration-300">
                                    <svg  className="h-6 w-6 mr-1.5 dark:text-gray-400 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                    Share
                                </div>
                            </div>
                            <hr className="bg-gray-500" />                        
                        </div>
                        { viewMoreComments &&
                            <div className="pl-3 pr-3 mt-3 block overflow-x-hidden overflow-y-auto pb-96 h-screen">
                                { comments.length < 1 && <h1 className="dark:text-gray-300">There are no comments yet.</h1> }
                                { comments.map( ( { id, comment } ) =><Comments key={ id } postId={ postIdNoProps } commentId={ id } userId={ comment.userId } userPhoto={ comment.userPhoto } username={ comment.username } text={ comment.text } emojiUrl={ comment.emojiUrl } timestamp={ comment.timestamp } width="max-w-xxs" /> ) }
                            </div> 
                        }
                        <div className="bg-white-white dark:bg-dark-200 absolute bottom-0">
                            <div className="items-center flex space-x-2 pl-3 pr-3 pt-2 pb-1">
                                <img className="rounded-full cursor-pointer h-11" src={ user.photoURL } alt="" />
                                <form className="flex w-11/12 -mt-1">
                                    <div className="flex rounded-full h-10 border-1 bg-gray-100 dark:bg-dark-100 dark:border-dark-400 flex-grow justify-between w-11/12"> 
                                        <input className="pl-4 text-left font-normal flex-grow outline-none input w-full dark:text-white dark:placeholder-gray-200 bg-transparent" placeholder="Write a comment..."  value={ comment } onChange={ ( e ) => setComment( e.target.value ) } />  
                                        <div className="flex items-center ml-2 mr-1">
                                            <EmojiPicker postId={ postIdNoProps } />
                                            <svg className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 dark:hover:bg-opacity-10 hover:bg-gray-200 dark:text-gray-400 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <button hidden type="submit" onClick={ handlePostComment }>Hidden Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};