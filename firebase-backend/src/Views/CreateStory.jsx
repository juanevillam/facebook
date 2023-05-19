import { NavLink } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Dropdowns } from "../Components/Dropdowns";
import { handleReturn } from "../Helpers/handleReturn";
import { PhotographIcon } from "@heroicons/react/outline";
import { handleSubmitStory } from "../Helpers/handleSubmitStory";
import { XIcon, CameraIcon, CogIcon } from "@heroicons/react/solid";
import { ImageFromFilePickerIsVideo } from "../Components/ImageFromFilePickerIsVideo";
import { handleSetImageFromFilePicker } from "../Helpers/handleSetImageFromFilePicker";

export const CreateStory = ({ profile }) => {
    const filePicker = useRef( null );
    document.title = `Create Story • The Facebook Clone`;
    const [ openCreateStory, setOpenCreateStory ] = useState( false );
    const [ imageFromFilePicker, setImageFromFilePicker ] = useState( null );
    const handleClose = () => { setOpenCreateStory( false ); setImageFromFilePicker( null ) };
    const setImageFromFilePickerHandler = ( e ) => handleSetImageFromFilePicker( e, setImageFromFilePicker );
    const submitStoryHandler = () => handleSubmitStory( imageFromFilePicker, profile, setImageFromFilePicker, setOpenCreateStory );
    
    return (
        <>
            <div className="dark:bg-dark-300 duration-300 hidden md:flex flex-grow scrollbar-hide transition">                        
                <div className="bg-white-white dark:bg-dark-200 duration-300 hidden md:block relative transition w-96">
                    <div className="border-b-2 dark:border-dark-100 flex pb-2 pl-3 pt-2 shadow-sm">
                        <XIcon className="animate__animated animate__fadeIn bg-gray-400 cursor-pointer dark:bg-dark-100 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 duration-300 hover:bg-gray-500 h-10 mr-2 p-2 rounded-full text-white transition w-10" onClick={ handleReturn } />
                        <NavLink to="/feed">
                            <img className="animate__animated animate__fadeIn cursor-pointer h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" alt="" />
                        </NavLink>
                    </div>
                    <div className="animate__animated animate__fadeIn border-b border-white-white dark:border-dark-100 pb-6 pl-3 pt-6 relative">
                        <CogIcon className="absolute dark:text-white dark:hover:bg-gray-100 dark:hover:bg-opacity-20 duration-300 icon right-4 text-black top-4 transition"/>
                        <h1 className="dark:text-white duration-300 font-bold text-black transition text-2xl">Your Story</h1>
                        <div className="flex items-center mt-4">
                            <img alt="" className="h-16 object-cover rounded-full w-16" src={ profile?.profilePicture } />
                            <h1 className="dark:text-white duration-300 font-semibold ml-3 text-black text-lg transition">{ profile?.fullName }</h1>
                        </div>
                    </div>
                    { imageFromFilePicker && 
                        <div className="border-t dark:border-dark-400 pl-3 pr-3 pb-2.5 pt-3 w-full absolute bottom-2 animate__animated animate__fadeIn">
                            <button className="p-2 w-full focus:outline-none bg-blue-600 hover:bg-blue-700 transition duration-300 text-white rounded-lg font-medium" onClick={ submitStoryHandler }>Share to Story</button>
                        </div>
                    }
                </div>
                <div className="animate__animated animate__fadeIn flex max-w-2xl md:h-screen md:mt-0 mt-14 mx-auto items-center justify-center w-full">
                    { openCreateStory ?
                        <div className="animate__animated animate__fadeIn pl-10 w-10/12">
                            <div className="bg-whiteWhite dark:bg-dark-200 duration-300 font-medium h-96 pl-3 pt-3 relative rounded-xl transition w-full">
                                <p className="dark:text-white duration-300 text-black text-xl transition">Preview</p>
                                <XIcon className="absolute animate__animated animate__fadeIn bg-gray-400 cursor-pointer dark:bg-dark-100 dark:hover:bg-gray-100 dark:hover:bg-opacity-20 duration-300 hover:bg-gray-500 h-10 p-2 right-2 rounded-full text-white top-2 transition w-10" onClick={ handleClose } />
                                { imageFromFilePicker ? 
                                    <div>
                                        <div className="animate__animated animate__fadeIn flex flex-col h-96 pb-14 pl-1 pr-4 pt-3">
                                            { imageFromFilePicker[ 13 ] === "4" ? 
                                                <ImageFromFilePickerIsVideo height="h-full" image={ imageFromFilePicker } objectFit="object-cover" svgHeight="h-14 md:h-16" svgWidth="w-10" />
                                                :
                                                <img className="h-52 md:h-64 mt-2 object-contain" src={ imageFromFilePicker } alt="" />
                                            }
                                        </div>
                                    </div>
                                    :
                                    <div className="animate__animated animate__fadeIn dark:hover:bg-opacity-10 h-72 Input__Icon mr-3 mt-8" onClick={ () => filePicker.current.click() }>
                                        <div>
                                            <PhotographIcon className="dark:text-white duration-300 h-28 mx-auto text-black transition w-28 " />
                                            <h1 className="dark:text-white duration-300 font-medium mt-2 text-black text-center transition">Add Photos/Videos</h1>
                                        </div>
                                        <input hidden type="file" ref={ filePicker } onChange={ setImageFromFilePickerHandler } />
                                    </div>
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <div className="pt-36 w-64 h-96 bg-gradient-to-b from-green-400 to-blue-500 rounded-xl cursor-pointer hover:opacity-9 animate__animated animate__fadeIn" onClick={ () => setOpenCreateStory( true ) }>
                                <PhotographIcon className="transform rotate-6 p-2 h-10 mx-auto w-10 bg-white rounded-full text-black mr-2 transition duration-300 shadow-sm"/>
                                <h1 className="text-center text-white font-bold mt-2">Create a Photo Story</h1>
                            </div>
                        </div>
                    }
                </div>    
                <div className="flex h-10 mr-3 mt-2 space-x-2 w-max">
                    <Dropdowns profilePicture={ profile.profilePicture } fullName={ profile.fullName } usedOn="CreateStory" />
                </div>       
            </div>
            <div className="block md:hidden">
                <div className="flex items-center justify-between mt-2 mr-2 ml-2">
                    <XIcon className="h-9 w-9 text-black hover:bg-gray-200 rounded-full transition duration-300 p-1 cursor-pointer" onClick={ handleReturn } />
                    <h1 className="text-xl text-black font-semibold">Create Story</h1>
                    <CogIcon className="h-9 w-9 text-black hover:bg-gray-200 rounded-full transition duration-300 p-1 cursor-pointer" />
                </div>
                <div className="flex p-2 mt-4 ml-2">
                    <div className="w-32 h-40 mr-2 justify-center items-center grid bg-gradient-to-b from-purple-400 to-pink-500 rounded-md cursor-pointer animate__animated animate__fadeIn">
                        <div>
                            <svg className="p-2 h-10 w-10 bg-white rounded-full mx-auto text-black transition duration-300 shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h1 className="text-center mt-2 text-white font-medium">Text</h1>
                        </div>
                    </div>
                    <div className="w-32 h-40 mr-2 justify-center items-center grid bg-gradient-to-b from-blue-400 to-green-500 rounded-md cursor-pointer animate__animated animate__fadeIn">
                        <div>
                            <svg className="p-2 h-10 w-10 bg-white rounded-full mx-auto text-black transition duration-300 shadow-md" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                            <h1 className="text-center mt-2 text-white font-medium">Music</h1>
                        </div>
                    </div>
                    <div className="w-32 h-40 mr-2 justify-center items-center grid bg-gradient-to-b from-red-500 to-yellow-500 rounded-md cursor-pointer animate__animated animate__fadeIn">
                        <div>
                            <svg className="p-2 h-10 w-10 bg-white rounded-full mx-auto text-black transition duration-300 shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="text-center mt-2 text-white font-medium">Selfie</h1>
                        </div>
                    </div>
                </div>
                <CameraIcon className="absolute bottom-6 cursor-pointer right-4 p-2.5 h-14 w-14 hover:bg-gray-200 rounded-full mx-auto text-blue-500 transition duration-300 shadow-lg" />
            </div>
        </>
    );
};