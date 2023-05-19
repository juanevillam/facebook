import { Video } from "./Video.jsx";
import { Comment } from "./Comment.jsx";
import ReactTimeago from "react-timeago";
import { db } from "../Database/firebase";
import { NavLink } from "react-router-dom";
import { LikeButton } from "./LikeButton.jsx";
import { EmojiPicker } from "./EmojiPicker.jsx";
import { PostOptions } from "./PostOptions.jsx";
import { ShareButton } from "./ShareButton.jsx";
import { ViewComments } from "./ViewComments.jsx";
import React, { useState, useEffect } from "react";
import { CommentsButton } from "./CommentsButton.jsx";
import { handleLike } from "../Helpers/handleLike.jsx";
import { handleSave } from "../Helpers/handleSave.jsx";
import { XIcon, TagIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { handleHidePost } from "../Helpers/handleHidePost.jsx";
import { useCollection } from "react-firebase-hooks/firestore";
import { handleDeletePost } from "../Helpers/handleDeletePost.jsx";
import { handlePostComment } from "../Helpers/handlePostComment.jsx";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture.jsx";

export const Post = ({ post, postId, profile }) => {
    const [ likes, setLikes ] = useState( [] );
    const [ liked, setLiked ] = useState( false );
    const [ saved, setSaved ] = useState( false );
    const [ comment, setComment ] = useState( "" );
    const [ comments, setComments ] = useState([]);
    const [ hiddened, setHiddened ] = useState( post?.hidden );
    const [ openViewComments, setOpenViewComments ] = useState( false );
    const [ openPostOptions, setOpenPostOptions ] = useState( false );
    const [ saveSnapshot ] = useCollection( db.collection( "posts" ).doc( postId ).collection( "saves" ).where( "id", "==", profile?.id ) );
    const [ likeSnapshot ] = useCollection( db.collection( "posts" ).doc( postId ).collection( "likes" ).where( "id", "==", profile?.id ) );
    const [ hiddenSnapshot ] = useCollection( db.collection( "posts"  ).doc( postId ).collection( "hides" ).where( "id", "==", profile?.id ) );
    
    const like = likeSnapshot?.docs?.[ 0 ]?.data();
    const postSaved = saveSnapshot?.docs?.[ 0 ]?.data();
    const postHidden = hiddenSnapshot?.docs?.[ 0 ]?.data();

    const deletePostHandler = () => handleDeletePost( postId );
    const saveHandler = () => handleSave( postId, profile, saved, setSaved );
    const likeHandler = () => handleLike( liked, postId, profile, setLiked );
    const hidePostHandler = () => handleHidePost( profile, hiddened, postId, setHiddened, setOpenPostOptions );
    const postCommentHandler = ( e ) => handlePostComment( comment, e, postId, profile, setComment, setOpenViewComments );

    useEffect( () => { 
        let unsubscribeLikes; 
        let unsubscribeComments; 
        
        if ( postId ) { 
            unsubscribeLikes = db.collection( "posts" ).doc( postId ).collection( "likes" ).onSnapshot( ( snapshot ) => setLikes( snapshot.docs ) ); }; 
            unsubscribeComments = db.collection( "posts" ).doc( postId ).collection( "comments" ).orderBy( "dateCreated", "asc" ).onSnapshot( snapshot => setComments( snapshot.docs.map( doc => ( { id: doc.id, comment: doc.data() } ) ) ) ); 

            return () => { 
                unsubscribeLikes();
                unsubscribeComments(); 
            }; 
    }, [ postId ] );

    return (
        <>
            { !postHidden ?
                <>
                    <div className={`animate__animated animate__fadeIn animate__faster bg-white-white dark:bg-dark-200 duration-300 max-w-4xl md:my-4 md:rounded-lg md:shadow-sm mt-3 mx-auto rounded-none transition z-0 ${ post?.image[ post?.image.length - 1 ] === "4"  && "hidden md:block" } z-0`}>
                        <div className="flex justify-between">
                            <div className="flex p-2.5 space-x-2.5">
                                <NavLink to={`/:${ post?.username }`}>
                                    { post?.profilePicture ?
                                        <img alt="" className="h-11 object-cover rounded-full w-11" src={ post?.profilePicture } />
                                        :
                                        <NoProfilePictureIcon className="h-11 object-cover rounded-full w-11" />
                                    }
                                </NavLink>
                                <div className="-mt-0.5">
                                    <div className="md:-mb-1 -mb-1.5">
                                        <NavLink to={`/:${ post?.username }`}>
                                            <h1 className="dark:text-white font-medium hover:underline inline-flex md:text-lg -mb-1.5 text-black text-md ">{ post?.fullName }</h1>
                                        </NavLink>
                                        <div className="dark:text-white hidden md:inline-block">
                                            { post?.felling && 
                                                <>
                                                    <img alt="" className="h-5 w-5 inline-flex ml-2 -mt-0.5 mr-2" src={ post?.fellingEmoji } />
                                                    <p className="font-medium inline-flex text-md md:text-lg">is felling { post?.felling }</p>
                                                </>
                                            }
                                        </div>
                                        <div className="dark:text-white inline-block md:hidden">
                                            { post?.felling && 
                                                <>
                                                    <p className="font-medium inline-flex ml-1.5 text-md">is</p>
                                                    <img alt="" className="h-5 inline-flex ml-1.5 -mt-0.5 w-5" src={ post?.fellingEmoji } />
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <ReactTimeago className="dark:text-gray-400 font-normal md:text-sm text-gray-500 text-xs" date={ new Date( post?.dateCreated?.toDate() ) } />
                                </div>    
                            </div>
                            <div className="flex pb-2.5 pr-1 pt-2.5 relative space-x-1.5">
                                <DotsHorizontalIcon className={`${ openPostOptions && "bg-gray-200" } cursor-pointer dark:bg-opacity-10 dark:text-gray-400 duration-300 hidden hover:bg-gray-200 h-8 md:flex -mt-1 p-1 rounded-full text-gray-600 transition w-8`} onClick={ () => setOpenPostOptions( !openPostOptions ) } />
                                <DotsHorizontalIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 flex hover:bg-gray-200 h-8 md:hidden -mt-1 p-1 rounded-full text-gray-600 transition w-8" onClick={ () => setOpenPostOptions( !openPostOptions ) } />
                                { post?.createdBy !== profile?.id && <XIcon className="cursor-pointer dark:hover:bg-opacity-10 dark:text-gray-400 duration-300 flex hover:bg-gray-200 h-8 -mt-1 p-1 rounded-full text-gray-600 transition w-8" onClick={ hidePostHandler } /> }
                                <PostOptions createdBy={ post?.createdBy } deletePostHandler={ deletePostHandler } fullName={ post?.fullName } handleHidePost={ hidePostHandler } openPostOptions={ openPostOptions } postSaved={ postSaved } profileId={ profile?.id } saveHandler={ saveHandler } setOpenPostOptions={ setOpenPostOptions } />
                            </div>
                        </div>
                        <p className={`dark:text-white pl-3.5 text-black ${ !post?.image && "mb-1 text-xl" }`}>{ post?.thoughts }</p>
                        { post?.image[ post?.image.length - 1 ] === "4"  && 
                            <div className={`${ like && "mb-2" }`}>
                                <Video image={ post?.image } />
                            </div>
                        }
                        { post?.image && 
                            <NavLink className={`hidden md:block mt-2 h-max ${ like && "mb-3" }`} to={ `/post/:${ postId }` }>
                                <img alt="" className="animate__animated animate__fadeIn cursor-pointer w-full" src={ post?.image } />
                            </NavLink> 
                        }
                        { post?.image && 
                            <NavLink to={ `/post/:${ postId }`}>
                                <img alt="" className={`block md:hidden mt-2 cursor-pointer w-full h-max ${ like && "mb-3" }`} src={ post?.image } />
                            </NavLink>  
                        }
                        { ( like || comments.length > 0 ) &&
                            <div className="flex items-center justify-between pl-3 pr-4">
                                { like &&
                                    <div className={`flex items-center space-x-2 animate__animated animate__bounceIn animate__faster ${ !post?.image ? "mb-2" : "mb-3" }`}>
                                        <img className="h-5 w-5" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                                        <div className="text-gray-500 inline-flex animate__animated animate__fadeIn animate__faster dark:text-gray-400">
                                            { like.id === profile.id ? 
                                                <p>You</p> 
                                                : 
                                                <p>{ like?.fullName?.split( " " ).slice( 0, 2 ).join( " " ) }</p> 
                                            }
                                            { !liked && like.id !== profile?.id && 
                                                <div className="text-gray-500 inline-flex">, 
                                                    { like.id === profile.id ? 
                                                        <p className="ml-1">{ profile?.fullName?.split( " " ).slice( 0, 2 ).join( " " ) }</p> 
                                                        : 
                                                        <p className="ml-1"> You</p> 
                                                    }
                                                </div> 
                                            } 
                                            { likes.length > 2 && <p>, and others</p> } 
                                        </div> 
                                    </div>
                                }
                                { comments.length > 0 && 
                                    <div className="hidden md:inline-flex mb-3 ml-1 text-gray-500 dark:text-gray-400 cursor-pointer hover:underline animate__animated animate__bounceIn animate__faster" onClick={ () => setOpenViewComments( !openViewComments ) }>
                                        { comments.length } 
                                        <div className="text-transparent">i</div> 
                                        { comments.length > 1 ? 
                                            <p>Comments</p> 
                                            : 
                                            <p>Comment</p> 
                                        }
                                    </div> 
                                }
                                { comments.length > 0 && 
                                    <div className="inline-flex md:hidden mb-3 text-gray-500 dark:text-gray-400 cursor-pointer hover:underline animate__animated animate__bounceIn animate__faster" onClick={ () => { setOpenViewComments( !openViewComments ) } }>
                                        { comments.length } 
                                        <div className="text-transparent">i</div> 
                                        { comments.length > 1 ? 
                                            <p>Comments</p> 
                                            : 
                                            <p>Comment</p> 
                                        }
                                    </div> 
                                }
                            </div>
                        }
                        <hr className={`bg-gray-500 -mt-px ${ ( !post?.image ) && ( !like ) && "mt-2" }`} />
                        <div className="flex justify-between">
                            <LikeButton like={ like } likeHandler={ likeHandler } />
                            <CommentsButton setOpenViewComments={ setOpenViewComments } openViewComments={ openViewComments } />
                            <ShareButton />
                        </div>
                        <hr className="bg-gray-400" />
                        <div>
                            { openViewComments &&
                                <div className="border-blue-500 border-l-3 pb-0.5 pl-4 pr-4 pt-3 hidden md:block">
                                    { comments.length < 1 && <h1 className="dark:text-ghost-white">No comments yet. Be the first to commet!</h1> }
                                    { comments.map( ({ id, comment }) => <Comment comment={ comment } commentId={ id } createdBy={ post?.createdBy } key={ id } post={ post } postId={ postId } profile={ profile } width="max-w-sm" /> ) }
                                </div> 
                            }
                            <div className="items-center hidden md:flex space-x-2 pl-5 pr-4 mt-3">
                                <NavLink to={`/:${ profile?.username }`}>
                                    { profile?.profilePicture ?
                                        <img alt="" className="cursor-pointer object-cover rounded-full w-12" src={ profile?.profilePicture } />
                                        :
                                        <NoProfilePictureIcon className="cursor-pointer h-12 object-cover rounded-full w-12" />
                                    }
                                </NavLink>
                                <form className="flex -mt-1 w-full" onSubmit={ postCommentHandler }>
                                    <div className="flex rounded-full h-10 border-1 bg-gray-100 dark:bg-dark-100 dark:border-dark-100 flex-grow justify-between w-full"> 
                                        <input className="pl-4 text-left font-normal flex-grow bg-transparent outline-none input dark:placeholder-gray-300 dark:text-gray-200" onChange={ ( e ) => setComment( e.target.value ) } placeholder="Write a comment..." value={ comment } />  
                                        <div className="flex items-center ml-2 mr-1 relative">
                                            <EmojiPicker postId={ postId } profile={ profile } />
                                            <svg className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 dark:text-gray-400 dark:hover:bg-opacity-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <button hidden type="submit" onClick={ postCommentHandler }>Hidden Submit</button>
                                </form>
                            </div>
                            <p className="hidden md:flex ml-20 text-xs pb-3 text-gray-600 dark:text-gray-400">Press enter to post.</p>
                        </div>
                    </div>
                    <ViewComments comment={ comment } comments={ comments } like={ like } liked={ liked } likes={ likes } openViewComments={ openViewComments } postCommentHandler={ postCommentHandler } postId={ postId } profile={ profile } setComment={ setComment } setOpenViewComments={ setOpenViewComments } />
                </>
                :
                <>
                    <div className="bg-white-white dark:bg-dark-200 rounded-none md:rounded-xl max-w-lg mx-auto animate__animated animate__fadeIn">
                        <div className="flex w-full justify-between pt-2.5 pl-2 pr-2 pb-3">
                            <div className="flex items-center">
                                <TagIcon className="h-7 w-7 text-blue-500 mr-2.5" />
                                <div>
                                    <h1 className="dark:text-white">Post Hidden</h1>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">You will never see this post unless you want to.</p>
                                </div>
                            </div>
                            <button className="pt-1 pb-1 pl-2 pr-2 text-sm text-center rounded-lg transition duration-300 text-gray-500 border-1 border-gray-500 font-semibold focus:outline-none hover:bg-blue-500 hover:text-white hover:border-blue-500" onClick={ hidePostHandler }>UNDO</button>
                        </div>
                        <hr className="dark:text-gray-300"/>
                        <div className="bg-gray-100 dark:bg-dark-200 md:bg-white-white w-full">
                            <div className="flex w-full pt-2 pb-1.5 pl-3 cursor-pointer dark:hover:bg-opacity-10 hover:bg-gray-200 transition duration-300">    
                                <svg className="h-6 w-6 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <p className="ml-2 -mt-px text-gray-500 dark:text-gray-300">Snooze { post?.fullName.split(' ')[0] } for 30 days.</p>
                            </div>
                            <div className="flex w-full pt-2 pb-1.5 pl-3 cursor-pointer dark:hover:bg-opacity-10 hover:bg-gray-200 transition duration-300">
                                <svg className="h-6 w-6 dark:text-gray-300 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                                <p className="ml-2 -mt-px dark:text-gray-300 text-gray-500">Find support or repost post</p>
                            </div>
                        </div>
                    </div>    
                    <p className="text-xs -mb-3 text-center text-transparent cursor-default">dsadas</p>
                </>
            }
        </>
    );
};