import React, { useState } from "react";

export const AddDetails = ({ profile }) => {
    const [ openAddDetails, setOpenAddDetails ] = useState( false );

    return (
        <>
            { openAddDetails ?
                <div>
                </div>
                :
                <>  
                    <div className="bg-gray-200 cursor-pointer dark:bg-dark-400 dark:hover:bg-gray-400 dark:hover:bg-opacity-20 dark:text-white duration-300 font-medium hover:bg-gray-400 hover:bg-opacity-40 pb-2 pt-2 rounded-lg text-black text-center transition w-full" onClick={ () => setOpenAddDetails( true ) }>{ profile?.details ? "Edit" : "Add" } Details</div>
                </>
            }
        </>
    );
};