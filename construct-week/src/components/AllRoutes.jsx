import { Route,Routes } from "react-router-dom"
  import React from 'react'
import Home from "./Home"
import Login from "./Login"
import Service from "./Service"
import Payment from "./Payment"

  function AllRoutes(){
    return <div>
         <Routes>
     <Route path="/" element={<Home/>}/>
   <Route path="/contact" element={<Payment/>}/>
      <Route path="/about-us" element={<h1>About Page</h1>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/login" element={<Login/>}/>
   </Routes>
   </div>
  }

  export default AllRoutes