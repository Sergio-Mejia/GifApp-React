import { useState } from "react";
import AddCategory from "./components/AddCategory";
import React from 'react';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball Z']);

    // const handleAdd = () => {
    //     const nuevo = 'Naruto';
    //     setCategories([...categories, nuevo]);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
