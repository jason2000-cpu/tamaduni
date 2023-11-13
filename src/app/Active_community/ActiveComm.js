'use client'

import React, { useState } from 'react'

import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import "./ActiveComm.css"

import {BsHash} from 'react-icons/bs'
import Link from 'next/link'

const topics = [
    {
        id: 1,
        aspect: "Originality"
    },
    {
        id: 2,
        aspect:"Leadership System"
    },
    {
        id: 2,
        aspect:"Rite of Passage"
    },
    {
        id: 2,
        aspect:"Music"
    }
]



function ActiveComm({ culture }) {
    const searchParam = useSearchParams();

    const aspect = searchParam.get('aspect');
    const [cultureFeat, setCultureFeat] = useState('Maasai');

  return (
    <div className='activeComm'>
        {
            cultureFeat === culture ?
            <h2 style={{paddingBottom:"1rem"}}>Week's Culture</h2> : null
        }
        <h3 style={{fontSize:"16px"}}> The { culture }</h3>
        {
            topics.map((topic)=>(
                
                <div key={topic.id} className={`topics ${aspect === topic.aspect ? 'active': ''}`}>
                    <BsHash size="19" className='hash'/>
                    <p >
                        <Link className='link'   href={`/blog?culture=${culture}&aspect=${topic.aspect}`}>{ topic.aspect } </Link>
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default ActiveComm