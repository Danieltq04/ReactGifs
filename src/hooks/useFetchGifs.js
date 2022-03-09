import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs"


//Creo un hook
export const useFetchGifs = (category)=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
      getGifs(category)
        .then(imgs =>{
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
                
            }, 2000);
        })
    }, [category])//Le pongo efectos a mi custom hook para que ejecute al cambiar la categoría
    
    return state; //{ data: [], loading: true})
}