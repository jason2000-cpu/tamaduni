import React from 'react'

import "./ActiveComm.css"

import {BsHash} from 'react-icons/bs'

function ActiveComm() {
  return (
    <div className='activeComm'>
        <h1 style={{paddingBottom:"1rem"}}>Culture of The Week</h1>
        <h3 style={{fontSize:"20px"}}> The Maasai</h3>
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
            <p>Leadership System</p>
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