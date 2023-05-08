import React, { useEffect, useState } from "react"
import "./service.css"

const getData = async (page) => {
    try {
      let res = await fetch(
        `http://localhost:8080/products?_page=${page}&_limit=6`
      );
  
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

function Service(){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setloading] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        fetchAndUpdateData();
      }, [page]);
    
      const fetchAndUpdateData = async () => {
        try {
          setloading(true);
          const datas = await getData(page);
          setPosts(datas);
          setloading(false);
        } catch (error) {
          console.log(error);
          setError(true);
          setloading(false);
        }
      };
      if (isLoading) {
        return <h1>Loading...</h1>;
      }
      if (isError) {
        return <h1>Something wrong happened</h1>;
      }
      console.log(posts)
      const handleChange=(val)=>{
        const updatePage=page+val
        setPage(updatePage)
      }

    return <>
     <h1 className="Heading">All the Courses</h1>
     <div className="mount">
    <div className="product">

    </div>
    <div className="mount2">
   
      <div className="main2">
        {posts.map((ele)=>(
           <div className="mapdiv">
            <img src={ele.image} alt="Yash" />
             
             <h2 >{ele.title}</h2>
            
            <p >Description:-{ele.message}</p>
            <p style={{marginTop:"-1px"}}>Price:-{ele.price}</p>
            <button className="btn-hover color-1" style={{marginBottom:"0px"}}>{ele.button}</button>
           
           
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