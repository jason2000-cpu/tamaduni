import React from 'react'
import Image from 'next/image';

import { BsPlusCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

function UserComm() {
  return (
    <div className='side'>
        <div className='userComm'>
            <div className='user'>
                <Image src="/image/user.png" alt="user" width={60} height={60} className='img' />
                <p className='user-name'>User</p>
            </div>
            <div>
                <Image src="/image/maasai.png" alt="user" width={60} height={60} className='img' />
                <p className='user-name'>Maasai</p>
            </div>
            <div>
                <Image src="/image/turkana.png" alt="user" width={60} height={60} className='img' />
                <p className='user-name'>Turkana</p>
            </div>
            <div>
                <Image src="/image/yoruba.png" alt="user" width={60} height={60} className='img' />
                <p className='user-name'>Yoruba</p>
            </div>
        </div>
        <div className='addComm'>
            <BsPlusCircle size="40" className='add-icon'/>
            <p className='add'>Add </p>
        </div>

        <div className='logout'>
            <FiLogOut size="40" className='logout-icon'/>
            <p className='logout-text'>Logout</p>
        </div>
    </div>
  )
}

export default UserComm