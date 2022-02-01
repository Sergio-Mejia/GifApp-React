import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifgridItem';

export const GifGrid = ({category}) => {


    const [images, setImages] = useState([]);

    //Hacer petición http solo una vez 
    useEffect( ()=>{
        getGifs();
    }, [])

    //Petición http
    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=9lZhAXbfnU5tLQNaaorv0VEwfRMmkZkr';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }


    return (
        <>
            <h3>{category}</h3>
                {
                    images.map( image => (
                        <GifGridItem 
                            key = {image.id}
                            {...image}  //mandar cada una de las propiedades de la imagen
                        />
                    ))
                }
        </>
    )
}