import { types } from "../Types/types";

export const profile = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.setProfile: return { ...action.payload };
        default: return state;
    };
};