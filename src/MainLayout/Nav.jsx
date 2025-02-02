import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import logo from '../assets/wild-cars-high-resolution-logo-transparent (1).png'
import { signOut } from 'firebase/auth'
import { auth } from '../Backend/Firebase'
import { useContext } from 'react'
import DataContext from '../Registration/UseContext/DataContext'
import { toast } from 'react-toastify'






const Nav = () => {
  const context = useContext(DataContext)
    // const {isAuth, setIsAuth} = context
    const navigate = useNavigate()

    const user = localStorage.getItem("users")


  const logOut = async()=>{
      try{
          // const provider = new GoogleAuthProvider()
          // await  revokeAccessToken(auth, provider)
          await signOut(auth)
          localStorage.clear()
          toast.success("Sign Out Successful")
          navigate("/login")
      }catch(error){
        toast.error("Sign Out Successful")
          
      }
  }



  return (
    
    <div className='bg-black/90 flex justify-center items-center px-10 py-2  w-full fixed top-0'>
      <div className='flex w-full items-center'>
            
            <div className='w-[40%] flex justify-left'>
                <Link to="/">
                <img 
                src={logo}
                width={"150px"}
                />
                </Link>
                
            </div>
            
       

        <div className='w-[60%] '>
            <ul className='flex justify-end items-center gap-4 text-[#FF0000] fonts'>
                <li><Link to="/" className=' hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75'> Home</Link></li>
                <li><Link to="/allcars" className='hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75'> Inventory</Link></li>
                <li><Link to="/blog" className='hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75'>Blog</Link></li>
                <li><Link to="/admin" className='hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75'>Admin</Link></li>
                <li><Link to="/cart" className='hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75 '>Add  Cart</Link></li>
                <li>{user? <p  className='hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75' onClick={logOut} >LogOut</p>: <Link to= '/login'className='hover:text-white hover:border-b-2 hover:border-b-[#FF0000] hover:transition-colour ease-in-out delay-150 duration-75'>LogIn</Link>}</li>
                

            </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav