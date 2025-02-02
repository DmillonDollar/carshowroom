import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from './UseContext/DataContext'
import { useContext } from 'react'
import {  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'

import Loading from '../Loading/Loading'
import { auth } from '../Backend/Firebase'
import { addDoc, collection } from 'firebase/firestore'



const Login = () => {
    const context = useContext(DataContext)
    const {loading, setLoading} = context
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signin = async ()=>{
        setLoading(true)
        
    
        try{
            const login = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('users', JSON.stringify(login))
            toast.success("SignIn successful", {
               position: "top-right",
               autoClose: 2000,
               hideProgressBar: true,
            //    closeOnClick:  true,
               pauseOnHover: true,
               draggable: true,
               theme: "colored",
               progress:undefined  
            })
            // navigate("/")
            
            window.location.href = "/"
            setEmail("")
            setPassword("")
            setLoading(false)
            

        }catch(error){
            setLoading(false)
            toast.success("SignIn Error",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick:  true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                progress:undefined  
             })
        }

    }


    const goggle = async () =>{     
        setLoading(true)
        
    try{
      const provider = new GoogleAuthProvider()
        let users = await signInWithPopup(auth, provider)
        localStorage.setItem('users', JSON.stringify(users))

        if (localStorage.getItem('users')){
            const user = {
                name: users.user.displayName,
                userid: users.user.uid,
                email: users.user.email,
                dateAdded: Timestamp.now(),
                imageUrl: users.user.photoURL
            }
            console.log(users)
            const userRef = collection(data, "user")
            await addDoc(userRef,user)
            toast("SignIn successfully")
            
            window.location.href = '/'
            setName('')
            setEmail("")
            setPassword("")
            setLoading(false)
        }
       
    }catch (error){
      toast.error("Sign In Failed")
        setLoading(false)
    }
}

  return (
    <div className='relative  h-screen login_background'>
            <div className=' flex justify-center items-center h-full'>
                <div className='flex bg-white/30 backdrop-blur-md  p-5 w-[50vh] '>
                    <div className='w-full text-white font-sans '>

                        <div className='flex justify-center items-center flex-col font-bold text-xl mb-7'>
                            {loading&& <Loading/>}
                            <h1>Login Here</h1>
                        </div>

                        <div className='text-lg font-semibold mb-6'>
                        <label className='inline-block mb-2'>Email:</label>

                        <div>
                        <input 
                        autoComplete='off'
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className='w-full outline-none rounded p-1 text-black'
                        />
                        </div>
                        </div>
                        
                        <div className='text-lg font-semibold mb-6'>
                        <label className='inline-block mb-2'>Password:</label>
                        <div>
                        <input
                        autoComplete='off'
                        type='password'
                        placeholder='Enter Your Password'
                        name='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className='w-full outline-none rounded p-1  text-black'
                        />
                        </div>
                    
                        </div>
                        

                        <div className='flex items-center justify-center'><button className='bg-[#FF0000] w-[65%] mb-2 p-2 rounded  outline-none' onClick={signin}>L O G I N</button></div>
                        <div className="flex items-center justify-center">
                            <button type="button" onClick= {goggle}className=" mb-2 login-with-google-btn">
                                Sign In with Google
                            </button>
                        </div>
                        <div className='text-center'>
                            <p>Don't have an account? <Link to= '/signup'>
                            <span className='text-[#FF1493] inline-block hover:text-black cursor-pointer'>SignUp</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        
    </div>
  )
}

export default Login