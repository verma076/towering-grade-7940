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
    <div className="login-page" style={{background:"coral", marginTop:"15px", textAlign:"center", width:"500px", height:"550px",marginLeft:"550px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <br/>
      <br/>
       <img style={{height:"150px",width:"180px"}} src="https://profpjm.com/wp-content/uploads/Coding-Academy-Logo-1.png" alt="" />
      <h4>CODING ACADEMY</h4>
      <h1>Sign in </h1>
      <h4>New user? Create an account</h4>
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div >
          <label>
            <input data-testid="email-input" type="email" placeholder="email" value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
         
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={isDisabled} style={{background:"yellow"}}>
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