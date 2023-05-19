import { types } from "../Types/types";

export const posts = ( state = [], action ) => {
    switch ( action.type ) {
        case types.setPosts: return [ ...action.payload ];
        default: return state;
    };
};