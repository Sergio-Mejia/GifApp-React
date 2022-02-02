import { useState } from 'react'


export const useFetchGifs = () =>{
    
    //Primera vez que se use el eseFetch va a estar cargando por defecto
    const [state, setState] = useState({
        data: [],
        loading: true
    });  
    
    return state; //{data: [], loading: true}
}