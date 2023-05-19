import React from "react";
import { ViewGridIcon } from '@heroicons/react/solid'

export const MenuDropdownIcon = ({ handleOpenMenu, id }) => {
    return (
        <div className="Navlink relative">
            <div className="absolute bg-gray-800 dark:bg-gray-100 dark:text-black -left-2 pb-1.5 pl-2.5 pr-2.5 pt-1.5 opacity-0 rounded-lg text-sm text-whiteWhite Tooltip top-12">Menu</div>
            <ViewGridIcon className="dark:bg-dark-100 dark:hover:bg-opacity-20 dark:hover:bg-white dark:text-white icon text-black" id={ id } onClick={ handleOpenMenu } />
        </div>
    );
};

export const MenuIcon = () => {
    return (
        <>
            <svg className="animate__faster Header__Icon mt-1 text-gray-400" height="38" viewBox="0 0 28 28" width="38" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.2 } d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="animate__faster Header__IconBold  mt-1 text-thunder-200" height="38" viewBox="0 0 28 28" width="38" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 1.3 } d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </>
    );
};