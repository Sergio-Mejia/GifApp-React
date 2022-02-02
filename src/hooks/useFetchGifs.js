import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    //Primera vez que se use el eseFetch va a estar cargando por defecto
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Hacer la petición http solo una vez
    useEffect(() => {
        getGifs(category)
            .then(images => {

                setTimeout(() => {

                    setState({
                        data: images,
                        loading: false
                    });
                }, 3000);
            })
    }, [category]) //evaluar categoria cuando el efecto cambia

    return state; //{data: [], loading: true}
}