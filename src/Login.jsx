import { useState } from 'react';
import axios from 'axios';
import React from 'react'

const Login = () => {
  const[emailId,setEmailId]=useState("lanaray0901@gmail.com");
  const[password,setPassword]=useState("LanaRay0901!")
  
  const handleLogin=async()=>{
    try {
      const res=await axios.post("http://localhost:6969/login",{emailId,password},{withCredentials:true})
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
        <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now to devTinder</h1>
          <p className="py-6">
            Connect with developers who have social skills of an doorknob
            just like you. All the fun of Tinder without the commitment of asslicking 
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label my-2">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" onChange={(e)=>setEmailId(e.target.value)} className="input input-bordered" required value={emailId} />
            </div>
            <div className="form-control">
              <label className="label my-2">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="input input-bordered" required value={password} />
              <label className="label my-2">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6 flex justify-center">
              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login