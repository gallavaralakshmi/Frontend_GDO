import axios from "axios";
import React, { useState } from "react";
import "../../CSS/register.css";
const Register=(props)=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [skills,setSkills]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [conpassword,setConpassword]=useState('');
    const [mobile,setMobile]=useState('');
    const [gdo,setGdo]=useState('');
    const [role,setRole]=useState('');
    const [nameError,setNameError]=useState('')
    const [ageError,setAgeError]=useState('');
    const [skillsError,setSkillsError]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const[conpasswordError,setConpasswordError]=useState('');
    const [mobileError,setMobileError]=useState('')
    function handleForm(e)
    {
        e.preventDefault();
        axios({
            method:'post',
            url:'/register',
            contentType:'application/json',
            data:{
                name,age,skills,email,password,conpassword,mobile,gdo,role
            }
        }).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            //console.log(err);
            if(err.response.data.errors){
                const errors=err.response.data.errors;
                console.log(`errors inside signup:${JSON.stringify(errors)}`);
            for (let i = 0; i < errors.length; i++) {
                switch (errors[i].param) {
                    case "name": setNameError(errors[i].msg)
                        break;
                    case "age": setAgeError(errors[i].msg)
                        break;
                    case "skills": setSkillsError(errors[i].msg)
                        break;
                    case "email": setEmailError(errors[i].msg)
                        break;
                    case "password": setPasswordError(errors[i].msg)
                        break;
                    case "mobile": setMobileError(errors[i].msg)
                        break;
                   
                    default: (() => { })()

                }
            }
        }
        })
        
    }
   return(
       <body>
       <div >
      <form onSubmit={handleForm} className="register-form">
          <div className="register-header">
              <h3>SignUp</h3>
          </div>
          <div className="register-field">
          <label>Name</label>
          <input value={name} type="text" placeholder="Enter your name" required onChange={(e)=>setName(e.target.value)}/>
         <p>{nameError}</p>
          </div>
          <div className="register-field">
          <label>Age</label>
          <input value={age} type="number" placeholder="Enter your age" required onChange={(e)=>setAge(e.target.value)}/>
         <p>{ageError}</p>
          </div >
          <div className="register-field">
          <label>Skills</label>
          <input value={skills} type="text" placeholder="Enter your skills" required onChange={(e)=>setSkills(e.target.value)}/>
          <p>{skillsError}</p>
          </div>
          <div className="register-field">
          <label>Email</label>
          <input value={email} type="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
         <p>{emailError}</p>
          </div>
          <div className="register-field">
          <label>Password</label>
          <input value={password} type="password" placeholder="Create a password" required onChange={(e)=>setPassword(e.target.value)}/>
         <p>{passwordError}</p>
          </div>
          <div className="register-field">
          <label>Confirm Password</label>
          <input value={conpassword} type="password" placeholder="Confirm password" required onChange={(e)=>{setConpassword(e.target.value)
          password!==e.target.value && e.target.value!==""?setConpasswordError("confirm password doesnot match with password"):setConpasswordError("")}
        }/>
        <p>{conpasswordError}</p>
          </div>
          <div className="register-field">
          <label>Mobile</label>
          <input value={mobile} type="text" placeholder="Enter your mobile number" required onChange={(e)=>setMobile(e.target.value)}/>
         <p>{mobileError}</p>
          </div>
          <div className="register-select-group" >
              <div className="register-select">
          <label className="register-select-label">Select GDO:</label>
          <select value={gdo} onChange={(e)=>setGdo(e.target.value)}>
              <option >GDO1</option>
              <option >GDO2</option>
              <option >GDO3</option>
              <option >GDO4</option>
              <option >ALL</option>
          </select>
          </div>
          <div className="register-select" >
          <label className="register-select-label">Select Role:</label>
          <select value={role} onChange={(e)=>setRole(e.target.value)}>
              <option>Employee</option>
              <option>Admin</option>
              <option>SAdmin</option>
          </select>
          </div>
          </div>
          <div className="register-user-not">
              {
                  <p onClick={()=>{props.setType("login")}}>Already a user?Sign in here</p>
              }
            </div>
          <div className="register-button">
             <button type="submit" >SignUp</button>
          </div>
      </form>
      </div>
      </body>
   )
   }
export default Register;