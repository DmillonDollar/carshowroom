import React, { Children } from 'react'
import Login from './Registration/Login'
import SignUp from './Registration/SignUp'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './Dashboard/Admin'
import MainLayout from './MainLayout/MainLayout'
import Blog from './Component/Blog'
import Inventory from './Component/Inventory'
import Cart from './Component/Cart'
import Home from './Component/Home'
import AddProduct from './ProductForm/AddProduct'
import UpdateProduct from './ProductForm/Update'
import User from './Dashboard/User'
import AdminLayout from './Dashboard/AdminLayout'
import Product from './Dashboard/Product'
import AllBlogs from './Dashboard/AllBlog'
import Order from './Dashboard/Order'
import Missing from './Component/Missing'
import AddBlog from './ProductForm/AddBlog';
import UpdateBlog from './ProductForm/UpdateBlog';
import ProductInfo from './Component/ProductInfo';
const App = () => {
  return (

       
      <Router>
  
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='/allcars' element = {<Inventory/>}/>
          <Route path='/productinfo/:id' element = {<ProductInfo/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<SignUp/>} />
          <Route path='/admin' element = {<AdminLayout/>}>
              <Route index element ={<Admin/>}/>
              <Route path='user' element={<User/>}/>
              <Route path='product' element={<Product/>}/>
              <Route path='allblogs' element={<AllBlogs/>}/>
              <Route path='orders' element={<Order/>}/>


          </Route>
          <Route path='/addproduct' element = {<AddProduct/>} />
          <Route path='/update' element = {<UpdateProduct/>} />
          <Route path='/addblog' element = {<AddBlog/>} />
          <Route path='/updateblog' element = {<UpdateBlog/>} />


          <Route path='*' element = {<Missing/>} />



        </Routes>
        <ToastContainer/>
      </Router>
    
      
  )
}

export default App



const ProtectedRoute = ({children})=> {
  const user = localStorage.getItem("user")
  if(user){
    return children
  }
  else{
    return Navigate('/login')
  }
}

const ProtectedAdmin=({children})=>{
  const users = localStorage.getItem("user")  
    const user = JSON.parse(users)
    if(user.user.email==="dmilliondollar1@gmail.com"){
      return children
    }else{
      return Navigate('/login')
    }
}