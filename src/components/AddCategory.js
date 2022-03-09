import React, { useState } from 'react'
import PropTypes from 'prop-types'
//(props), lo desestructura
export const AddCategory = ({setCategories}) => {
    //El input value siempre va a ser el último valor que se ingrese
    //        <h1>{inputValue}</h1>

    const [inputValue, setInputValue] = useState("")
    //Como un string vacío para que no de error por cambios 
    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }
    const handleInputSubmit= (e)=>{
        e.preventDefault();
        console.log("Submit")
        if(inputValue.trim().length>2){
            //no puedo hacer setCategories(["Risas",...categories])
            //porque no tengo categories en este componente, entonces:
            setCategories( cats =>[...cats,inputValue])
            setInputValue("")
        }
        
    }
  return (
    <>
      <form onSubmit={handleInputSubmit}>

      <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
      </form>
        
    
    </>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}