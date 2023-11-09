import React from 'react'
import Image from 'next/image'


import "./Popular.css"

function Popular() {
  return (
    <div style={{marginLeft:"1rem"}}>
      <div>
        <h1 >Popular</h1>
      </div>
      <div className='pop-comm'>
          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_maasai.png' width={80} height={80} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"14px", fontWeight:"bold"}}>The Maasai</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"14px"}}>1.2k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>
        
          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_khoisan1.png' width={80} height={80} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"14px", fontWeight:"bold"}}>The Khoisan</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"14px"}}>2.5k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>

          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_yoruba.png' width={80} height={80} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"14px", fontWeight:"bold"}}>The Giriama</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"14px"}}>1.6k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>


          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_baganda.png' width={80} height={80} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"14px", fontWeight:"bold"}}>The Baganda</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"14px"}}>1.3k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>
        
        
      </div>
    </div>
  )
}

export default Popular