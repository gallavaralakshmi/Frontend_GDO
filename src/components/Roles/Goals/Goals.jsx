
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../Home/Logout/Logout";
import { deleteGoal, getGoals } from "./goals";
import "../../../CSS/views.css";


const Goals = () => {

  const current_month = new Date().toISOString().slice(5, 7);
  const [goals, setGoals] = useState([]);
  const navigate = useNavigate();
  const [month, setMonth] = useState(current_month);
  console.log("userdetails of employee");
  const location=useLocation();
  console.log(`Inside goals component:${location.state.id} and ${location.state.name}`)
 // const userobject = JSON.parse(sessionStorage.getItem("userdetails"));
  //console.log(userobject.name);


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
  useEffect(() => {
    if (localStorage.getItem("authToken") === null) {
      navigate("/mainpage");
    }
  });

  return (
    <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') " }}>
      <div className="viewgoals-page">
        <Logout />
        <h3 className="viewgoals-head">Welcome {location.state.name}</h3>
        <div className="month-label">
          <label >Select Month:</label>
          <input type="month" onChange={e => getNewDate(e)} value={month}></input>
        </div>
        {goals.length == 0 ? <h4 className="click-links">You didn't set any goals</h4> :
          <table className="my-4">
            <thead>
              <tr>
                <th>Goalname</th>
                <th>Status</th>
                <th>Date</th>
                <th>Delete</th>
                <th>Update</th>
                <th>UpdateStatus</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal) => (
                <tr>
                  <td>{goal.goal_name}</td>
                  <td>{goal.status}</td>
                  <td>{goal.created_date}</td>
                  <td>
                    <button onClick={() => {
                      console.log(`created date:${JSON.stringify(goal)}`)
                      deleteGoal(goal.id)
                      window.location.reload(false)
                    }}>Delete Goal</button>
                  </td>
                  <td>
                    <button onClick={() => {
                      console.log(`update goal of ${goal.id}`);
                      navigate("/updategoal", { state: { id: goal.id } })
                      window.location.reload(false)
                    }}>Update Goal</button>
                  </td>
                  <td>
                    <button onClick={() => {
                      console.log(`update status of goal of ${goal.id}`);
                      navigate("/updatestatus", { state: { id: goal.id } })
                      window.location.reload(false)
                    }}>Update Status</button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>
        }<br />
        <button className="viewgoals-button" onClick={() => {
          navigate("/addgoal",{state:{id:location.state.id}})
        }}>Add Goal</button>
      </div>
    </body>
  )
}
export default Goals;