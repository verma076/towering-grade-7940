// import React, { useEffect, useState } from "react"
import "./service.css"
import { useState,useEffect } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Service = () => {
  const [data, setData] = useState([]);
  const [title,setTitle]=useState("")
  const [isLoading, setloading] = useState(true);
  const [isError, setError] = useState(false);
  const [orderby,setOrderby] = useState("")
  const [search,setSearch]=useState("")
  const [page, setPage] = useState(1);
  const [orderbyy,setOrderbyy] = useState("")
  const [price, setPrice]=useState("")
  let navigate = useNavigate(); 

  useEffect(()=>{
    let apiurl;
    if (title==="all"){
      apiurl = `http://localhost:8080/products?_page=${page}&_limit=6`
    }
    else if(title){
      apiurl = `http://localhost:8080/products?title=${title}&_limit=6`
    }
   else if (orderby){
    apiurl = `http://localhost:8080/products?&_sort=price&_order=${orderby}?_page=${page}&_limit=6`
   }
   else if (orderbyy){
    apiurl = `http://localhost:8080/products?&_sort=price&_order=${orderbyy}?_page=${page}&_limit=6`
   }

   else if (search){
    apiurl = `http://localhost:8080/products?&q=${search}`
   }
   
    else{
      apiurl = `http://localhost:8080/products?_page=${page}&_limit=6`
    }
    fetch(apiurl).then((res)=>{
    
      return res.json()
    }).then((res)=>
   
  {

    setloading(true)
    setData(res)
    setloading(false)
    setError(false)
  }
    )
  },[title,orderby,search,page,orderbyy]);

//    console.log(data)
  
//   console.log(search)


      const routeChange = () =>{ 
        let path = `/contact`; 
        navigate(path);
      }
  if (isLoading) {
            return <h1>Loading...</h1>;
          }
  if (isError) {
    return <h1>Something wrong happened</h1>;
  }
      const handleChange=(val)=>{
        const updatePage=page+val
        setPage(updatePage)
      }


      let filtered = data.filter((ele)=>{
        if((ele.title.toUpperCase().includes((search).toUpperCase())===true) && ele.price>=price ){
            return true
        }
        
        else{
            return false
        }
      })
      


    return <>
     <h1 className="Heading">All the Courses</h1>
     <div className="search" style={{textAlign:"center"}}>
        <input   placeholder="SearchByTitle" onChange={(e)=>setSearch(e.target.value)}/>
        <button >Submit</button>
     </div>
      
     <div className="mount">
    <div className="product">
         <div>
            <h2>Sort by price</h2>
            <br />
          <button className="btn-hover"  value="asc" onClick={(e)=>setOrderby(e.target.value)} style={{fontSize:"20px",width:"200px",height:"40px",cursor:"pointer"}}>Low To High</button>
          <br />
          <br />
          <button className="btn-hover" value="desc" onClick={(e)=>setOrderbyy(e.target.value)} style={{fontSize:"20px",width:"200px",height:"40px",cursor:"pointer"}}>High To Low</button>
          </div>
          <br />
          <div>
            <h3>Select By Category</h3>
            <br />
            <select style={{fontSize:"18px",width:"200px",height:"45px",cursor:"pointer"}} className="category" onChange={(e)=>setTitle(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="MY SQL">MY SQL</option>
            <option value="Chakra Learning">Chakra Learning</option>
            <option value="Phython Learning">Phython Learning</option>
            <option value="HTML Learning">HTML Learning</option>
            <option value="React js Learning">React js Learning</option>
            <option value="CSS">CSS</option>
            <option value="Chakra Learning">Chakra Learning</option>
            <option value="XQuery">XQuery</option>
          </select>
          </div>
          <br />
          <br />
          <div>
            <h1>Sort By Price</h1>
            <br />
          <select className="round"  onChange={(e)=>setPrice(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="1000">Price Greater 1000</option>
            <option value="2000">Price Greater 2000</option>
            <option value="4000">Price Greater 4000</option>
        </select>
          </div>
       
    </div>
   
    <hr />
    <hr />
    <div className="mount2">
        <br />
   
      <div className="main2">
        {filtered.map((ele)=>(
           <div className="mapdiv">
            <img src={ele.image} alt="Yash" />
             
             <h2 >{ele.title}</h2>
             <br />
            
            <p >Description:-{ele.message}</p>
            <br />
            <h5 style={{marginTop:"-1px"}}>Price:-{ele.price}</h5>
            <br />
            <button onClick={routeChange} className="btn-hover color-1" style={{marginBottom:"0px"}}>{ele.button}</button>
           
           
           </div>
        ))}
      </div>
    </div>
    </div>
     

      <div className="page">
        <button disabled={page===1} onClick={()=>handleChange(-1)}>prev</button>
        <button>{page}</button>
        <button disabled={page===4} onClick={()=>handleChange(+1)}>next</button>
      </div>
    </>
}

export default Service