import React from "react";

export const CreatePostInput = ({ fullName, setIsOpenCreatePost, thoughts }) => {
    return (
        <form className="flex flex-1">
            <div className="cursor-pointer bg-gray-100 dark:bg-dark-400 dark:hover:bg-white dark:hover:bg-opacity-10 duration-200 flex-grow focus:outline-none hover:bg-gray-200 h-12 px-3 relative rounded-full transition" onClick={ () => setIsOpenCreatePost( true ) }>
                { thoughts ? 
                    <p className="absolute bottom-3 font-normal dark:text-gray-200 text-black text-left ">{ thoughts }</p>
                    :
                    <p className="absolute bottom-3 dark:text-gray-300 font-normal text-gray-600 text-left">What's on your mind, { fullName?.split(" ")[0] }?</p>
                }
            </div>
        </form>
    );
};