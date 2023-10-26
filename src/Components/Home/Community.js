import Image from 'next/image';
import React from 'react'

 export default function Community ({ community }) {
    const {name, history, image } = community;
  return (
    <div className='comm'>
        <h1 className='header1'>{name}</h1>
        <p className='hist'>{history}</p> 

        <Image 
            className='img'
            src={image}
            width={300}
            height={300}
        />
    </div>
  )
}
