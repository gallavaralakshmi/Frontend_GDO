import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import { getGoals } from "../Roles/Goals/goals";
import "../../CSS/views.css";
import MainPage from "../MainPage/MainPage";
const ViewGoals = () => {
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken") === null) {
      console.log("inside viewgoals of token null")
      navigate("/mainpage");
      window.location.reload(false)
    }
  });
  const location = useLocation();
  const current_month = new Date().toISOString().slice(5, 7);
  const [month, setMonth] = useState(current_month);
  //console.log(`id:${location.state.id} name:${location.state.name}`);

  useEffect(() => {
    const responses = getGoals(location.state.id, month);
    responses.then((response) => { console.log(response); setGoals(response) });
  }, []);

 function getNewDate(e) {
    console.log("inside function")
    console.log(`month:${month}`);
    setMonth(e.target.value.slice(5, 7));
    const newMonth = e.target.value.slice(5, 7);
    const responses = getGoals(location.state.id, newMonth);
    responses.then((response) => { console.log(response); setGoals(response) });
    console.log(`after response month :${month}`);
  }
  return (
    <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
      {localStorage.getItem("authToken")?
      <>
      <Logout />
      <div className="month-label">
        <label >Select Month:</label>
        <input type="month" onChange={(e)=>getNewDate(e)} value={month}></input>
      </div>
      {goals.length == 0 ? <h3 className="click-links">No goals for {location.state.name}</h3> :
        <div>
          <h3 className="click-links">Goals of {location.state.name}</h3>
          <table >

            <thead>
              <tr>
                <th>Goalname</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal) => (
                <tr>
                  <td>{goal.goal_name}</td>
                  <td>{goal.status}</td>
                  <td>{goal.created_date}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      }
      <div className="click-links" style={{ textDecoration: "underline", cursor: "pointer", marginTop: "20px" }} onClick={() => {
        console.log("Inside viewing other employee goals");
        navigate(-1);
      }}>View Other's Goals</div>
      </>:<MainPage/>}
    </body>
  )
}
export default ViewGoals;