import { types } from "../Types/types";

export const stories = ( state = [], action ) => {
    switch ( action.type ) {
        case types.setStories: return [ ...action.payload ];
        default: return state;
    };
};