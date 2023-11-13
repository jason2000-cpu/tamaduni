'use client'

import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import BlogLoader from './BlogLoader'
import BlogPost from './BlogPost'

import './Passage.css'

function Passage() {
    const [status, setStatus] = useState(false);
    const searchParams = useSearchParams();

    const culture = searchParams.get('culture');
    const aspect = searchParams.get('aspect');


    useEffect(() => {
        setTimeout(() => {
            setStatus(true)
        }, 3000);
    
    })

  return (
    <div className='passage'>

        {
            status ? <BlogPost  culture={culture} aspect={aspect}/> : <BlogLoader />
        }
        
    </div>
  )
}

export default Passage