import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';


const GifExpertApp = ({})=>{

    const [categories, setCategories] = useState(["Memes","Reacciones","Marvel"])
    
    
    /*const handleAdd = ()=>{
        setCategories(["Risas",...categories])
    }*/
    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories}/>
        {/*Comunicación entre componentes*/}
        <hr></hr>

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