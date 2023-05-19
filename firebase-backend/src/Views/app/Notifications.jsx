import React from 'react';
import { Sponsored } from '../../components/widgets/Sponsored.jsx';

export const Notifications = () => {
    return (
        <>
            <div className="flex scrollbar-hide">
                    <div className="dark:bg-black flex-grow h-screen pb-44 pt-3 md:pl-8 overflow-y-auto scrollbar-hide">
                        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl animate__animated animate__fadeIn">                            
                           <h1>Notifications</h1>
                        </div>
                    </div>
                <Sponsored />
            </div>
        </>
    );
};