'use client'

import { useState } from 'react';

import UserComm from '@/Components/User_Communities/UserComm';
import ActiveComm from '@/app/Active_community/ActiveComm';


export default function Template({ children }){
    const [culture, setCulture] = useState('Maasai')
    return (
        < div className='main'>
            <UserComm setCulture={setCulture} />
            <ActiveComm  culture={culture}/>
            {children}
        </div>
    )
}