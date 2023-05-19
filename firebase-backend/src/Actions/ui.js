import { types } from "../Types/types";

export const removeError = () => ( { type: types.uiRemoveError } );
export const startLoading = () => ( { type: types.uiStartLoading } );
export const finishLoading = () => ( { type: types.uiFinishLoading } );
export const setError = ( err ) => ( { type: types.uiSetError, payload: err } );
export const setUserIsViewingStory = ( hidden ) => ({ type: types.setUserIsViewingStory, payload: hidden });