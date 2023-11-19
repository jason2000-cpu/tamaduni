import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './index.css';

function index() {
  return (
    <div className=''>
        <div className='row'>
            <div className='pattern col-8'>
                <p className='text-danger'>Pattern here</p>
            </div>
            <div className='login col'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <Image src="/image/logo.png" alt="tamaduni logo" width={160} height={140} />
                    <h1 style={{letterSpacing:"10px"}}>Login</h1>
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
                    <div class="row mb-3">
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
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default index