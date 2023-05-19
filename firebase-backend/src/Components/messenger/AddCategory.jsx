import PropTypes from 'prop-types';
import React, { useState } from 'react'

export const AddCategory = ( { setCategories, category } ) => {
    const [ inputValue, setInputValue ] = useState( "" );
    const handleInputChange = ( e ) => setInputValue( e.target.value );

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        };
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input className="ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink" placeholder={ `Search ${ category }` } type="text" value={ inputValue } onChange={ handleInputChange } />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};