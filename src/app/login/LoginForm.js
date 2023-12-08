import React, { useState } from 'react'

function LoginForm() {
    const [formData, setFormData] = useState({});

    const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(formData);
    }
  return (
    <div className='input'>
            {/* form inputs */}
        <div class="row mb-3">
            <label for="email" class="form-label" >Email</label>
            <div class="col-sm-10">
            <input 
                type="email" 
                class="form-control" 
                id="email" 
                name="email"
                style={{width:"26rem"}}
                required
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                />
            </div>
        </div>
        <div class="row mb-3">
            <label for="password" class="form-label">Password</label>
            <div class="col-sm-10" >
            <input  
                type="password" 
                class="form-control" 
                id="password"  
                style={{width:"26rem"}}
                name="password"
                required
                onChange={(e)=> setFormData({...formData, password:e.target.value})}
                />
            </div>
        </div>
        <div class="mb-3" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="check1" />
                <label class="form-check-label" for="check1">
                Terms & Conditions
                </label> 
            </div>
            <>Forgot Password?</>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button style={{backgroundColor:"#D74A51", width:"20rem"}} type="submit" class="btn" onClick={handleSubmit}>Sign in</button>
        </div>

    </div>
  )
}

export default LoginForm