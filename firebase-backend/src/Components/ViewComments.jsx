import React from "react";
import { rgba } from "polished";
import { Comment } from "./Comment";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/solid";

export const ViewCommentsOverlay = styled.div`
    background: ${ rgba( "black", 0.4 ) };
    height: 5000px;
    left: 0;
    opacity: ${ ( p ) => ( p.openViewComments ? 1 : 0 ) };
    position: fixed;
    top: 0;
    transition-duration: 0.3s;
    transition-property: visibility opacity;
    visibility: ${ ( p ) => ( p.openViewComments ? "visible" : "hidden" ) };
    width: 5000px;
    z-index: 99999;
`;

export const ViewCommentsDialog = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    height: 95%;
    position: fixed;
    transition: transform 0.3s;
    transform: translateY( ${ ( p ) => ( p.openViewComments ? 0 : "100%" ) } );
    z-index: 100000;
`;

export const ViewComments = ({ comment, comments, like, liked, likes, openViewComments, post, postCommentHandler, postId, profile, setComment, setOpenViewComments }) => {
    return (
        <div className="block md:hidden">
            <ViewCommentsOverlay openViewComments={ openViewComments } onClick={ () => setOpenViewComments( false ) } />
            <ViewCommentsDialog openViewComments={ openViewComments }>
                <div className="bg-white-white dark:bg-dark-200 h-full rounded-t-lg w-full">
                    <div className="pb-2 pr-1 pl-2 pt-2.5 relative w-full">
                        { like &&
                            <div className="flex items-center space-x-2 animate__animated animate__bounceIn animate__faster">
                                <img className="h-5 w-5" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" />
                                <div className="text-gray-500 inline-flex animate__animated animate__fadeIn animate__faster dark:text-gray-400 text-xl">
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
                        <XIcon className="absolute cursor-pointer dark:text-white dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-9 p-1.5 right-1 rounded-full text-black top-1 transition w-9" onClick={ () => setOpenViewComments( false ) } />
                    </div>
                    <div className="h-full overflow-y-auto pb-44 pl-2 pr-2 pt-2 space-y-3">
                        { comments.map( ({ id, comment }) => <Comment comment={ comment } commentId={ id } createdBy={ post?.createdBy } key={ id } postId={ postId } profile={ profile } width="max-w-sm" /> ) }
                        { comments.length === 0 && <h1 className="dark:text-gray-400 mt-10 text-center text-3xl">No comments yet.</h1> }
                    </div>
                    <div className="bg-white-white dark:bg-dark-200 border-t bottom-0 dark:border-dark-100 fixed z-20 w-full">
                        <form className="flex items-center pb-2.5 pl-3 pr-3 pt-2 space-x-4 w-full">
                            <input className="bg-dark-100 dark:text-white flex-grow focus:outline-none pb-2 pl-4 pr-2 pt-2 rounded-full w-full" type="text" placeholder="Write a comment..." value={ comment } onChange={ (e) => setComment( e.target.value ) } />
                            { comment && 
                                <svg className="animate__animated animate__fadeIn animate__faster cursor-pointer h-8 w-8" viewBox="0 0 24 24" onClick={ postCommentHandler }>
                                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0080ff" fill-rule="evenodd" stroke="none" />
                                </svg> 
                            }
                        </form>
                    </div>
                    {
                        /*
                            <div className="animate__animated animate__fadeIn animate__faster pt-3 pl-3 pr-3 h-screen pb-52 overflow-y-auto">
                                { comments.length < 1 && <h1>No comments yet. Be the first to comment!</h1>}
                                { comments.map( ( { id, comment } ) => <Comments key={ id } postId={ postId } id={ id } userId={ comment.id } userPhoto={ comment.userPhoto } username={ comment.username } text={ comment.text } timestamp={ comment.timestamp } emojiUrl={ comment.emojiUrl } width="max-w-sm" /> ) }
                                <div className="absolute pb-1 bottom-0 w-full left-0 bg-white border-t animate__animated animate__fadeIn animate__faster">
                                    <div className="items-center flex space-x-2 pl-3.5 pr-3.5 mt-2">
                                        <img className="rounded-full cursor-pointer h-11" src={ profile?.profilePicture } alt="" />
                                        <form className="flex w-60 -mt-1">
                                            <div className="flex rounded-full h-10 border-1 bg-gray-100 flex-grow justify-between w-full"> 
                                                <input className="pl-4 text-left font-normal flex-grow bg-transparent outline-none input" placeholder="Write a comment..." value={ comment } onChange={ ( e ) => setComment( e.target.value ) } />
                                                <div className="flex items-center ml-2 mr-2">
                                                    <svg className="h-8 w-8 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <svg className="h-8 w-8 -ml-1 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 rounded-full transition duration-300 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                { comment && <svg className="cursor-pointer mt-2 animate__animated animate__fadeIn animate__faster mr-2" width="20px" height="20px" viewBox="0 0 24 24" onClick={ postCommentHandler }><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0080ff" fill-rule="evenodd" stroke="none"></path></svg> }
                                            </div>
                                            <button hidden type="submit" onClick={ postCommentHandler }>Hidden Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        */    
                    }
                </div>
            </ViewCommentsDialog>
        </div>
    );
};