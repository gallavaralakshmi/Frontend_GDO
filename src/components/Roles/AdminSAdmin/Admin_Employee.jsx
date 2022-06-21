import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getEmployeesOfAdmin } from "./adminsadminapi";
const AdminSAdmin = (props) => {
   
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const location=useLocation();
    console.log(`Inside admin employee:${location.state.id} and ${location.state.name}`)
    useEffect(() => {
        if (localStorage.getItem("authToken") === null) {
            navigate("/mainpage");
        }
    });
    useEffect(() => {
        async function fetchEmployeesOfAdmin() {
            console.log("Inside fetching employees of particular admin");
            const responses = getEmployeesOfAdmin(location.state.gdo_id);
            console.log(`responses of get admin:${responses}`)
            responses.then((response) => setEmployees(response));
        }
        fetchEmployeesOfAdmin();
    }, []);
    return (
        <>
            {employees.length == 0 ? <span>No Employees under you</span> :
                <div> <h3 className="click-links">Employees under {location.state.name} are:</h3>
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
                                        console.log(`employee id:${employee.user.id} ${employee.user.name}`);
                                        navigate("/viewgoals", { state: { id: employee.user.id, name: employee.user.name } })
                                    }}
                                    >View Goals</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
           
        </>
    )
}
export default AdminSAdmin;