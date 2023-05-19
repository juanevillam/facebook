import { types } from "../Types/types";

export const story = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.setUserIsViewingStory:
            return {
                userIsViewingStory: action.payload,
            }
    
        default:
            return state;
    };
};