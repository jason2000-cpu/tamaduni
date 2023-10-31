import React from 'react'
import Image from 'next/image';

function Discover() {
  return (
    <>
    <div>
        <div>
            <h3>Discover</h3>
        </div>
        <div className="discover">
                <div className='discoverCard'>
                    <div>
                        <h3>Maasai</h3>
                    </div>
                    <div className='info'>
                        <div className='intro-line'>
                            <p>
                                A fun fact about the Maasai people, who are a semi-nomadic ethnic group in East Africa (Kenya and Tanzania), 
                                is that they are known for their distinctive and colorful clothing. Maasai men often wear a traditional red 
                                shuka (a type of cloth) wrapped around their bodies, while women typically wear brightly colored beaded jewelry and clothing....
                            </p>
                            <div style={{paddingLeft:"10px",  display:"flex", alignContent:"flex-end", height:"40px", marginBottom:"2px"}}>
                                <p>Learn More...</p>
                            </div>
                        </div>
                        <div className='pic'>
                            <Image 
                                src="/image/massai1.png" 
                                alt="user" 
                                width={150} 
                                height={150} 
                                className='img' />
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Discover