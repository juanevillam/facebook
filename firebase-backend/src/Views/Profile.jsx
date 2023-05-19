import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { db } from "../Database/firebase";
import { Post } from "../Components/Post";
import { useRouteMatch } from "react-router";
import { AddBio } from "../Components/AddBio";
import { AddDetails } from "../Components/AddDetails";
import { AddHobbies } from "../Components/AddHobbies";
import { CreatePost } from "../Components/CreatePost";
import React, { useEffect, useRef, useState } from "react";
import { handlePlayVideo } from "../Helpers/handlePlayVideo";
import { useCollection } from "react-firebase-hooks/firestore";
import { PauseRounded, PlayArrowRounded } from "@material-ui/icons";
import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";
import { ViewProfilePicture } from "../Components/ViewProfilePicture";
import { handleDeletCoverPhoto } from "../Helpers/handleDeleteCoverPhoto";
import { handleSubmitCoverPhoto } from "../Helpers/handleSubmitCoverPhoto";
import { handleSetImageFromFilePicker } from "../Helpers/handleSetImageFromFilePicker";
import { NoProfilePictureIcon } from "../Icons/NoProfilePicture";
import { PlayIcon } from "../Icons/Play";
import { PauseIcon } from "../Icons/PauseIcon";

export const Profile = ({ myProfile }) => {
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const videoRef = useRef( null );
    const filePicker = useRef( null );
    const [ posts, setPosts ] = useState( [] );
    const [ muted, setMuted ] = useState( false );
    const [ playing, setPlaying ] = useState( false );
    const [ imageFromFilePicker, setImageFromFilePicker ] = useState( false );
    const playVideoHandler = () => handlePlayVideo( playing, videoRef, setPlaying );
    const [ openViewProfilePicture, setOpenViewProfilePicture ] = useState( false );

    const setImageHandler = ( e ) => handleSetImageFromFilePicker( e, setImageFromFilePicker );
    const deleteCoverPhotoHandler = ( e ) => handleDeletCoverPhoto( dispatch, e, profile, profileFather?.id );
    const submitCoverPhotoHandler = ( e ) => handleSubmitCoverPhoto( dispatch, e, imageFromFilePicker, profile, profileFather?.id );
    
    const [ userSnapshot ] = useCollection( db.collection( "users" ).where( "username", "==", url.substring( 2 ) ) );
    const profile = userSnapshot?.docs?.[ 0 ]?.data();
    const profileFather = userSnapshot?.docs?.[ 0 ];

    document.title = `${ profile?.fullName && profile?.fullName } (@${ url.substring( 2 ) })`;

    useEffect( () => {
        let unsubscribePosts = db.collection( "posts" ).where( "username", "==", url.substring( 2 ) ).orderBy( "dateCreated", "desc" ).onSnapshot( snapshot => setPosts( snapshot.docs.map( doc => ({ id: doc.id, post: doc.data() }))));
        
        return () => unsubscribePosts(); 
    }, [ url ]);

    return (
        <>
            { profile ?
                <div className="bg-gray-300 dark:bg-dark-300 duration-300 flex-grow h-max md:bg-smoke-100 md:dark:bg-dark-300 md:overflow-y-auto transition w-screen">
                    <div className="animate__animated animate__fadeIn bg-gray-300 dark:bg-dark-300 duration-300 flex-grow h-max md:bg-transparent md:h-screen transition">
                        <div className="bg-whiteWhite border-b dark:bg-dark-200 dark:border-dark-400 duration-300 h-5/6 transition w-screen z-30">
                            <div className="bg-gray-200 dark:bg-dark-300 duration-300 h-2/3 max-w-4xl mx-auto relative rounded-b-lg transition w-full pb-96">
                                { profile?.id === myProfile?.id &&
                                    <>
                                        { imageFromFilePicker ?
                                            <> 
                                                { imageFromFilePicker[ 13 ] === "4" ? 
                                                    <>
                                                        <div className="absolute flex items-center right-7 space-x-3 top-3">
                                                            <div className="animate__animated animate__fadeIn animate__faster bg-black bg-opacity-80 cursor-pointer hidden hover:scale-110 md:block md: p-1 rounded-full transform transition z-50" onClick={ playVideoHandler }>
                                                                { playing ?
                                                                    <PauseIcon className="animate__animated animate__fadeIn animate__faster h-4 w-4" />
                                                                    :
                                                                    <PlayIcon className="animate__animated animate__fadeIn animate__faster h-4 pl-0.5 w-4" />
                                                                }
                                                            </div>
                                                            <div className="animate__animated animate__fadeIn animate__faster bg-black bg-opacity-80 cursor-pointer hidden hover:scale-110 md:block p-2 rounded-full transform transition z-50" onClick={ () => setMuted( !muted ) }>
                                                                { muted ?
                                                                    <VolumeOffIcon className="cursor-pointer h-4.5 text-ghost-white w-4.5" /> 
                                                                    : 
                                                                    <VolumeUpIcon className="cursor-pointer h-4.5 text-ghost-white w-4.5" />
                                                                }
                                                            </div>
                                                        </div>
                                                        <video alt="" className="absolute cursor-pointer h-full object-contain top-0 w-full" loop={ true } muted={ muted } onClick={ playVideoHandler } ref={ videoRef } src={ imageFromFilePicker } />
                                                    </>
                                                    :
                                                    <img alt="" className="absolute h-full object-cover rounded-b-lg top-0 w-full" src={ imageFromFilePicker } />
                                                }
                                            </>
                                            :
                                            <> 
                                                { profile?.coverPhoto[ profile?.coverPhoto?.length - 1 ] === "4" ? 
                                                    <>
                                                        <div className="absolute flex items-center right-7 space-x-3 top-3">
                                                            <div className="animate__animated animate__fadeIn animate__faster bg-black bg-opacity-80 cursor-pointer hidden hover:scale-110 md:block md: p-2 rounded-full transform transition z-50" onClick={ playVideoHandler }>
                                                                { playing ?
                                                                    <PauseIcon className="animate__animated animate__fadeIn animate__faster h-4 w-4" />
                                                                    :
                                                                    <PlayIcon className="animate__animated animate__fadeIn animate__faster h-4 pl-0.5 w-4" />
                                                                }
                                                            </div>
                                                            <div className="animate__animated animate__fadeIn animate__faster bg-black bg-opacity-80 cursor-pointer hidden hover:scale-110 md:block p-2 rounded-full transform transition z-50" onClick={ () => setMuted( !muted ) }>
                                                                { muted ?
                                                                    <VolumeOffIcon className="cursor-pointer h-4.5 text-ghost-white w-4.5" /> 
                                                                    : 
                                                                    <VolumeUpIcon className="cursor-pointer h-4.5 text-ghost-white w-4.5" />
                                                                }
                                                            </div>
                                                        </div>
                                                        <video alt="" className="absolute cursor-pointer h-full object-contain top-0 w-full" loop={ true } muted={ muted } onClick={ playVideoHandler } ref={ videoRef } src={ profile?.coverPhoto } />
                                                    </>
                                                    :
                                                    <>
                                                        { profile?.coverPhoto && 
                                                            <img alt="" className="absolute h-full object-cover rounded-b-lg top-0 w-full" src={ profile?.coverPhoto } />
                                                        }
                                                    </>
                                                }
                                            </>
                                        }
                                    </>
                                }
                                { profile?.id === myProfile?.id && 
                                    <>
                                        { imageFromFilePicker ? 
                                            <div className="absolute bottom-4 flex items-center right-7 space-x-3 z-30">
                                                <div className="bg-thunder-100 cursor-pointer duration-300 hover:bg-thunder-200 pb-2 pl-3 pr-3 pt-2 rounded-md text-white transition" onClick={ submitCoverPhotoHandler }>
                                                    <h1 className="animate__animated animate__fadeIn font-medium text-sm">Save Changes</h1>
                                                </div>
                                                <div className="bg-opacity-20 bg-gray-300 cursor-pointer duration-300 hover:bg-gray-200 hover:bg-opacity-30 pb-2 pl-4 pr-4 pt-2 rounded-md text-gray-200 transition" onClick={ () => setImageFromFilePicker( null ) }>
                                                    <h1 className="animate__animated animate__fadeIn font-medium text-sm">Cancel</h1>
                                                </div>
                                            </div>
                                            :
                                            <div className="absolute bottom-4 flex items-center right-7 z-30">
                                                <div className="bg-whiteWhite cursor-pointer duration-300 flex hover:bg-gray-100 hover:bg-opacity-90 items-center pb-2 pl-3 pr-3 pt-2 rounded-md space-x-1 transition" onClick={ () => filePicker.current.click() }>
                                                    <i style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3-1pUCLFXK-.png")', backgroundPosition: "0px -1376px", backgroundRepeat: "no-repeat", backgroundSize: "26px 1616px", display: "inline-block", height: 16, width: 16 }} />
                                                    <h1 className="animate__animated animate__fadeIn font-medium text-sm">Add Cover Photo </h1>
                                                </div>
                                                { profile?.coverPhoto &&
                                                    <div className="bg-gray-500 cursor-pointer dark:bg-gray-300 dark:bg-opacity-20 dark:hover:bg-opacity-30 dark:text-gray-200 duration-300 hover:bg-opacity-80 ml-3 pb-2 pl-4 pr-4 pt-2 rounded-md text-white transition" onClick={ deleteCoverPhotoHandler }>
                                                        <h1 className="animate__animated animate__fadeIn font-medium text-sm">Remove Cover Photo</h1>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </>
                                }
                                <div className="absolute -bottom-20 flex items-strech max-w-4xl mx-auto pl-8 pr-8 w-full z-20">
                                    { profile?.profilePicture ?
                                        <motion.img alt="" className="cursor-pointer h-44 object-cover rounded-full w-44" onClick={ () => setOpenViewProfilePicture( true ) } src={ profile?.profilePicture } whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }} />
                                        :
                                        <motion.div className="cursor-pointer h-44 object-cover rounded-full w-44" onClick={ () => setOpenViewProfilePicture( true ) } src={ profile?.profilePicture } whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
                                            <NoProfilePictureIcon className="cursor-pointer h-44 object-cover rounded-full w-44" />
                                        </motion.div>
                                    }
                                    <input hidden type="file" ref={ filePicker } onChange={ setImageHandler } />
                                    <div className="pl-6 pt-30">
                                        <h1 className="dark:text-white duration-300 font-semibold text-3xl text-black transition">{ profile?.fullName }</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:max-w-4xl md:max-w-3xl md:space-x-4 md:mt-4 md:pl-0 md:pr-0 mx-auto pl-3 pr-3 w-full">
                            { url.substring( 2 ) === myProfile?.username ?
                                <div className="bg-white-white dark:bg-dark-200 duration-300 h-full hidden md:block pb-4 pl-5 pr-5 pt-3.5 rounded-lg sticky transition w-7/12">
                                    <h1 className="dark:text-white duration-300 font-bold text-black text-xl transition">Intro</h1>
                                    <div className="pt-3 space-y-5">
                                        <AddBio dispatch={ dispatch } profile={ profile } profileFatherId={ profileFather?.id } />
                                        <AddDetails profile={ profile } />
                                        <AddHobbies profile={ profile } />
                                        <div className="animate__animated animate__fadeIn bg-gray-200 cursor-pointer dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:text-white duration-300 font-medium hover:bg-gray-400 hover:bg-opacity-40 pb-2 pt-2 rounded-lg text-black text-center transition w-full">Add Featured</div>
                                    </div>
                                </div>
                                :
                                <div className="space-y-5 w-7/12">
                                    <div className="bg-white-white dark:bg-dark-200 duration-300 pb-4.5 pl-5 pr-5 pt-3.5 rounded-xl transition w-full">
                                        <h1 className="animate__animated animate__fadeIn font-bold dark:text-white text-black text-xl">Intro</h1>
                                        { profile?.bio &&
                                            <h1 className="animate__animated animate__fadeIn dark:text-white text-center">{ profile?.bio }</h1>
                                        }
                                    </div>
                                    <div className="bg-white-white dark:bg-dark-200 duration-300 pb-3.5 pl-5 pr-5 pt-3.5 rounded-xl transition w-full">
                                        <h1 className="animate__animated animate__fadeIn font-bold dark:text-white text-black text-xl">Photos</h1>
                                    </div>
                                    <div className="bg-white-white dark:bg-dark-200 duration-300 pb-3.5 pl-5 pr-5 pt-3.5 rounded-xl transition w-full">
                                        <h1 className="animate__animated animate__fadeIn font-bold dark:text-white text-black text-xl">Friends</h1>
                                    </div>
                                </div>
                            }        
                            <div className="h-max max-w-lg rounded-xl w-full">
                                { url.substring( 2 ) === myProfile?.username ?
                                    <div className="-mt-2">
                                        <CreatePost profile={ myProfile } />
                                    </div>
                                    :
                                    <div className="bg-white-white dark:bg-dark-200 duration-300 pb-3.5 pl-5 pr-5 pt-3.5 rounded-xl transition w-full">
                                        <h1 className="font-bold dark:text-white text-black text-xl">Posts</h1>
                                    </div>
                                }
                                { posts.map(({ id, post }) => <Post key={ id } post={ post } postId={ id } profile={ myProfile } /> ) }
                                { posts.length === 0 && <h1 className="dark:text-ghost-white duration-300 font-bold mt-4 text-black text-center text-lg transition">No posts available</h1> }
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <ViewProfilePicture openViewProfilePicture={ openViewProfilePicture } profile={ profile } setOpenViewProfilePicture={ setOpenViewProfilePicture } />
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
    );
};