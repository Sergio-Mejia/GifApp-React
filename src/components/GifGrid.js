import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifgridItem';

export const GifGrid = ({category}) => {


    const [images, setImages] = useState([]);

    //Hacer petición http solo una vez 
    useEffect( ()=>{
        getGifs(category)
            .then(setImages);
    }, [category])



    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                    {
                        images.map( image => (
                            <GifGridItem 
                                key = {image.id}
                                {...image}  //mandar cada una de las propiedades de la imagen
                            />
                        ))
                    }
            </div>
        </>
    )
}