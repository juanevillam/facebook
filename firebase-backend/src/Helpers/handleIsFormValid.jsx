import validator from "validator";

export const handleIsFormValid = ( email, name, password, dispatch, setError, removeError ) => {
    if ( email && !validator.isEmail( email ) ) {
        dispatch( setError( "Email is not valid." ) );
        return false;

    } else if ( name && name?.trim().length < 2 ){
        dispatch( setError( "Name required." ) );
        return false;

    } else if ( password && password.trim().length < 6 ){
        dispatch( setError( "Password must be at least 8 characters." ) );
        return false;

    };
    
    dispatch( removeError() );  
    return true;
};