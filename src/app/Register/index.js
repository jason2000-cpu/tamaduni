import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './index.css';


function Register() {
  return (
    <div className='' style={{ width: "99vw"}}>
        <div className='row'>
            <div className='pattern col-8'>
                <p className='text-danger'>Pattern here</p>
            </div>
            <div className='login col-4'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <Image src="/image/logo.png" alt="tamaduni logo" width={160} height={140} />
                    <h2 style={{letterSpacing:"10px"}}>Signup</h2>
                </div>
                <div className='input'>
                        {/* form inputs */}
                    <div class="row mb-3">
                        <label for="email" class="form-label" >Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" style={{width:"26rem"}}/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="form-label">Password</label>
                        <div class="col-sm-10" >
                            <input  type="password" class="form-control" id="password"  style={{width:"26rem"}}/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" />
                            <label class="form-check-label" for="check1">
                            Terms & Conditions
                            </label> 
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <button style={{backgroundColor:"#D74A51", width:"20rem"}} type="submit" class="btn">Sign in</button>
                    </div>

                </div>
                 <div  class="mt-3" style={{display:"flex", justifyContent:"center"}}>
                    <hr style={{width:"16rem"}}></hr>
                     <p style={{ display:"flex", alignItems:"center", margin:"0 1rem"}}>or</p>
                    <hr style={{width:"16rem"}}></hr>
                 </div>
                <div className='login-alt'>
                    <div className='google-log'>
                        <Image src='/image/google_logo.png' alt='google'  width={40} height={40} />
                        <p>Signup With Google</p>
                    </div>
                    <div className='facebook-log'>
                        <Image src='/image/facebook_logo1.png' alt='facebook'  width={40} height={40} />
                        <p>Signup With Facebook</p>
                    </div>
              </div>
              <div className='signup'>
                 <p>Already have an account? <Link href='/login'>Login</Link></p>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Register