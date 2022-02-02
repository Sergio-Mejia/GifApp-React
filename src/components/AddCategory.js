import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    
    const handelInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){ //Trim para eliminar los espacios
            setCategories(cats => [inputValue, ...cats]); //agregar elemento al arreglo
            setinputValue(''); //dejar la caja de texto vacía 
        }

        // console.log('submit hecho');
        
    }

    return (

        <form action="" onSubmit={handleSubmit}>
            <input
                type='text'
                value={ inputValue }
                onChange={handelInputChange}
            />
        </form>
    );
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
