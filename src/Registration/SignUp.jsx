import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { data, auth } from "../Backend/Firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import DataContext from "./UseContext/DataContext";
import { Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(DataContext)
  const {loading, setLoading} = context
  const navigate = useNavigate()


  const signUp = async () =>{
    if (name == "" || email == ""|| password == ""){
        return toast("All fields are required")
    }      
        setLoading(true)
        
    try{
        let users = await createUserWithEmailAndPassword(auth, email, password)

        const user = {
            name,
            userid: users.user.uid,
            email: users.user.email,
            dateAdded: Timestamp.now()
        }
        console.log(user)
        const userRef = collection(data, "user")
        await addDoc(userRef,user)
        toast("SignUp successfully")
        navigate("/login")
        setName('')
        setEmail("")
        setPassword("")
        setLoading(false)
    }catch (error){
      toast.error("Sign Up Failed")
        setLoading(false)

    }
  }



    const goggle = async () =>{     
          setLoading(true)
      try{
        const provider = new GoogleAuthProvider()
          let users = await signInWithPopup(auth, provider)
          localStorage.setItem('users', JSON.stringify(users))
  
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
          toast("SignUp successfully")
          navigate("/")
          setName('')
          setEmail("")
          setPassword("")
          setLoading(false)
      }catch (error){
        toast.error("Sign Up Failed")
          setLoading(false)
  
      }
  }

  return (
    <div className="relative h-screen login_background">
     
      <div className=" flex justify-center items-center h-screen">
        <div className="flex bg-[#EEEEEE]/30 backdrop-blur-md  p-5 w-[50vh] ">
          <div className="w-full text-white font-sans " >
            <div className="flex items-center flex-col  font-bold text-xl mb-7">
                {loading && <Loading/>}
              <h1>Create An Account</h1>
            </div>

            <div className="text-lg font-semibold mb-6">
              <label className="inline-block mb-2">Full Name</label>

              <div>
                <input
                  autoComplete='off'
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full outline-none rounded p-1 text-black"
                />
              </div>
            </div>

            <div className="text-lg font-semibold mb-6">
              <label className="inline-block mb-2">Email:</label>

              <div>
                <input
                  autoComplete='off'
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none rounded p-1 text-black"
                />
              </div>
            </div>

            <div className="text-lg font-semibold mb-6">
              <label className="inline-block mb-2">Password:</label>
              <div>
                <input
                  autoComplete='off'
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none rounded p-1 text-black"
                />
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <button onClick= {signUp}className="bg-[#FF0000] w-[65%] mb-2 p-2 rounded  hover:bg-green-950 outline-none">
                SIGN UP
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button type="button" onClick= {goggle}className=" mb-2 login-with-google-btn">
                Sign up with Google
              </button>
            </div>

            <div className="text-center">
              <p>
                Do you have an account already?{" "}
                <Link to="/login">
                  <span className="text-[#508C9B] inline-block hover:text-black cursor-pointer">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SignUp
