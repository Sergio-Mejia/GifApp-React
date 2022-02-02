import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifgridItem';

export const GifGrid = ({category}) => {


    // const [images, setImages] = useState([]);
    const {loading} = useFetchGifs();
 ;
    
    // //Hacer petición http solo una vez 
    // useEffect( ()=>{
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])



    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando...' : 'Data cargada'}
            {/* <div className='card-grid'>
                    {
                        images.map( image => (
                            <GifGridItem 
                                key = {image.id}
                                {...image}  //mandar cada una de las propiedades de la imagen
                            />
                        ))
                    }
            </div> */}
        </>
    )
}