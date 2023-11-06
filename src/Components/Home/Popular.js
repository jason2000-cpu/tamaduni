import React from 'react'
import Image from 'next/image'



function Popular() {
  return (
    <div style={{width:"100vw"}}>
        <div>
            <h2>Popular Communities</h2>
        </div>
        <div className='comm'>
            <div className='comm-card'>
                <div className='comm-demo'>
                  <div className='comm-image'>
                      <Image src="/image/user.png" alt="user" width={60} height={60} className='img' />
                    
                  </div>
                  <div className='comm-name'>
                      <h3>Amharan</h3>
                  </div>
                </div>
                <div className='comm-stat'>
                    <div>
                      <p>1.2k members</p>
                    </div>
                  <div>
                        <button style={{width:"200px",marginLeft:"3rem", backgroundColor:"red"}} className='join'>Join</button>
                  </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Popular