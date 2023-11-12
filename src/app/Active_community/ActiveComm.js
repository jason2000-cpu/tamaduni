'use client'

import React from 'react'

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

  return (
    <div className='activeComm'>
        <h2 style={{paddingBottom:"1rem"}}>Week's Culture</h2>
        <h3 style={{fontSize:"16px"}}> The { culture }</h3>
        {
            topics.map((topic)=>(
                
                <div className={`topics ${aspect === topic.aspect ? 'active': ''}`}>
                    <BsHash size="19" className='hash'/>
                    <p>
                        <Link className='link'  key={topic.id} href={`/blog?culture=${culture}&aspect=${topic.aspect}`}>{ topic.aspect } </Link>
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default ActiveComm