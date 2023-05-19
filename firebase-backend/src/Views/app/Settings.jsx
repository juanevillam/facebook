import React from 'react';
import { ArrowLeftIcon, SearchIcon } from '@heroicons/react/solid';
import { PageNotAvailable } from '../../components/shared/PageNotAvailable.jsx';

export const Settings = () => {
    const handleReturn = () => window.history.back();

    return (
        <>
            <div className="hidden md:flex scrollbar-hide">
                <PageNotAvailable />
            </div>
            <div className="block md:hidden">
                <div className="dark:bg-dark-300 flex-grow h-screen pb-28 md:pl-8 overflow-y-auto scrollbar-hide">
                    <div className="flex bg-white z-50 justify-between sticky top-0 items-center pt-3.5 pb-3.5 pl-1.5 pr-1.5 border-b-2">
                        <div className="flex items-center ml-1 space-x-2">
                            <ArrowLeftIcon className="cursor-pointer dark:text-white h-7 text-black w-7" onClick={ handleReturn } />
                            <h1 className="dark:text-white font-normal text-black text-xl">Settings & Privacy</h1>
                        </div>
                        <SearchIcon className="cursor-pointer dark:text-white h-7 text-black w-7" />
                    </div>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                    <p>dsadsa</p>
                </div>
            </div>
        </>
    );
};
