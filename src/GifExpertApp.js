import React, {useState} from 'react';
import PropTypes from 'prop-types'


const GifExpertApp = ({})=>{
    //const categories = ["Memes","Reacciones","Marvel"];
    const [categories, setCategories] = useState(["Memes","Reacciones","Marvel"])
    const handleAdd = ()=>{
        setCategories(["Risas",...categories])
    }
    return(
        <>
        <h1>GifExpertApp</h1>
        <hr></hr>
        <button onClick={handleAdd}>Agregar</button>
        <ol>
            {
                categories.map( category =>{
                    return <li key={ category }> { category }</li>
                })
            }
        </ol>
        
        </>
    )
}


export default GifExpertApp;