import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/home.css";
const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userError, setUserError] = useState('');
    function handleLogin(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: '/login',
            contentType: 'application/json',
            data: {
                email, password
            }
        }).then((response) => {
            //console.log(response);
            if (response.status == 200) {
                localStorage.setItem("authToken", response.data.jwt)
                localStorage.setItem("userdetails", JSON.stringify(response.data.details))
                console.log(`Authtoken:${localStorage.getItem('authToken')}`);
                console.log(`jwt:${response.data.jwt}`);
                console.log(`response:${JSON.stringify(response)}`);
                console.log(`role:${response.data.details.role}`);
                if (response.data.jwt && response.data.role == "SAdmin") {
                    navigate("/superadmin",{
                        state:{id:response.data.details.id,name:response.data.details.name,}
                    }
                    )
                }
                else if (response.data.jwt && response.data.role == "Admin") {
                    navigate("/admins",{
                        state:{id:response.data.details.id,name:response.data.details.name,role:response.data.role,gdo_id:response.data.details.gdo_id}
                    }
                    )
                }
                else if (response.data.jwt && response.data.role == "Employee") {
                    navigate("/employees",{
                        state:{id:response.data.details.id,name:response.data.details.name,}
                    }
                    )
                }
                else { }
            }




        }).catch((err) => {
            console.log(err);
            if (err.response.data.errors) {
                const errors = err.response.data.errors;
                for (let i = 0; i < errors.length; i++) {
                    switch (errors[i].param) {
                        case "email": setEmailError(errors[i].msg)
                            break;
                        case "password": setPasswordError(errors[i].msg)
                            break;
                        default: (() => { })()
                    }
                }
            }
            if (err.response.data.message) {
                const error = err.response.data.message;
                console.log("inside invalid users login check:");
                console.log(error);
                setUserError(error);
            }
            
        });
    }
    return (


        <div className="login" style={{ minHeight: "100%" }}>
            <form onSubmit={handleLogin} className="login-form">
                <div className="login-header">
                    <h3>Login</h3>
                </div>
                <div className="login-field">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p>{emailError}</p>
                </div>
                <div className="login-field">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p>{passwordError}</p>
                </div>
                <div className="login-field">
                    <p>{userError}</p>
                </div>
                <div className="login-user-not">
                    <p onClick={() => { props.setType("register") }}>Not a user?Sign up here</p>
                </div>
                <div className="login-button">
                    <button type="submit" >Login</button>
                </div>


            </form>
            <p style={{ height: "600px" }}></p>
        </div>


    );
}
export default Login;