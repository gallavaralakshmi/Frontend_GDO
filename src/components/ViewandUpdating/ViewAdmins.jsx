
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../Home/Logout/Logout";
import { getAdmins } from "../Roles/SAdmin/sadminapi";
import "../../CSS/views.css";
const ViewAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("authToken") === null) {
      console.log("inside viewadmins of token null")
      navigate("/mainpage");
    }
  });
  useEffect(() => {
    async function fetchAdmins() {
      console.log("Inside fetchgoals");
      const responses = getAdmins();
      responses.then((response) => {setAdmins(response);console.log(response)});
    }
    fetchAdmins();
  }, []);
  return (
    <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
      <Logout />
      {admins.length == 0 ? <h3 className="click-links">No Admins</h3> :
        <div>
          <h3 className="click-links">Admins</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>View Goals</th>
                <th>Employees</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr>
                  <td>{admin.user.name}</td>
                  <td>{admin.user.email}</td>
                  <td style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => {
                    console.log("ho" + admin.id);
                    localStorage.getItem("authToken")?
                    navigate("/viewgoals", { state: { id: admin.user.id, name: admin.user.name } })
                    :navigate("/mainpage")
                  }}>View Goals</td>
                  <td style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => {
                    console.log("ho" + admin.id);
                    navigate("/adminsadmin", { state: { id: admin.user.id, name: admin.user.name, gdo_id: admin.user.gdo_id } })
                  }}>View Employees</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      }
      <div className="click-links" style={{ textDecoration: "underline", cursor: "pointer", marginTop: "20px" }} onClick={() => {
        console.log("Inside viewing admins and eemployees goals");
        navigate(-1);
      }}>View My Goals</div>
    </body>
  )
}
export default ViewAdmins;