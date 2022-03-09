import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(["Marvel"])
    
    
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
                categories.map( category =>(
                    <GifGrid 
                        key = {category}
                        category = {category}
                        />
                    )
                )
            }
        </ol>
        
        </>
    )
}

export default GifExpertApp;