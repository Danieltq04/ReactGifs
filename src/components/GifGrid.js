import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    /*const [images, setImages] = useState([])
    //useEffect para que no se renderice todo ante algún cambio
    //Se renderiza pero de manera condicional
    useEffect( ()=>{
        //getGifs();
        //Ahora recibe category y retorna una promesa, por lo que necesita un .then
        getGifs(category)
            .then( img => {setImages(img)})
    },[category]) //Si la categoría cambia, vuelve a ejecutar el effect
    */
    //El segundo parámetro es un arreglo de dependencias
    //[] = no tiene dependencias, se ejecuta una única vez
    //encodeURI saco espacios y los reemplaza por %20
    //Los helpers son funciones que hacen un trabajo, pueden recibir información
    /*
    const getGifs = async() =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=q3FECLLySEElFd3y9fvrgQ0VU3RGHxVy`;
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
        setImages(gifs);
    }
    */
    //getGifs();


    const {data:images,loading} = useFetchGifs(category);
    //Recibe data pero le doy nombre images
  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className='card-grid'>

                {
                    //[images.map(img=>{
                    //    return <li key={img.id}>{img.title}</li> 
                    //})]
                    //images.map(({id,title})=>{
                        images.map( img =>(
                        <GifGridItem 
                            key={img.id}
                            {...img
                                //Manda cada una de las propiedades de las
                                //imágenes como una propiedad independiente
                            }
                        />
                    ))
                }
        </div>
    </>
  )
}
