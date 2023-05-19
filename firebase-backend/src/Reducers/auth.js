import { types } from "../Types/types";

export const auth = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.signIn:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName
            }

        case types.signOut:
            return { }            
            
        default:
            return state;
    };
};