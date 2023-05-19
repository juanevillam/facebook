import { types } from "../Types/types";

const initialState = { 
    loading: false,
    msgError: null
};

export const ui = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiSetError: 
            return {
                ...state,
                msgError: action.payload
            };
     
        case types.uiRemoveError: 
            return {
                ...state,
                msgError: null
            }

        case types.uiStartLoading: 
            return {
                ...state,
                loading: true
            }            
        
        case types.uiFinishLoading: 
            return {
                ...state,
                loading: false
            }            
    
        default:
            return state;
    };
};