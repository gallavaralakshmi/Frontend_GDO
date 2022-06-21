import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../Home/Logout/Logout";
import { getEmployeesOfAdmin } from "./adminsadminapi";
const Adminsadmin = () => {
    const location = useLocation();
    console.log(`received admin id is:${location.state.id} ${location.state.name}`);
    const [employees, setEmployees] = useState([]);
    const userobject = JSON.parse(localStorage.getItem("userdetails"));
    console.log(userobject.name);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
            navigate("/mainpage");
        }
    });
    useEffect(() => {
        async function fetchEmployeesOfAdmin() {
            console.log("Inside fetching employees of particular admin");
            const responses = getEmployeesOfAdmin(location.state.gdo_id);
            responses.then((response) => setEmployees(response));
        }
        fetchEmployeesOfAdmin();
    }, []);
    return (
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
            <Logout />
            {employees.length == 0 ? <span>No Employees under you</span> :
                <div> <h3 className="click-links">Employees under {location.state.name} of {location.state.gdo} </h3>
                    <table>

                        <thead>
                            <th>Username</th>
                            <th>View Goals</th>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr>
                                    <td>{employee.user.name}</td>
                                    <td style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => {
                                        console.log(`employee id:${employee.id} ${employee.user.name}`);
                                        navigate("/viewgoals", { state: { id: employee.user.id, name: employee.user.name } })
                                    }}
                                    >View Goals</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
            <div className="click-links" style={{ textDecoration: "underline", cursor: "pointer", marginTop: "20px" }} onClick={() => {
                console.log("Inside viewing other admins");
                navigate(-1);
            }}>View Other Admins</div>

        </body>
    )
}
export default Adminsadmin;