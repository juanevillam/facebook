import React from 'react';

export const UserCard = ( { userId, profile, userPhotoUrl, friend } ) => {
    return (
        <div class="card w-40 h-80 mb-2 ml-2">
            <img src={ userPhotoUrl } class="card-img-top img-fluid h-40 w-40" alt="..." />
            <div class="card-body p-2">
                <h5 class="card-title">{ profile }</h5>
                <button class="btn btn-primary">Add</button>
            </div>
        </div>
    );
};