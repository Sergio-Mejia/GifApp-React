import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifgridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
            //data:images -> renombrar data como images

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>} {/*operador && funciona como if sin evaluar el else */}
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