import { rgba } from "polished";
import "../Styles/CreatePost.css";
import "../Styles/Animations.css";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Fade from "@material-ui/core/Fade";
import { NavLink } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { FeelingIcon } from "../Icons/Feeling";
import React, { useState, useRef } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { LiveVideoIcon } from "../Icons/LiveVideo";
import { PhotoVideoIcon } from "../Icons/PhotoVideo";
import { handleSubmitPost } from "../Helpers/handleSubmitPost";
import { handleSetFelling } from "../Helpers/handleSetFelling";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";
import { handleCloseMobile } from "../Helpers/handleCloseMobile";
import { handleOpenFellings } from "../Helpers/handleOpenFellings";
import { handleOpenPhotoVideo } from "../Helpers/handleOpenPhotoVideo";
import { handleSetImageFromFilePicker } from "../Helpers/handleSetImageFromFilePicker";
import { DotsHorizontalIcon, EmojiHappyIcon, PhotographIcon, UserAddIcon, XIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon, ChevronDownIcon, DotsCircleHorizontalIcon, LocationMarkerIcon, PlayIcon, PlusIcon, UsersIcon } from "@heroicons/react/solid";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 5000px;
    height: 5000px;
    background: ${ rgba( "black", 0.4 ) };
    visibility: ${ ( p ) => ( p.openMobile ? "visible" : "hidden" ) };
    opacity: ${ ( p ) => ( p.openMobile ? 1 : 0 ) };
    transition-property: visibility opacity;
    transition-duration: 0.2s;
    z-index: 99999;
`;

export const Dialog = styled.div`
    background-color: white;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    position: fixed;
    transition: transform 0.2s;
    transform: translateY( ${ ( p ) => ( p.openMobile ? 0 : "100%" ) } );
    z-index: 100000;
`;

// () => setOpenCreatePost( false )
export const CreatePostModal = ({ felling, fellingEmoji, filePicker, imageFromFilePicker, imageUrlContainer, openCreatePost, openFellings, playerRef, profile, setFellingHandler, setImageFromFilePicker, setImageFromFilePickerHandler, setImageUrlContainer, setOpenCreatePost, setOpenFellings, setThoughts, submitPostHandler, thoughts }) => {
    return (
        <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className="flex items-center justify-center z-10" open={ openCreatePost } onClose={ () => setOpenCreatePost( false ) } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
            <Fade in={ openCreatePost }>
                <div className="bg-white-white dark:bg-dark-200 p-2.5 m-5 w-100 max-w-lg outline-none rounded-xl">
                    { openFellings ? 
                        <>
                            <div className="flex items-center mb-2 mt-1 w-full">
                                <ArrowLeftIcon className="bouncing duration-200 flex icon  dark:text-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-white text-gray-500 transition" onClick={ () => setOpenFellings( false ) } />
                                <h1 className="font-bold ml-20 mt-1 pl-4 text-center dark:text-white text-xl bouncing">How are you feeling?</h1>
                            </div>
                            <hr className="bg-gray-400" />
                            <div className="h-80 overflow-y-scroll w-full">
                                <div className="mt-1 p-1.5 space-y-1 w-ful">
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "happy" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "happy", "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/kPzjY1SQHxy.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/kPzjY1SQHxy.png" alt="" />
                                            <p className="inline-flex font-medium pl-2 dark:text-white bouncing">happy</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "blessed" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "blessed", "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/RBgas2KX5iq.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/RBgas2KX5iq.png" alt="" />
                                            <p className="inline-flex font-medium pl-2 dark:text-white bouncing">blessed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "motivated" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "motivated", "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/sq3df2SwY1Y.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/sq3df2SwY1Y.png" alt="" />
                                            <p className="inline-flex font-medium pl-2 dark:text-white bouncing">motivated</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "sad" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "sad", "https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/j7jYKhsSsMB.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/j7jYKhsSsMB.png" alt="" />
                                            <p className="inline-flex font-medium pl-2 dark:text-white bouncing">sad</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`dark:hover:bg-dark-400 ${ felling === "in love" && "bg-gray-200 dark:bg-opacity-10" } cursor-pointer duration-300 flex hover:bg-gray-100 hover:text-black items-center p-2 rounded-lg space-x-2 transition w-6/12`} onClick={ () => setFellingHandler( "in love", "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/fmmGvxUMzHO.png" ) }>
                                            <img className="flex icon bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/fmmGvxUMzHO.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">in love</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "excited" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "excited", "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/hMfWzzwKmNb.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/hMfWzzwKmNb.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">excited</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "hungry" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "hungry", "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/xdZ8Zi7BTOF.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/xdZ8Zi7BTOF.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">hungry</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "super" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "super", "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/BRAwpY5K_ym.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/BRAwpY5K_ym.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">super</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "alone" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "alone", "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/teFVbjmiZJ-.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/teFVbjmiZJ-.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">alone</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "crazy" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "crazy", "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yUM_CwwCn1H.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yUM_CwwCn1H.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">crazy</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "grateful" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "grateful", "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3At0_1akHCx.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3At0_1akHCx.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">grateful</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "fantastic" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "fantastic", "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/3ofw6h4V_6t.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/3ofw6h4V_6t.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">fantastic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "silly" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "silly", "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/A0SCWEbC-Db.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/A0SCWEbC-Db.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">silly</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "thoughtful" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "thoughtful", "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/T9aAWCAl885.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/T9aAWCAl885.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">thoughtful</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "relaxed" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "relaxed", "https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/tuUqQnegwDk.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/tuUqQnegwDk.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">relaxed</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "ok" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "ok", "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/xw06YpLxzK_.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/xw06YpLxzK_.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">ok</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "delicious" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "delicious", "https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/_lEyM-5u2Jb.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/_lEyM-5u2Jb.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">delicious</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "exhausted" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "exhausted", "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/UIIk0U7G5Tm.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/UIIk0U7G5Tm.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">exhausted</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center relative w-full">
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "lucky" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "lucky", "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">lucky</p>
                                        </div>
                                        <div className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${ felling === "bored" && "bg-gray-200 dark:bg-opacity-10" } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`} onClick={ () => setFellingHandler( "bored", "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" ) }>
                                            <img className="icon flex bouncing" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" alt="" />
                                            <p className="font-medium inline-flex pl-2 dark:text-white bouncing">bored</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex items-center justify-between mb-2 mt-1">
                                <h1 className="bouncing dark:text-white font-bold mt-1 mx-auto pl-4 text-center text-xl">Create Post</h1>
                                <XIcon className="bouncing duration-200 flex icon dark:text-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-white text-gray-500 transition" onClick={ () => setOpenCreatePost( false ) } />
                            </div>
                            <hr className="dark:block hidden text-gray-400" />
                            <hr className="block dark:hidden text-gray-400" />
                            <div className="flex p-2 pt-3">
                                { profile?.profilePicture ?
                                    <img alt="" className="bouncing cursor-pointer h-12 object-cover rounded-full w-12" src={ profile?.profilePicture } />
                                    :
                                    <NoProfilePictureIcon className="bouncing cursor-pointer h-12 object-cover rounded-full w-12" />
                                }
                                <div className="flex">
                                    { profile?.fullName ?
                                        <p className="bouncing dark:text-white font-semibold ml-3 text-lg">{ profile?.fullName }</p>
                                        :
                                        <p className="bouncing dark:text-white font-semibold ml-3 text-lg">You</p>
                                    }
                                    { felling !== "" && 
                                        <>
                                            <img className="bouncing h-5 ml-2 mr-2 mt-1 w-5" src={ fellingEmoji } alt="" />
                                            <p className="bouncing dark:text-white font-semibold text-lg">{ profile?.fullName ? "is" : "are" } felling { felling }</p>
                                        </>
                                    }
                                </div>
                            </div>
                            <textarea className="bouncing mt-2 outline-none bg-transparent dark:text-white dark:placeholder-gray-300 pb-14 pl-3 pr-3 resize-none text-2xl w-full" placeholder={`What's on your mind${ profile?.fullName ? `, ${ profile?.fullName?.split(" ")[0] }` : "" }?`} rows="1" value={ thoughts } onChange={ ( e ) => setThoughts( e.target.value ) } />
                            { imageUrlContainer && 
                                <>
                                    <div className="animate__animated animate__fadeIn block border dark:hidden mb-3 ml-3 mr-3 relative rounded-xl">
                                        <XIcon className="absolute bg-white border cursor-pointer duration-300 hover:bg-gray-300 h-10 p-2 right-2 rounded-full text-gray-700 top-2 transition w-10" onClick={ () => { setImageUrlContainer( false ); setImageFromFilePicker( null ); } } />
                                        <div className="Input__Icon bg-gray-100 border-none hover:bg-gray-200 mt-0 p-6" onClick={ () => filePicker.current.click() }>
                                            { imageFromFilePicker ?
                                                <>
                                                    { imageFromFilePicker && imageFromFilePicker[ 13 ] === "4" ?
                                                        <ReactPlayer height="60px" playing={ false } url={ imageFromFilePicker } width="60px" />
                                                        :
                                                        <img className="h-24 object-contain" src={ imageFromFilePicker } alt="" />
                                                    }
                                                </>
                                                :
                                                <div>
                                                    <PhotographIcon className="icon ml-12" />
                                                    <h1 className="font-medium mt-1 text-black">Add Photos/Videos</h1>
                                                </div>
                                            }
                                            <input hidden type="file" ref={ filePicker } onChange={ setImageFromFilePickerHandler } />
                                        </div>
                                    </div>
                                    <div className="animate__animated animate__fadeIn dark:block hidden mb-3 ml-3 mr-3 relative rounded-xl">
                                        <XIcon className="absolute cursor-pointer bg-dark-200 text-white hover:bg-dark-300 duration-300 h-10 p-2 right-2 rounded-full top-2 transition w-10" onClick={ () => { setImageUrlContainer( false ); setImageFromFilePicker( null ); } } />
                                        <div className="Input__Icon bg-dark-400 border-none hover:bg-dark-100 mt-0 p-6" onClick={ () => filePicker.current.click() }>
                                            { imageFromFilePicker ?
                                                <>
                                                    { imageFromFilePicker && imageFromFilePicker[ 13 ] === "4" ?
                                                        <ReactPlayer height="60px" playing={ false } url={ imageFromFilePicker } width="60px" />
                                                        :
                                                        <img className="h-24 object-contain" src={ imageFromFilePicker } alt="" />
                                                    }
                                                </>
                                                :
                                                <div>
                                                    <PhotographIcon className="icon text-white ml-12" />
                                                    <h1 className="font-medium mt-1 text-white">Add Photos/Videos</h1>
                                                </div>
                                            }
                                            <input hidden type="file" ref={ filePicker } onChange={ setImageFromFilePickerHandler } />
                                        </div>
                                    </div>
                                </>
                            }
                            <div>
                                <hr className="bg-dark-100 dark:block hidden" />
                                <hr className="bg-gray-400 block dark:hidden" />
                                <div className="flex items-center justify-between ml-2.5 mr-2.5 pb-2 pl-3 pr-2.5 pt-2 rounded-xl">
                                    <h1 className="bouncing font-semibold dark:text-white hidden md:flex text-lg">Add to your Post</h1>
                                    <h1 className="bouncing font-semibold dark:text-white flex md:hidden text-lg">Add</h1>
                                    <div className="flex">
                                        { !imageFromFilePicker ? 
                                            <PhotographIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-green-500 transition w-10" onClick={ () => setImageUrlContainer( true ) } /> 
                                            : 
                                            <PhotographIcon className="bouncing bg-green-100 dark:bg-opacity-10 cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-green-500 transition w-10" onClick={ () => setImageUrlContainer( true ) } />
                                        }
                                        <UserAddIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-blue-500 transition w-10" />
                                        { !felling ? 
                                            <EmojiHappyIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-yellow-500 transition w-10" onClick={ () => setOpenFellings( true ) } /> 
                                            : 
                                            <EmojiHappyIcon className="bouncing bg-yellow-100 dark:bg-opacity-10 cursor-pointer duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-yellow-500 transition w-10" onClick={ () => setOpenFellings( true ) } /> 
                                        }
                                        <LocationMarkerIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-red-500 transition w-10" />
                                        <DotsHorizontalIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-gray-500 transition w-10" />
                                    </div>
                                </div>
                                <hr className="bg-dark-100 dark:block hidden" />
                                <hr className="bg-gray-400 block dark:hidden" />
                            </div>
                            <div className="mb-2 pl-3 pr-3.5 w-full">
                                <button className="block dark:hidden bg-blue-600 duration-300 focus:outline-none font-semibold hover:bg-blue-700 MessageSender__Button mt-3 pb-1.5 pt-1.5 rounded-lg text-center text-white transition w-full" disabled={ !imageFromFilePicker } onClick={ submitPostHandler }>Post</button>
                                <button className="hidden dark:block bg-blue-600 duration-300 focus:outline-none font-semibold hover:bg-blue-700 MessageSender__ButtonDark mt-3 pb-1.5 pt-1.5 rounded-lg text-center text-white transition w-full" disabled={ !imageFromFilePicker } onClick={ submitPostHandler }>Post</button>
                            </div>
                        </>
                    }
                </div>
            </Fade>
        </Modal>
    );
};

export const CreatePost = ({ profile }) => {
    const playerRef = useRef( null );
    const filePicker = useRef( null );
    const [ felling, setFelling ] = useState( "" );
    const [ options, setOptions ] = useState( true );
    const [ playing, setPlaying ] = useState( false );
    const [ thoughts, setThoughts  ] = useState( "" );
    const [ imageUrl, setImageUrl ] = useState( null );
    const [ openMobile, setOpenMobile ] = useState( false );
    const [ fellingEmoji, setFellingEmoji ] = useState( "" );
    const [ openFellings, setOpenFellings ] = useState( false );
    const [ openCreatePost, setOpenCreatePost ] = useState( false );
    const [ imageUrlContainer, setImageUrlContainer ] = useState( null );
    const [ imageFromFilePicker, setImageFromFilePicker ] = useState( null );
    
    const removeImage = () => setImageUrl( null );    
    const handlePlayPause = () => setPlaying( !playing );
    const handleOpenMobile = () => setOpenMobile( true );
    const closeMobileHandler = () => handleCloseMobile( setOpenMobile, setOptions );
    const openFellingsHandler = () => handleOpenFellings( setOpenCreatePost, setOpenFellings );
    const openPhotoVideoHandler = () => handleOpenPhotoVideo( setImageUrlContainer, setOpenCreatePost );
    const setImageFromFilePickerHandler = ( e ) => handleSetImageFromFilePicker( e, setImageFromFilePicker );
    const setFellingHandler = ( fellingProp, fellingEmoji ) => handleSetFelling( felling, fellingProp, fellingEmoji, setFelling, setFellingEmoji, setOpenFellings );
    const submitPostHandler = () => handleSubmitPost( felling, fellingEmoji, imageFromFilePicker, profile, setFelling, setFellingEmoji, setImageFromFilePicker, setOpenCreatePost, setOpenMobile, setThoughts, thoughts );

    return (
        <>  
            <div className="animate__animated animate__fadeIn animate__faster bg-white-white dark:bg-dark-200 duration-300 font-medium hidden max-w-lg mb-3 md:block mt-2 mx-auto rounded-lg shadow-sm text-gray-500 transition">
                <div className="border-b dark:border-dark-100 duration-300 flex items-center ml-3 mr-3 pb-2.5 pt-3 space-x-2 transition">
                    <NavLink to={`/:${ profile?.username }`}>
                        { profile?.profilePicture ?
                            <img className="cursor-pointer h-12 object-cover rounded-full w-12" src={ profile?.profilePicture } alt="" />
                            :
                            <NoProfilePictureIcon className="cursor-pointer h-12 object-cover rounded-full w-12" />    
                        }
                    </NavLink>
                    <form className="flex flex-1">
                        <div className="cursor-pointer bg-gray-100 dark:bg-dark-400 dark:hover:bg-white dark:hover:bg-opacity-10 duration-200 flex-grow focus:outline-none hover:bg-gray-200 h-12 px-3 relative rounded-full transition" onClick={ () => setOpenCreatePost( true ) }>
                            { thoughts ? 
                                <p className="absolute bottom-3 font-normal dark:text-gray-200 text-black text-left ">{ thoughts }</p>
                                :
                                <p className="absolute bottom-3 dark:text-gray-300 font-normal text-gray-600 text-left">What's on your mind{ profile?.fullName && `, ${ profile?.fullName?.split(" ")[0] }` }?</p>
                            }
                        </div>
                    </form>
                    { imageFromFilePicker && imageFromFilePicker[ 13 ] === "4" && 
                        <div className="relative">
                            <PlayIcon className="absolute cursor-pointer h-12 left-1.5 opacity-0 top-2 z-50" onClick={ handlePlayPause } />
                            <ReactPlayer height="50px" loop={ true } playing={ playing } ref={ playerRef } url={ imageFromFilePicker } width="60px" />
                        </div>
                    }
                    { imageFromFilePicker && (
                        <div className="cursor-pointer duration-150 filter flex flex-col hover:brightness-110 hover:scale-105 transform transition" onClick={ () => setImageFromFilePicker( null ) }>
                            <img className="h-10 object-contain rounded-lg" src={ imageFromFilePicker } alt="" />
                        </div>
                    )}
                </div>
                <div className="flex justify-evenly pb-2.5 pl-4 pr-4 pt-2 space-x-2">
                    <div className="dark:hover:bg-opacity-5 Input__Icon rounded-md" onClick={ () => setOpenCreatePost( true ) }>
                        <LiveVideoIcon className="h-6 mr-1" />
                        <p className="dark:text-gray-300 hidden md:flex xl:text-base">Live Video</p>
                        <p className="flex md:hidden">Video</p>
                    </div>
                    <div className={` ${ imageFromFilePicker && "bg-gray-100 dark:bg-opacity-10" } dark:hover:bg-opacity-5 Input__Icon rounded-md`} onClick={ openPhotoVideoHandler }>
                        <PhotoVideoIcon className="h-6 mr-1" />
                        <p className="dark:text-gray-300 hidden md:flex xl:text-base">Photo/Video</p>
                        <p className="flex md:hidden">Photo</p>
                    </div>
                    <div className={` ${ felling && "bg-gray-100 dark:bg-opacity-10" } dark:hover:bg-opacity-5 Input__Icon rounded-md`} onClick={ openFellingsHandler }>
                        <FeelingIcon className="h-6 mr-1" />
                        <p className="dark:text-gray-300 hidden md:flex xl:text-base">Felling/Activity</p>
                        <p className="flex md:hidden">Feeling</p>
                    </div>
                </div>
                <CreatePostModal felling={ felling } fellingEmoji={ fellingEmoji } filePicker={ filePicker } imageFromFilePicker={ imageFromFilePicker } imageUrlContainer={ imageUrlContainer } openCreatePost={ openCreatePost } openFellings={ openFellings } playerRef={ playerRef } profile={ profile } setFellingHandler={ setFellingHandler } setImageFromFilePicker={ setImageFromFilePicker } setImageFromFilePickerHandler={ setImageFromFilePickerHandler } setImageUrlContainer={ setImageUrlContainer } setOpenCreatePost={ setOpenCreatePost } setOpenFellings={ setOpenFellings } setThoughts={ setThoughts } submitPostHandler={ submitPostHandler } thoughts={ thoughts } />
            </div>
            <div className="block bg-white md:hidden">
                <div className="dark:bg-dark-200 font-medium max-w-lg mb-2 mx-auto text-gray-500">
                    <div className="border-b border-gray-200 dark:border-dark-100 flex items-center pb-2.5 pl-3 pr-3 pt-2.5 space-x-2">
                        <NavLink to={`/:${ profile?.username }`}>
                            { profile?.profilePicture ?
                                <img alt="" className="cursor-pointer h-11 rounded-full" src={ profile?.profilePicture } />
                                :
                                <NoProfilePictureIcon className="cursor-pointer h-11 rounded-full w-12" />    
                            }
                        </NavLink>
                        <form className="flex flex-1">
                            <div className="cursor-pointer border-1 border-gray-300 dark:border-dark-100 dark:hover:bg-opacity-10 dark:placeholder-gray-200 dark:text-gray-200 duration-200 flex-grow focus:outline-none hover:bg-gray-100 h-10 relative rounded-full transition" onClick={ handleOpenMobile }>
                                { !thoughts ? 
                                    <p className="absolute bottom-1.5 dark:text-gray-200 font-normal left-5 text-left text-gray-600">What's on your mind?</p>
                                    :
                                    <p className="absolute bottom-1.5 dark:text-gray-200 font-normal left-5 text-left text-gray-600">{ thoughts }</p>
                                }
                            </div>
                            <button hidden type="submit" onClick={ submitPostHandler }>Hidden Submit</button>
                        </form>
                            { imageUrl && (
                                <div className="cursor-pointer duration-150 filter flex flex-col hover:brightness-110  hover:scale-105 transition transform" onClick={ removeImage }>
                                    <img className="h-10 object-contain rounded-lg" src={ imageUrl } alt="" />
                                </div>
                            )}
                    </div>
                    <div className="flex justify-evenly mt-2.5 pb-2.5 pl-2 pr-2">
                        <div className="border-gray-200 border-r dark:border-dark-100 dark:hover:bg-opacity-10 h-7 Input__Icon rounded-none">
                            <LiveVideoIcon className="h-5 mr-1" />
                            <p className="dark:text-gray-200 text-gray-600 text-sm">Live</p>
                        </div>
                        <div className="border-gray-200 border-r dark:border-dark-100 dark:hover:bg-opacity-10 h-7 Input__Icon rounded-none" onClick={ () => { setOpenMobile( true ); filePicker.current.click() } }>
                            <PhotoVideoIcon className="h-5 mr-1" />
                            <p className="dark:text-gray-200 text-gray-600 text-sm">Photo</p>
                            <input hidden type="file" ref={ filePicker } onChange={ imageFromFilePicker } />
                        </div>
                        <div className="dark:hover:bg-opacity-10 h-7 Input__Icon rounded-none" onClick={ () => { setOpenMobile( true ); setOpenFellings( true ) } }>
                            <FeelingIcon className="h-5 mr-1" />
                            <p className="dark:text-gray-200 text-gray-600 text-sm">Feeling</p>
                        </div>
                    </div>                    
                </div>
                <Overlay openMobile={ openMobile } />
                <Dialog openMobile={ openMobile }>
                    { openFellings ?
                        <>
                            <div className="border-b border-gray-300 dark:bg-dark-200 dark:border-dark-100 flex items-center justify-between pb-2">
                                <div className="flex items-center mt-2 ml-1.5 space-x-2">
                                    <ArrowLeftIcon className="animate__animated animate__fadeIn cursor-pointer dark:hover:bg-dark-100 dark:text-white duration-300 h-9 p-1.5 rounded-full text-black transition w-9" onClick={ () => setOpenFellings( false ) } />
                                    <h1 className="animate__animated animate__fadeIn dark:text-white font-normal text-black text-xl">How Are You Felling?</h1>
                                </div>
                            </div>
                            <>
                                <div className="dark:bg-dark-200 h-screen overflow-y-auto">
                                    { felling &&
                                        <div className="bg-white flex items-center justify-between p-2 sticky w-full">
                                            <div className="flex items-center">
                                                <img className="animate__animated animate__fadeIn h-8 w-8" src={ fellingEmoji } alt="" />
                                                <p className="font-medium inline-flex pl-2 text-black">Felling { felling }</p>
                                            </div>
                                            <XIcon className="cursor-pointer h-7 text-black w-7" onClick={ () => setFelling( "" ) } />
                                        </div>
                                    }
                                    <div className="border-b-2 dark:border-dark-100 flex items-center relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "happy" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/kPzjY1SQHxy.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/kPzjY1SQHxy.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">happy</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "blessed" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/RBgas2KX5iq.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/RBgas2KX5iq.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">blessed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "motivated" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/sq3df2SwY1Y.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/sq3df2SwY1Y.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">motivated</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "sad" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/j7jYKhsSsMB.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/j7jYKhsSsMB.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">sad</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "in love" ); setOpenFellings( false); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/fmmGvxUMzHO.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/fmmGvxUMzHO.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">in love</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "excited" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/hMfWzzwKmNb.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/hMfWzzwKmNb.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">excited</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "hungry" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/xdZ8Zi7BTOF.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/xdZ8Zi7BTOF.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">hungry</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "super" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/BRAwpY5K_ym.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/BRAwpY5K_ym.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">super</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "alone" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/teFVbjmiZJ-.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/teFVbjmiZJ-.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">alone</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "crazy" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yUM_CwwCn1H.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yUM_CwwCn1H.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">crazy</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "grateful" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3At0_1akHCx.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3At0_1akHCx.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">grateful</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "fantastic" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/3ofw6h4V_6t.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/3ofw6h4V_6t.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">fantastic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "silly" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/A0SCWEbC-Db.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/A0SCWEbC-Db.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">silly</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "thoughtful" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/T9aAWCAl885.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/T9aAWCAl885.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">thoughtful</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "relaxed" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/tuUqQnegwDk.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/tuUqQnegwDk.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">relaxed</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "ok" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/xw06YpLxzK_.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/xw06YpLxzK_.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">ok</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "delicious" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/_lEyM-5u2Jb.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/_lEyM-5u2Jb.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">delicious</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "exhausted" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/UIIk0U7G5Tm.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/UIIk0U7G5Tm.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">exhausted</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "lucky" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">lucky</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "bored" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">bored</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "lucky" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">lucky</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "bored" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">bored</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "lucky" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">lucky</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "bored" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">bored</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-2 dark:border-dark-100 relative w-full">
                                        <div className="border-r-2 cursor-pointer dark:border-dark-100 dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "lucky" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">lucky</p>
                                        </div>
                                        <div className="cursor-pointer dark:hover:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center p-2 space-x-2 text-black transition w-6/12" onClick={ () => { setFelling( "bored" ); setOpenFellings( false ); setFellingEmoji( "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" ) } }>
                                            <img className="animate__animated animate__fadeIn h-8 w-8" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png" alt="" />
                                            <p className="animate__animated animate__fadeIn font-medium dark:text-white inline-flex pl-2">bored</p>
                                        </div>
                                    </div>
                                    <br /><br />
                                </div>
                            </>
                        </>
                        :
                        <div className="dark:bg-dark-200 h-screen">
                            <div className="border-b border-gray-300 dark:bg-dark-200 dark:border-dark-100 flex items-center justify-between pb-2">
                                <div className="flex items-center mt-2 ml-1.5 space-x-2">
                                    <ArrowLeftIcon className="animate__animated animate__fadeIn cursor-pointer dark:hover:bg-dark-100 dark:text-white duration-300 h-9 p-1.5 rounded-full text-black transition w-9" onClick={ closeMobileHandler } />
                                    <h1 className="animate__animated animate__fadeIn dark:text-white font-normal text-black text-xl">Create Post</h1>
                                </div>
                                <button className="animate__animated animate__fadeIn bg-blue-600 duration-300 focus:outline-none font-semibold MessageSender__Button mr-2 mt-2 pb-2 pl-4 pt-2 pr-4 rounded-lg text-center text-white transition" onClick={ submitPostHandler }>POST</button>
                            </div>
                            <div className="dark:bg-dark-200 flex p-2.5 space-x-3 w-full">
                                <img className="animate__animated animate__fadeIn h-14 rounded-full" src={ profile?.profilePicture } alt="" />
                                <div>
                                    <div className="flex">
                                        <h1 className="animate__animated animate__fadeIn dark:text-white font-semibold text-black text-md">You</h1>
                                        { felling !== "" && 
                                            <div className="flex -mt-px">
                                                <img className="animate__animated animate__fadeIn h-5 ml-2 mr-2 -mt-px w-5" src={ fellingEmoji } alt="" />
                                                <p className="animate__animated animate__fadeIn dark:text-white font-normal -mt-0.5 text-black text-md">are felling <strong>{ felling }</strong></p>
                                            </div>
                                        }
                                    </div>
                                    <div className="flex mt-1 space-x-2">
                                        <button className="border border-gray-900 cursor-pointer dark:text-gray-300 flex font-semibold pb-1 pl-2 pr-2 pt-1.5 rounded-lg text-gray-500 text-xs">
                                            <UsersIcon className="animate__animated animate__fadeIn dark:text-gray-300 h-4 mr-1 -mt-px text-gray-500 w-4" />
                                            <p className="animate__animated animate__fadeIn">Friends</p>
                                            <ChevronDownIcon className="animate__animated animate__fadeIn dark:text-gray-300 h-4 ml-1 text-gray-500 w-4" />
                                        </button>
                                        <button className="border border-gray-900 cursor-pointer dark:text-gray-300 flex font-semibold pb-1 pl-2 pr-2 pt-1.5 rounded-lg text-gray-500 text-xs">
                                            <PlusIcon className="animate__animated animate__fadeIn dark:text-gray-300 h-4 mr-1 -mt-px text-gray-500 w-4" />
                                            <p className="animate__animated animate__fadeIn">Album</p>
                                            <ChevronDownIcon className="animate__animated animate__fadeIn dark:text-gray-300 h-4 ml-1 text-gray-500 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <textarea className="dark:bg-dark-200 dark:text-white dark:placeholder-gray-300 font-light outline-none pb-1 pl-2.5 pr-2.5 pt-2.5 resize-none text-black text-xl w-11/12" placeholder="What's on your mind?" rows="1" value={ thoughts } onChange={ ( e ) => setThoughts( e.target.value ) } onFocus={ () => setOptions( false ) } />
                            { imageFromFilePicker &&
                                	<div className="relative">
                                	    <img className="animate__animated animate__fadeIn h-max object-contain relative w-full" src={ imageFromFilePicker } alt="" />
                                	    <XIcon className="absolute animate__animated animate__fadeIn cursor-pointer h-10 right-5 text-white top-4 w-10" onClick={ () => setImageFromFilePicker( null ) } />
                                        <br /><br /><br /><br /><br />
                                	</div>
                            }
                            { options ?
                                <div className="absolute animate__animated animate__fadeIn bg-white bottom-0 left-0 w-full">
                                    <button className="border-b border-t dark:bg-dark-200 dark:border-dark-100 dark:hover:bg-opacity-90 dark:text-white duration-300 flex font-normal hover:bg-gray-200 items-center pb-2.5 pt-2.5 text-black text-lg transition w-full">
                                        <LiveVideoIcon className="animate__animated animate__fadeIn h-6 mr-2.5 ml-2" />
                                        <p className="animate__animated animate__fadeIn">Live Video</p>
                                    </button> 
                                    <button className={`${ imageFromFilePicker && "bg-green-50 dark:bg-opacity-90" } border-b dark:bg-dark-200 dark:border-dark-100 dark:hover:bg-opacity-90 dark:text-white duration-300 flex font-normal hover:bg-gray-200 items-center pb-2.5 pt-2.5 text-black text-lg transition w-full`} onClick={ () => filePicker.current.click() }>
                                        <PhotoVideoIcon className="animate__animated animate__fadeIn h-6 mr-2.5 ml-2" />
                                        <p className="animate__animated animate__fadeIn">Photo/Video</p>
                                    </button>
                                    <input hidden type="file" ref={ filePicker } onChange={ setImageFromFilePickerHandler } />
                                    <button className={`${ felling && "bg-yellow-50 dark:bg-opacity-90" } border-b  dark:bg-dark-200 dark:border-dark-100 dark:hover:bg-opacity-90 dark:text-white duration-300 flex font-normal hover:bg-gray-200 items-center pb-2.5 pt-2.5 text-black text-lg transition w-full`} onClick={ () => setOpenFellings( true ) }>
                                        <FeelingIcon className="animate__animated animate__fadeIn h-6 mr-2.5 ml-2" />
                                        <p className="animate__animated animate__fadeIn">Felling/Activity</p>
                                    </button>
                                </div>
                                :
                                <>
                                    <div className="absolute bg-white border-t bottom-0 dark:bg-dark-200 dark:border-dark-100 left-0 w-full z-50">
                                        <div className="pb-0.5 pt-1 dark:bg-dark-200 w-full">
                                            <div className="animate__animated animate__fadeIn flex justify-evenly pb-1 w-full">
                                                <div className={`${ imageFromFilePicker && "bg-green-100 dark:bg-dark-100" } cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-100 ml-2 mr-2.5 p-2 rounded-full transition`} onClick={ () => filePicker.current.click() }>
                                                    <PhotoVideoIcon className="h-7 w-7" />
                                                </div>
                                                <input hidden type="file" ref={ filePicker } onChange={ setImageFromFilePickerHandler } />
                                                <div className={`${ imageFromFilePicker && "bg-green-100 dark:bg-dark-100" } cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-100 ml-2 mr-2.5 p-2 rounded-full transition`}>
                                                    <LiveVideoIcon className="h-7 w-7" />
                                                </div>
                                                <div className={`${ felling && "bg-yellow-100 dark:bg-dark-100" } cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-100 ml-2 mr-2.5 p-2 rounded-full transition`} onClick={ () => setOpenFellings( true ) }>
                                                    <FeelingIcon className="h-7 w-7" />
                                                </div>
                                                <DotsCircleHorizontalIcon className={`cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-100 h-11 ml-2 mr-2.5 p-1 rounded-full text-gray-500 dark:text-gray-400 transition w-11`}  onClick={ () => setOptions( true ) }  />                          
                                            </div> 
                                        </div>
                                    </div>
                                </>
                            }
                        </div> 
                    }
                </Dialog>
            </div>
        </>
    );
};