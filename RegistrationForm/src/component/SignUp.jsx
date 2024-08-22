import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
console.log(email,password,'email pasword');

  const handleSubmit = async (e) => {
    console.log(e,'eee----------------------');
    
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
        navigate('/Login'); 
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <div className="  flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-slate-800 border-2 border-none p-4 rounded-lg">
        <h2 className="text-center text-white text-4xl mb-4">Sign Up</h2>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="email" className=" text-white">
            Email:
            <input
              className="bg-slate-100 p-2 w-full text-black h-2/4"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="block text-white ">
            Password:
            <input
              className="bg-slate-100 p-2 w-full text-black h-2/4 0"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className='flex justify-center'>
          <button 
           className=" bg-white text-black p-2 my-6 w-1/2 rounded-lg  hover:bg-slate-700 font-bold" type="submit ">
            Sign Up
          </button>
        </div>
        <div className='flex justify-center '>
          <p className="text-center text-white">
            Already Registered?
          </p>
          <Link className='text-yellow-500' to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};



export default SignUp;
