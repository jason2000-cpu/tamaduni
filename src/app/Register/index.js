import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './index.css';


function Register() {
const [formData, setFormData] = useState({});


function handleSubmit(){
    // e.preventDefault()
    alert("success")
    console.log(formData)
}

console.log(formData);
  return (
    <div className='' style={{ width: "99vw"}}>
        <div className='row'>
            <div className='pattern col-8'>
                <p className='text-danger'>Pattern here</p>
            </div>
            <div className='login col-4'>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <Image src="/image/logo.png" alt="tamaduni logo" width={100} height={100} />
                    <h3 style={{letterSpacing:"10px"}}>Signup</h3>
                </div>
                <div className='input'>
                        {/* form inputs */}
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="Fname" className="form-label" >Fist Name</label>
                            <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="Fname"
                                name='Fname'
                                style={{width:'12.5rem'}} 
                                onChange={(e)=>setFormData({...formData, Fname:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="Sname" className="form-label" >Second Name</label>
                            <div className="col-sm-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="Sname" 
                                name='Sname'
                                style={{width:'12.5rem'}}
                                onChange={(e)=>setFormData({...formData, Sname:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="col-sm-10" >
                            <input  
                            type="email" 
                            className="form-control" 
                            id="email"  
                            style={{width:"26rem"}}
                            onChange={(e)=>setFormData({...formData, email:e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="password" className="form-label" >Password</label>
                            <div className="col-sm-10">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                style={{width:'12.5rem'}} 
                                onChange={(e)=>setFormData({...formData, password:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="password" className="form-label" >Confirm Password</label>
                            <div className="col-sm-10">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password"  
                                style={{width:'12.5rem'}}
                                onChange={(e)=>setFormData({...formData, Cpassword:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check1" />
                            <label className="form-check-label" htmlFor="check1">
                            Terms & Conditions
                            </label> 
                        </div>
                    </div> */}
                    <div style={{display:"flex", justifyContent:"center"}}>
                    <button style={{backgroundColor:"#D74A51", width:"20rem"}} type="submit" className="btn" onClick={handleSubmit}>Sign in</button>
                    </div>

                </div>
                 <div  className="mt-3" style={{display:"flex", justifyContent:"center"}}>
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