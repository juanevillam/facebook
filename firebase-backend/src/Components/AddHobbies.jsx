import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { XIcon } from "@heroicons/react/outline";
import Backdrop from "@material-ui/core/Backdrop";

const Hobbie = ({ hobbie, setHobbiesHandler }) => {
    const [ checked, setChecked ] = useState( false );

    return (
        <div className={`animate__animated animate__fadeIn cursor-pointer border dark:hover:bg-white dark:hover:bg-opacity-10 dark:text-gray-200 duration-300 flex font-medium hover:bg-gray-100 items-center pb-2 pl-2.5 pr-3 pt-2.5 rounded-full space-x-1 text-sm transition w-max ${ checked && "bg-thunder-100 bg-opacity-10 dark:text-thunder-100 text-thunder-100" }`} onClick={ () => { setHobbiesHandler( hobbie?.title ); setChecked( !checked ) } }>
            <span>{ hobbie?.emoji }</span>
            <p>{ hobbie?.title }</p>
        </div>
    );
};

export const AddHobbies = ({ profile }) => {
    const [ hobbies, setHobbies ] = useState( [] );
    const hobbiesSupList = [
        {
            id: 0,
            hobbie: {
                emoji: "🎧",
                title: "Listening to Music"
            }
        },
        {
            id: 1,
            hobbie: {
                emoji: "📖",
                title: "Reading"
            }
        },
        {
            id: 2,
            hobbie: {
                emoji: "⚽",
                title: "Football"
            }
        },
        {
            id: 3,
            hobbie: {
                emoji: "🌍",
                title: "Travelling"
            }
        }
    ];
    const hobbiesMidList = [
        {
            id: 5,
            hobbie: {
                emoji: "📽",
                title: "Watching Films"
            }
        },
        {
            id: 0,
            hobbie: {
                emoji: "🎵",
                title: "Dance"
            }
        },
        {
            id: 1,
            hobbie: {
                emoji: "🎨",
                title: "Art"
            }
        },
        {
            id: 2,
            hobbie: {
                emoji: "🍕",
                title: "Eating"
            }
        }
    ];
    const hobbiesBotList = [
        {
            id: 3,
            hobbie: {
                emoji: "🎮",
                title: "Video Games"
            }
        },
        {
            id: 4,
            hobbie: {
                emoji: "🏀",
                title: "Basketball"
            }
        },
        {
            id: 5,
            hobbie: {
                emoji: "💻",
                title: "Coding"
            }
        }
    ];
    const [ openAddHobbies, setOpenAddHobbies ] = useState( false );

    const setHobbiesHandler = ( hobbie ) => { 
        for ( let i = 0; i <= hobbies.length; i++ ) {
            if ( hobbies[ i ] === hobbie ) {
                return;
            };
        };
        setHobbies( prevItems => [ ...prevItems, hobbie ] );
    };
    console.log( hobbies );

        // const uniqueValuesArr = [...new Set(hobbies)];
// 
        // console.log(uniqueValuesArr); // [23, 45, 32] 🤩
// 
    return (
        <>
            { openAddHobbies &&
                <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className="hidden items-center md:flex justify-center z-10" open={ openAddHobbies } onClose={ () => setOpenAddHobbies( false ) } closeAfterTransition BackdropComponent={ Backdrop } BackdropProps={{ timeout: 500 }}>
                    <Fade in={ setOpenAddHobbies }>
                        <div className="bg-white-white dark:bg-dark-200 max-w-xl outline-none rounded-xl w-full">
                            <div className="bg-pastel-100 flex items-center justify-center relative rounded-t-xl">
                                <i style={{ backgroundColor: "red", backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/KehqXHMiA2J.png")', backgroundPosition: "0px 0px", backgroundRepeat: "no-repeat", backgroundSize: "378px 190px", display: "inline-block", height: 188, width: 374 }} />
                                <XIcon className="absolute animate__animated animate__fadeIn dark:hover:bg-opacity-80 dark:hover:bg-dark-400 duration-200 dark:text-gray-400 flex icon right-3 text-gray-500 top-3 transition" onClick={ () => setOpenAddHobbies( false ) } />
                            </div>
                            <div className="pb-4 pt-3 space-y-1">
                                <h1 className="dark:text-ghost-white duration-300 font-semibold text-black text-center text-xl transition">Add Hobbies</h1>
                                <p className="dark:text-gray-400 text-center text-gray-500 text-xs">What do you love to do? Choose from the popular hobbies below.</p>
                            </div>
                            <hr className="dark:bg-dark-100 bg-gray-400" />
                            <br />
                            <p className="dark:text-gray-400 font-medium text-center text-gray-500 text-sm">RECOMMENDED HOBBIES</p>
                            <br />
                            <div className="space-y-2">
                                <div className="flex items-center mx-auto space-x-2 w-max">
                                    { hobbiesSupList.map(({ id, hobbie }) => <Hobbie hobbie={ hobbie } key={ id } setHobbiesHandler={ setHobbiesHandler } /> ) }
                                </div>
                                <div className="flex items-center mx-auto space-x-2 w-max">
                                    { hobbiesMidList.map(({ id, hobbie }) => <Hobbie hobbie={ hobbie } key={ id } setHobbiesHandler={ setHobbiesHandler } /> ) }
                                </div>
                                <div className="flex items-center mx-auto space-x-2 w-max">
                                    { hobbiesBotList.map(({ id, hobbie }) => <Hobbie hobbie={ hobbie } key={ id } setHobbiesHandler={ setHobbiesHandler } /> ) }
                                </div>
                            </div>
                            <br />
                        </div>
                    </Fade>
                </Modal>
            }
            <div className="bg-gray-200 cursor-pointer dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:text-white duration-300 font-medium hover:bg-gray-400 hover:bg-opacity-40 pb-2 pt-2 rounded-lg text-black text-center transition w-full" onClick={ () => setOpenAddHobbies( true ) }>{ profile?.hobbies ? "Edit" : "Add" } Hobbies</div>
        </>
    );
};