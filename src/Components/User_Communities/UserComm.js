'use client'

import React from 'react'
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import "./UserComm.css"

import { BsPlusCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";


const User_Communities =[
    {
        id: 1,
        name: "User",
        image:"user.png"
    },
    {
        id: 2,
        name: "Maasai",
        image:"maasai.png"
    },
    {
        id: 3,
        name: "Turkana",
        image:"turkana.png"
    },
    {
        id: 4,
        name: "Yoruba",
        image:"yoruba.png"
    },
]

function UserComm({ setCulture }) {
    const router = useRouter();

  return (
    <div className='side'>
        <div className='userComm'>
            {
                User_Communities.map((community)=>(
                    <div key={community.id} className='comm' onClick={()=>{
                        setCulture(community.name)
                        router.push(`/blog?culture=${community.name}`)
                        }}>
                        <Image src={`/image/${community.image}`} alt={community.name} width={40} height={40} className='img' />
                        <p className='user-name'>{community.name}</p>
                    </div>
                ))
            }
        </div>

        <div className='comm-icons'>
            <div className='addComm'>
                <BsPlusCircle size="30" className='add-icon'/>
                <p className='add'>Add </p>
            </div>

            <div className='logout'>
                <FiLogOut size="20" className='logout-icon'/>
                <p className='logout-text'>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default UserComm