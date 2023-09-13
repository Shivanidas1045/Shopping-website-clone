import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
const navigate=useNavigate()
    const submitForm=()=>{
     

            

    }
    const signupForm=()=>{
        navigate("/login")

            

    }
    const loginnform=()=>{
      navigate("/login")
    }


    const btnstyle={
        backgroundColor:"peru",
        color:"white",
        width:"80px",
        height:"40px",
        marginLeft:"200px",
        marginTop:"30px",
    }
    const formstyle={
        paddingTop:"10px",
        border:"0px solid black",
        width:"500px",
        margin:"auto",
        marginTop:"100px",
        height:"500px",
        backgroundColor:"#FFFACD",
        boxShadow:"rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
marginBottom:"80px",
        
    }
    const emailstyle={
        marginLeft:"80px",
        fontSize:"30px",
    }
    const passwordstyle={
        marginLeft:"80px",
        fontSize:"30px",
        marginTop:"10px",
    }
    const heading={
        marginLeft:"160px",
        marginTop:"40px",
        marginBottom:"20px",
    }
    const para={
        fontSize:"20px",
        marginLeft:"80px",
        marginTop:"10px",
    }
    const para2={
        fontSize:"18px",
        marginLeft:"120px",
        marginTop:"15px",
        color:"gray",
    }
    const bt={
        backgroundColor:"peru",
        color:"white",
        width:"230px",
        height:"40px",
        marginLeft:"130px",
        marginTop:"30px",
        
    }

    // const navigate=useNavigate();
    //     const navigateHome=()=>{
    //     navigateHome("/");
    // }
    

    return (
        <>
        
        <form style={formstyle}action =""  onSubmit={submitForm}>
            <div>
                <h1 style={heading}> Welcome!</h1>
                <label  htmlFor="email" ></label>
                <input style={emailstyle}type="text" placeholder="E-mail" name="email" id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                
                
            </div>
            <div>
                <label htmlFor="password" ></label>
                <input style={passwordstyle} type="password" placeholder="Password" name="password" id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>

            </div>
            <button style={btnstyle}  onClick={signupForm}>Sign Up</button>
            <p style={para}>If you have an account with us,log in</p>
            <p style={para}>using your email address and password.</p>
          

          <button style={bt}  onClick={loginnform}>Login</button>
        

          

            
        </form>
        
       

        
        </>

        
    
    )
}
export default Login;



// 