'use client'

import React from 'react'


import BlogLoader from './BlogLoader'
import BlogPost from './BlogPost'
import './Passage.css'
import useRequestRest from '../../../Hooks/useRequestRest'



function Passage() {
    const { status, info, aspect } = useRequestRest();

    return (
        <div className='passage'>

            {
                status ? <BlogPost  data={info} aspect={aspect} /> : <BlogLoader />
            }
            
        </div>
    )
}

export default Passage