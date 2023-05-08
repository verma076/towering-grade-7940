import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
// import {Yash.png} from "./"
// import {Yash,png} from "./"





function Login() {
const[email,setEmail]=useState("eve.holt@reqres.in")
const[password,setPassword]=useState("cityslicka")
// const{ loginUser } = useContext(AuthContext)
const [isDisabled,setIsDisabled]=useState(false)
const navigate = useNavigate()

const handleSubmit=(e)=>{
  setIsDisabled(true)
  e.preventDefault()
  const userDetails={email,password};
  // console.log({email,password})
 fetch(`https://reqres.in/api/login`,{
  method:"POST",
  headers:{"Content-Type": "application/json"},
  body:JSON.stringify(userDetails)
 })
 .then((res)=>res.json())
 .then((res)=>{
  // loginUser(res.token)
 })
 .then(()=>{
  navigate(`/`)
 })
  };
 



  return (
     <>
    <div style={{background:"grey"}}>
    <div className="login-page" style={{background:"coral", marginTop:"15px", textAlign:"center", width:"600px", height:"700px",marginLeft:"550px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <br/>
      <br/>
       <img style={{height:"250px",width:"280px"}} src="https://profpjm.com/wp-content/uploads/Coding-Academy-Logo-1.png" alt="" />
      <h1>CODING ACADEMY</h1>
      <h1>Sign in </h1>
      <h2>New user? Create an account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div >
          <label>
            <input style={{width:"400px",height:"30px" ,fontSize:"30px"}}
              type="email"
               placeholder="email" 
               value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <br />
        <div>
         
          <label>
            <input style={{width:"400px",height:"30px",fontSize:"50px"}}
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <button  type="submit" disabled={isDisabled}style={{width:"100px",height:"30px",fontSize:"20px",backgroundColor:"plum",cursor:"pointer"}}>
            SUBMIT
          </button>
        </div>
      </form>
      
    </div>
    </div>
   
    </>
  );
}
export default Login;