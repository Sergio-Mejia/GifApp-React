import { useState } from "react";
import AddCategory from "./components/AddCategory";
import React from 'react';
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['PeaceMaker']);

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
                        return <GifGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
