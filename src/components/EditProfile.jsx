import React from 'react'
import { useState } from 'react';

const EditProfile = () => {
const[firstName,setFirstName]=useState("kendricklamar0901@gmail.com");
  const[lastName,setLastName]=useState("KendrickLamar0901!")
  const[age,setAge]=useState(0);
  const[error,setError]=useState("")
  return (
    <div>
        <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Edit Your Profile here bitch</h1>
          <p className="py-6">
        
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label my-2">
                <span className="label-text">First Name</span>
              </label>
              <input type="email" placeholder="email" onChange={(e)=>setFirstName(e.target.value)} className="input input-bordered" required value={firstName} />
            </div>
            <div className="form-control">
              <label className="label my-2">
                <span className="label-text">Last Name</span>
              </label>
              <input type="password" placeholder="password" onChange={(e)=>setLastName(e.target.value)} className="input input-bordered" required value={lastName} />
              <label className="label my-2">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6 flex justify-center">
              {
                // so basically fuck onclick and javascript functions in general  
              }
              <button className="btn btn-primary">Login</button>
            </div>
            <p className='text-red-500'>{error}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditProfile