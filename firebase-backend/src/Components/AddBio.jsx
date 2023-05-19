import React, { useState } from "react";
import { handleSubmitBio } from "../Helpers/handleSubmitBio";

export const AddBio = ({ dispatch, profile, profileFatherId }) => {
    const [ bio, setBio ] = useState( profile?.bio );
    const [ openAddBio, setOpenAddBio ] = useState( false );
    const submitBioHandler = ( e ) => handleSubmitBio( bio, dispatch, e, setBio, profile, profileFatherId );

    return (
        <>
            { openAddBio ?
                <div>
                    <textarea className="animate__animated animate__fadeIn bg-gray-100 dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:placeholder-gray-400 dark:text-white duration-300 focus:border-transparent focus:outline-none focus:ring-thunder-200 focus:ring-2 hover:bg-gray-200 pb-2 placeholder-gray-500 pl-3 pr-3 pt-2 resize-none rounded-lg text-center transition w-full" maxLength="101" onChange={ ( e ) => setBio( e.target.value ) } placeholder="Describe who you are" rows="3" value={ bio } />
                    <p className="animate__animated animate__fadeIn dark:text-gray-400 pb-2 text-gray-500 text-right text-xs">{ 101 - bio?.length } characters remaining</p>
                    <div className="flex items-center ml-auto space-x-2 w-max">
                        <div className="animate__animated animate__fadeIn cursor-pointer bg-gray-200 dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:text-gray-300 duration-300 font-medium hover:bg-gray-300 pb-2 pl-3 pr-3 pt-2 rounded-lg transition w-max" onClick={ () => setOpenAddBio( false ) }>Cancel</div>
                        { bio.replace(/ /g,'').length === 0 ?
                            <div className="animate__animated animate__fadeIn bg-gray-400 bg-opacity-20 cursor-not-allowed dark:text-gray-500 duration-300 font-medium pb-2 pl-3 pr-3 pt-2 rounded-lg text-gray-300 transition w-max">Save</div>
                            :
                            <div className="bg-thunder-200 cursor-pointer duration-300 font-medium hover:bg-thunder-100 pb-2 pl-3 pr-3 pt-2 rounded-lg text-white transition w-max" onClick={ submitBioHandler }>Save</div>
                        }
                    </div>
                </div>
                :
                <>  
                    { profile?.bio &&
                        <h1 className="animate__animated animate__fadeIn dark:text-white text-center">{ profile?.bio }</h1>
                    }
                    <div className="bg-gray-200 cursor-pointer dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:text-white duration-300 font-medium hover:bg-gray-400 hover:bg-opacity-40 pb-2 pt-2 rounded-lg text-black text-center transition w-full" onClick={ () => setOpenAddBio( true ) }>{ profile?.bio ? "Edit" : "Add" } Bio</div>
                </>
            }
        </>
    );
};