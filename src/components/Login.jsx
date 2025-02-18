import { useState } from 'react';
import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[emailId,setEmailId]=useState("");
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")
  const[isLoginForm,setIsLoginForm]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post(BASE_URL+"/login",{emailId,password},{withCredentials:true})
      dispatch(addUser(res.data))
      return navigate("/")
    } catch (error) {
      setError(error.response.data)
    }
  }
  const handleSignUp=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true})
      dispatch(addUser(res.data.data))
      return navigate("/profile")
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div>
        <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{ isLoginForm ? "Login now to devTinder": "Sign up now to devTinder"}</h1>
          <p className="py-6">
            Connect with developers who have social skills of a doorknob
            just like you. All the fun of Tinder without the commitment of asslicking 
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
          {!isLoginForm && <><div className="form-control">
              <label className="label my-2">
                <span className="label-text">First Name</span>
              </label>
              <input type="email" placeholder="firsst name" onChange={(e)=>setFirstName(e.target.value)} className="input input-bordered" required value={firstName} />
            </div>
            <div className="form-control">
              <label className="label my-2">
                <span className="label-text">Last Name</span>
              </label>
              <input type="email" placeholder="last name" onChange={(e)=>setLastName(e.target.value)} className="input input-bordered" required value={lastName} />
            </div>
            </>}
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
              {
                // so basically fuck onclick and javascript functions in general  
              }
              <button className="btn btn-primary" onClick={isLoginForm ? (e)=>handleLogin(e): (e)=>handleSignUp(e)}>{isLoginForm? "Login": "Sign Up"}</button>
            </div>
            <p className='m-auto cursor-pointer py-2' onClick={()=>setIsLoginForm((value)=>!value)}>{isLoginForm? "New User? Sign up then bitch":"Existing User? Why are you here again?"}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login