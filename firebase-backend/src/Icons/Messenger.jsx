import React from "react";

export const MessengerIconMobile = () => {
    return (
        <>
            <svg alt="" className="bg-gray-100 dark:hidden dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white flex h-9 icon p-1.5 text-black w-9" viewBox="0 0 28 28">
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z" />
            </svg>
            <svg alt="" className="bg-gray-100 dark:flex dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white hidden h-9 icon p-1.5 text-black w-9" fill="white" viewBox="0 0 28 28">
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z" />
            </svg>
        </>
    );
};

export const MessengerDropdownIcon = ({ handleOpenMessenger, openMessenger, id, idDarkMode }) => {
    return (
        <div className="Navlink relative">
            <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black -left-6 pb-1.5 pl-2.5 pr-2.5 pt-1.5 opacity-0 rounded-lg text-sm text-whiteWhite Tooltip top-12">Messenger</div>
            <svg alt="" className="dark:hidden hidden icon ml:block" fill={ openMessenger ? "#1770E6" : "#000" } height="20" id={ id } onClick={ handleOpenMessenger } viewBox="0 0 28 28" width="20">
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z" />
            </svg>
            <svg alt="" className="hover:bg-opacity-20 hover:bg-white hidden icon ml:dark:block" fill={ openMessenger ? "#1770E6" : "#FFF"  } height="20" id={ idDarkMode } onClick={ handleOpenMessenger } viewBox="0 0 28 28" width="20">
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z" />
            </svg>
        </div>
    );
};