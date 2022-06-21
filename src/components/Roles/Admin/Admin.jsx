import React from "react";
import { useLocation } from "react-router-dom";
import AdminSAdmin from "../AdminSAdmin/Admin_Employee";
import Goals from "../Goals/Goals";
import Home from "../../Home/Home";
import MainPage from "../../MainPage/MainPage";

const Admin = () => {
    const location=useLocation();
    //const userobject = JSON.parse(sessionStorage.getItem("userdetails"));
    return (
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
            {localStorage.getItem("authToken")?
            <>
            <Goals />
            <AdminSAdmin  />
            </>
            :<MainPage/>}
        </body>
    )
}
export default Admin;