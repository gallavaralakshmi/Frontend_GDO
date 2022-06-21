import axios from "axios";
import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import "../../CSS/views.css";
import MainPage from "../MainPage/MainPage";
const Updategoal = () => {
    const navigate = useNavigate();
    const [goal_name, setGoalname] = useState('');
    const [status, setStatus] = useState('');
    const [userError, setUserError] = useState('');
    const [goalnameerror, setGoalnameerror] = useState('');
    const location = useLocation();
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
          console.log("inside viewadmins of token null")
          navigate("/mainpage");
        }
      });
    
    function handleForm(e) {
        const id = location.state.id;
        e.preventDefault();
        axios({
            method: 'put',
            url: '/usergoals/updategoal',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
            },
            data: {
                id, goal_name, status
            }
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
            if (err.response.data.errors) {
                const errors = err.response.data.errors;
                console.log(`errors inside addgoal:${JSON.stringify(errors)}`);
                for (let i = 0; i < errors.length; i++) {
                    switch (errors[i].param) {
                        case "goal_name": setGoalnameerror(errors[i].msg)
                            break;
                    }
                }
            }
            if (err.response.data.message) {
                const error = err.response.data.message;
                console.log("Inside addgoal checking if user exists or not");
                console.log(error)
                setUserError(error);
            }
        })

    }
    return (
        <div>{localStorage.getItem("authToken")?
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
            <Logout />
            <div className="update-form">
                <form onSubmit={handleForm} >
                    <div className="update-header">
                        <h3 className="click-links">UpdateGoals</h3>
                    </div>
                    <div className="update-fields">
                        <label>Goalname</label>
                        <input type="text" placeholder="Enter your goal" value={goal_name} onChange={(e) => setGoalname(e.target.value)} />
                        <p>{goalnameerror}</p>
                    </div>
                    <div className="update-select">
                        <label className="register-select-label">Select Status</label>
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
                            <p>Goal Updated</p>
                            navigate(-1);
                        }}
                        >UpdateGoal</button>
                    </div>
                    <p>{userError}</p>
                </form>


            </div>
        </body>
         :
         <MainPage/>
                          }</div>
    )
}
export default Updategoal;