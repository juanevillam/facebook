import React from "react";
import "../Styles/FacebookPreloader.css";

export const FacebookPreloader = () => {
    return ( 
        <div className="animate__animated animate__fadeIn dark:bg-dark-300 FacebookPreloader">
            <img className="FacebookPreloader__Logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg" alt="" />
            <p className="FacebookPreloader__Text">from</p>
            <h1 className="FacebookPreloader__Title">JUAN VILLA</h1>
        </div>
    );
};