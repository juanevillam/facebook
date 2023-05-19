import "../Styles/Stories.css";
import React, { useState } from "react";
import { ViewStory } from "./ViewStory";
import { Avatar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { setUserIsViewingStory } from "../Actions/ui";
import { useDispatch, useSelector } from "react-redux";

export const Story = ({ profile, story, storyId }) => {
    const dispatch = useDispatch();
    const [ openViewStory, setOpenViewStory ] = useState( false );
    const { userIsViewingStory } = useSelector( state => state.story );

    if ( new Date() > new Date( new Date( story?.dateCreated?.toDate() ).getTime() + 60 * 60 * 24 * 1000) ) return null;

    return (
        <div className="flex-grow-0">
            <ViewStory openViewStory={ openViewStory } profile={ profile } setOpenViewStory={ setOpenViewStory } story={ story } storyId={ storyId } />
            { story?.image && userIsViewingStory !== true &&
                <div className="z-30">
                    { story?.image[ story?.image.length - 1 ] === "4" ? 
                        <>  
                            <div className="animate__animated animate__fadeIn animate__faster duration-300 flex hover:scale-105 md:hidden StoryMobile transform transition" onClick={ () => { dispatch( setUserIsViewingStory( true ) ); setOpenViewStory( true ) } }>
                                <img alt="" className="animate__animated animate__fadeIn animate__faster h-9 object-cover rounded-full Story__Avatar w-9 z-10" src={ story?.profilePicture } />
                                <video className="animate__animated animate__fadeIn animate__faster absolute top-0 h-full object-cover rounded-lg w-full" src={ story?.image } />
                                <p className="animate__animated animate__fadeIn animate__faster Story__Title text-sm">{ story?.fullName.split(" ")[0] }</p>
                            </div>
                            <NavLink style={{ backgroundImage: `url(${ story?.image })` }} className="animate__animated animate__fadeIn animate__faster Story hidden md:flex" to={`stories/:${ storyId }`}>
                                <Avatar className="animate__animated animate__fadeIn animate__faster Story__Avatar z-10" src={ story?.profilePicture } />
                                <video className="absolute animate__animated animate__fadeIn animate__faster top-0 h-full object-cover rounded-lg w-full" src={ story?.image } />
                                <h4 className="animate__animated animate__fadeIn animate__faster Story__Title">{ story?.fullName.split(" ")[0] }</h4>
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink style={{ backgroundImage: `url(${ story?.image })` }} className="animate__animated animate__fadeIn animate__faster Story hidden md:flex" to={`stories/:${ storyId }`}>
                                <Avatar className="animate__animated animate__fadeIn animate__faster Story__Avatar" src={ story?.profilePicture } />
                                <h4 className="animate__animated animate__fadeIn animate__faster Story__Title">{ story?.fullName.split(" ")[0] }</h4>
                            </NavLink>
                            <div className="animate__animated animate__fadeIn animate__faster duration-300 flex hover:scale-105 md:hidden StoryMobile transform transition" onClick={ () => { dispatch( setUserIsViewingStory( true ) ); setOpenViewStory( true ) } }>
                                <Avatar className="animate__animated animate__fadeIn animate__faster Story__Avatar z-10" src={ story?.profilePicture } />
                                <img alt="" className="animate__animated animate__fadeIn animate__faster absolute top-0 h-full object-cover rounded-lg w-full" src={ story?.image } />
                                <h4 className="animate__animated animate__fadeIn animate__faster Story__Title">{ story?.fullName.split(" ")[0] }</h4>
                            </div>
                        </>
                    }
                </div>
            }
        </div>
    );
};