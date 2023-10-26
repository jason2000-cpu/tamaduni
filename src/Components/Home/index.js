import React, { useEffect, useState } from 'react'
import './index.css'
import Communities from './db';
import Community from './Community';

export default function index() {
    const [data, setData ]  = useState([]);

  
   useEffect(()=>{
    setData(Communities);
   })
   console.log(data);

  return (
    <div className='cl'>
       {data.map((community) => (
        <Community community={community}/>
       ))}
    </div>
  )
}
