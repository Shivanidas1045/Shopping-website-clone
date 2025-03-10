import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Product from '../pages/Product';




const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<Login/>}></Route>
         
        
      </Routes>
    </div>
  )
}

export default AllRoutes
