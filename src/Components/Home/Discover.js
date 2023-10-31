import React, { useEffect } from 'react'
import Image from 'next/image';

function Discover() {

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css?family=Font1|Font2';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    
        // Clean up the link element when the component unmounts
        return () => {
          document.head.removeChild(link);
        };
      }, []);

  return (
    <>
    <div>
        <div>
            <h3 style={{ fontFamily: '' }}>Discover</h3>
        </div>
        <div className="discover">
                <div className='discoverCard'>
                    <div >
                        <h3 style={{paddingTop:"10px"}}> The Maasai</h3>
                    </div>  
                    <div className='info'>
                        <div className='intro-line'>
                            <p>
                            A fun fact about the Maasai people, who are a semi-nomadic ethnic group in East Africa (Kenya and Tanzania), 
                            is that they are known for their distinctive and colorful clothing. Maasai men often wear a traditional red 
                            shuka (a type of cloth) wrapped around their bodies, while women typically wear brightly colored beaded jewelry and clothing. 
                            These vibrant and eye-catching outfits are not only practical for the Maasai's pastoral lifestyle but have also become iconic 
                            symbols of their culture and are popular with tourists and fashion enthusiasts around the world.
                            </p>
                            <div style={{paddingLeft:"10px",  display:"flex", alignContent:"flex-end", height:"40px", marginBottom:"2px"}}>
                                <p>Learn More...</p>
                            </div>
                        </div>
                        <div className='pic'>
                            <Image 
                                src="/image/massai1.png" 
                                // style={{border: "1px solid black"}}
                                alt="user" 
                                width={200} 
                                height={200} 
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