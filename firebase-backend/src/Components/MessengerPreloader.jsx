import React from "react";
import "../Styles/MessengerPreloader.css";

export const MessengerPreloader = () => {
    return (
        <div className="animate__animated animate__fadeIn dark:bg-dark-300 MessengerPreloader">
            <img className="MessengerPreloader__Logo" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="" />
            <p className="MessengerPreloader__Text">from</p>
            <h1 className="MessengerPreloader__Title">JUAN VILLA</h1>
        </div>
    );
};