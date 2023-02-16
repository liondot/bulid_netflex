// import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/55be2c2f-9500-489c-867b-2867c5235f8c/KR-ko-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bod">Sign Up</h1>
            <form onSubmit={handleSubmit} action="" className="w-full flex flex-col py-4">
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="p-3 my-2 bg-gray-700 rounded" placeholder="Email"/>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="p-3 my-2 bg=gray=700 rounded text-black"
                placeholder="password"
                autoComplete="current-password"
    
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600 mr-3">
                  Already subscribed to Netflix?
                </span>{''}
                <Link to='/login'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
