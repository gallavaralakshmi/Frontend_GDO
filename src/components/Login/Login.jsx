import axios from "axios";
import React, { useState } from "react";
import "../../CSS/register.css";
const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    function handleLogin(e){
        e.preventDefault();
        axios({
            method:'post',
            url:'/login',
            contentType:'application/json',
            data:{
                email,password
            }
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
            if(err.response.data.errors){
                const errors=err.response.data.errors;
                for(let i=0;i<errors.length;i++){
                    switch(errors[i].param){
                        case "email":setEmailError(errors[i].msg)
                            break;
                        case "password":setPasswordError(errors[i].msg)
                            break;
                        default:(()=>{})()
                    }
                }
            }
        });
    }
    return(
 
    <body>
     <div className="login">   
    <form onSubmit={handleLogin} className="login-form">
    
    <div className="login-header">
              <h3>Login</h3>
          </div>
        <div  className="login-field">
            <label>Email</label>
            <input type="email"  placeholder="Enter email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <p>{emailError}</p>
        </div>
        <div className="login-field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p>{passwordError}</p>
        </div>
        <div className="login-user-not">
            <p onClick={()=>{props.setType("register")}}>Not a user?Sign up here</p>
        </div>
        <div className="login-button">
            <button type="submit" >Login</button>
        </div>
       
    </form>
    </div>
    </body>
    );
}
export default Login;