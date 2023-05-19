import React from "react";

export const ShareButton = () => {
    return (
        <div className="flex w-1/3 text-xs items-center justify-center pt-2.5 pb-2.5 text-gray-700 dark:text-gray-400 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 transition duration-300">
            <svg className="h-6 w-6 mr-1.5 text-gray-700 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.5 } d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
        </div>
    )
};