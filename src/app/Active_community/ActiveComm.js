import React from 'react'

import "./ActiveComm.css"

import {BsHash} from 'react-icons/bs'

function ActiveComm() {
  return (
    <div className='activeComm'>
        <h2 style={{paddingBottom:"1rem"}}>Week's Culture</h2>
        <h3 style={{fontSize:"16px"}}> The Maasai</h3>
        <div className="topics active" >
            <div className='hashIcon'>
                <BsHash size="19" className='hash'/>
            </div>
            <p>Rite of Passage</p>
        </div>
        <div className='topics'>
            <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="19" className='hash'/>
            </div>
            <p>Food</p>
        </div>
        <div className='topics'>
            <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="19" className='hash'/>
            </div>
            <p>Originality</p>
        </div>
        <div className='topics'>
            <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="19" className='hash'/>
            </div>
            <p>Leadership System</p>
        </div>
        <div className='topics'>
             <div style={{display:"flex", alignItems:"center"}}>
                <BsHash size="19" className='hash'/>
            </div>
            <p>Music</p>
        </div>
    </div>
  )
}

export default ActiveComm