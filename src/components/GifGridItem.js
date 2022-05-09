import React from 'react'

export const GifGridItem = ({title,url}) => {
    //console.log({id,title,url})
    //en react es classname
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt={title}/>
        <div className="text-item">
          <p>{title}</p>
        </div>

        
    </div>
  )
}
