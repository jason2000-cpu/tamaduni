'use client'

import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import BlogLoader from './BlogLoader'
import BlogPost from './BlogPost'

import './Passage.css'



function Passage() {
    const [status, setStatus] = useState(false);
    const searchParams = useSearchParams();
    const [data, setData] = useState(null);

    const culture = searchParams.get('culture');
    const aspect = searchParams.get('aspect');
    const params = `?culture=${culture}&aspect=${aspect}`
    let url = "http://localhost:3000/api"; 

    // useEffect(() => {
    //     setTimeout(() => {
    //         setStatus(true)
    //     }, 3000);
    
    // })


    useEffect(() => {
        try {
             fetch(`${url}${params}`)
            .then(res =>{
                console.log(res)
                res.json()
            })
            .then(data =>{
                setData(JSON.parse(data));
                setStatus(true);
                console.log("DATA ::::",JSON.parse(data));   
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } catch (error) {
            console.error(error);
        }
        

    console.log(aspect)
}, [culture]);

  return (
    <div className='passage'>

        {
            status ? <BlogPost  data={data} aspect={aspect} /> : <BlogLoader />
        }
        
    </div>
  )
}

export default Passage