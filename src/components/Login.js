import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){

        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home", {state:{id:email}});
                }
                else if(res.data=="does not exist"){
                    alert("You need to sign up!");
                }
            }).catch(e=>{
                alert("Wrong details");
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }

  return(   

    <section className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: `url('/bg.jpg')` }}>
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="mx-auto max-w-md text-gray-600 body-font relative z-10">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

      <div className="bg-gray-300 bg-opacity-40 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login to Code Embers</h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Id</label>
          <input type="email" id="full-name" name="email" onChange={(e) => setEmail(e.target.value)} placeholder='enter email here' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
          <input type="password" id="email" name="password" onChange={(e) => setPassword(e.target.value)} placeholder='enter password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <button onClick={submit} className=" bg-black hover:bg-gray-500 transition-colors duration-200 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Login</button>
      </div>
    </div>
    <h1 className="mb-10 font-extrabold text-2xl text-white">OR</h1>
    <Link to="/signup" className="bg-transparent text-2xl hover:bg-white  hover:text-black text-white hover:text-whtie font-bold py-2 px-4 rounded transition-all duration-300">Sign up</Link>
  </div>
</section>


    
  )
}

export default Login