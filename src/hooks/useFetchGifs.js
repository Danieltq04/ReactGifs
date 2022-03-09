import { useState } from "react"


//Creo un hook
export const useFetchGifs = ()=>{
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    return state; //{ data: [], loading: true})
}