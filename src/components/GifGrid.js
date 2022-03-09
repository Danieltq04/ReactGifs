import React from 'react'

export const GifGrid = ({category}) => {
    const getGifs = async() =>{
        const url = "https://api.giphy.com/v1/gifs/trending?q=Marvel&limit=10&api_key=q3FECLLySEElFd3y9fvrgQ0VU3RGHxVy";
        const resp = await fetch(url);
        const {data} = await resp.json();//Obtengo la data dentro de esa data
        const gifs = data.map(img =>{
            return { //Traigo nada más la información que necesito
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }//? por las dudas
        })
        
        console.log(gifs)
    }
    getGifs();
  return (
    <>
        <h3>{category}</h3>
    </>
  )
}
