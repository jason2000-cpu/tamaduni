import React from 'react'

import {BsHash} from 'react-icons/bs'

function ActiveComm() {
  return (
    <div className='activeComm'>
        <h3>Maasai</h3>
        <div className="topics active" >
            <div className='hashIcon'>
                <BsHash size="25" className='hash'/>
            </div>
            <p>Rite of Passage</p>
        </div>
        <div className='topics'>
            <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="25" className='hash'/>
            </div>
            <p>Food</p>
        </div>
        <div className='topics'>
            <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="25" className='hash'/>
            </div>
            <p>Originality</p>
        </div>
        <div className='topics'>
             <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="25" className='hash'/>
            </div>
            <p>Music</p>
        </div>
    </div>
  )
}

export default ActiveComm