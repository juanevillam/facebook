import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export const AccountDropdownIcon = ({ handleOpenAccount, id }) => {
    return (
        <div className="Navlink relative">
            <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black -left-8 pb-1.5 pl-2.5 pr-2.5 pt-1.5 opacity-0 rounded-lg text-sm text-whiteWhite Tooltip top-12">Account</div>
            <ChevronDownIcon className="dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white icon md:flex text-black" onClick={ handleOpenAccount } id={ id } />
        </div>  
    );
};