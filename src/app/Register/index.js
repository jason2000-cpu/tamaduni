import React from 'react'
import Link from 'next/link'
function index() {
  return (
    <div>
    Register Page
    <br></br>
    Already have an account?
    <Link href='/login'> Login Here</Link>
    <br></br>
    or 
    <br></br>
    Continue without loging in 
    <Link href="/home"> Here</Link>
    </div>
  )
}

export default index