import React from 'react'
import Image from 'next/image'



function Popular() {
  return (
    <div style={{width:"100%", marginLeft:"2.5rem"}}>
      <div>
        <h1 style={{width:"100%"}}>Popular</h1>
      </div>
      <div className='pop-comm'>
          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_maasai.png' width={150} height={150} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"20px", fontWeight:"bold"}}>The Maasai</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"20px"}}>1.2k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>
        
          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_khoisan1.png' width={150} height={150} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"20px", fontWeight:"bold"}}>The Khoisan</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"20px"}}>2.5k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>

          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_yoruba.png' width={150} height={150} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"20px", fontWeight:"bold"}}>The Giriama</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"20px"}}>1.6k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>


          <div className='pop-card'>
            <div className='pop-card-img'>
               <Image src='/image/elipse_baganda.png' width={150} height={150} />
            </div>
            <div className='pop-card-text' style={{marginLeft:"1rem"}}>
                   <p style={{fontSize:"20px", fontWeight:"bold"}}>The Baganda</p>
                   {/* <div style={{}}> */}
                     <p style={{fontSize:"20px"}}>1.3k Members</p>
                   {/* </div> */}
                   <button  className="pop-card-btn">Join</button>
            </div>
          </div>
        
        
      </div>
    </div>
  )
}

export default Popular