import React, { useState, useEffect } from 'react';

export const GifGrid = ({category}) => {

    const [Count, setCount] = useState(0);

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
        
    }

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
            <h3>{Count}</h3>
            <button onClick={()=>setCount(Count + 1)}></button>
        </>
    )
}