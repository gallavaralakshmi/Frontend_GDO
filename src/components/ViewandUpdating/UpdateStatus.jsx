import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import "../../CSS/views.css";
import MainPage from "../MainPage/MainPage";
const UpdateStatus = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('');
    // const [userError,setUserError]=useState('');
    // const [goalnameerror,setGoalnameerror]=useState('');
   // useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          console.log("inside viewadmins of token null")
          navigate("/mainpage");
        }
     // });
    const location = useLocation();
   
    function handleForm(e) {
        const id = location.state.id;
        e.preventDefault();
        axios({
            method: 'put',
            url: '/usergoals/updatestatusofgoal',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
            },
            data: {
                id, status
            }
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
            /*  if(err.response.data.message){
                  const error=err.response.data.message;
                  console.log("Inside addgoal checking if user exists or not");
                  console.log(error)
                  setUserError(error);
              }*/
        })

    }
    return (
        <div>{localStorage.getItem("authToken")?
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
            <Logout />
            <div>

                <form onSubmit={handleForm} className="update-form">
                    <div className="update-header">
                        <h3 className="click-links">UpdateStatus</h3>
                    </div>
                    <div className="update-select" >
                        <label >Select Status:</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>Status</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Failed</option>
                        </select>
                    </div>
                    <div >
                        <button className="update-button" type="submit" onClick={() => {
                            console.log("goal updated succesfully");
                            <p>Status Updated</p>
                            navigate(-1);
                        }}
                        >UpdateGoalStatus</button>
                    </div>
                    <p></p>
                </form>


            </div>
        </body>
         :
        <MainPage/>
                         }</div>
    )
}
export default UpdateStatus;