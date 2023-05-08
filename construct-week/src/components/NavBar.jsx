import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <>
  
    <div style={{border:"1px solid grey",display:"flex", marginTop:"10px",marginBottom:"10px", justifyContent:"space-between",alignItems:"center",fontSize:"20px",color: "#fff"}}>
     <img style={{width:"70px",height:"70px"}} src="https://profpjm.com/wp-content/uploads/Coding-Academy-Logo-1.png" alt="" />
    <Link to="/" style={{textDecoration:"none"}}>Home</Link>
    <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>
    <Link to="/about-us" style={{textDecoration:"none"}}>About</Link>
    <Link to="/services" style={{textDecoration:"none"}}>Products</Link>
    <Link to="/login" style={{textDecoration:"none"}}>Login</Link>

    </div>
    </>
  )
}

export default NavBar