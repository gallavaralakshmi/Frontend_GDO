
import React from "react";
import Home from "../../Home/Home";
import MainPage from "../../MainPage/MainPage";
import Goals from "../Goals/Goals";



const Employee = () => {

  return (
  
    <body style={{ backgroundImage: "url('https://www.monash.edu/__data/assets/image/0011/2429183/geometric-gradient-blue-white-pink-banner.jpg') ", minHeight: "100vh" }}>
      {localStorage.getItem("authToken")?
      <Goals />
  :<MainPage/>}
    </body>
  )
}
export default Employee;