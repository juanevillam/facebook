import React from "react";

export const CloseIcon = ({ className, strokeWidth, onClick }) => {
    return (
        <svg className={ className } fill="none" onClick={ onClick } stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ strokeWidth } d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};
