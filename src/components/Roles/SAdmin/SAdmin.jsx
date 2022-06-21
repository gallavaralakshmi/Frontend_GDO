import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../Home/Home";
import MainPage from "../../MainPage/MainPage";
import Goals from "../Goals/Goals";
const SAdmin = () => {
    const navigate = useNavigate();
    return (
        <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
          {localStorage.getItem("authToken")?
          <div>
            <Goals />
            <p className="click-links" style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                    navigate("/viewadmins")
                }}
            >View All Admins</p>
            </div>
            :<MainPage/>}
        </body>
    )
}
export default SAdmin;