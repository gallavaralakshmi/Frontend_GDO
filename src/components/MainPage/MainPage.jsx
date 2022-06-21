import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useState } from "react";
const MainPage = () => {
  const [type, setType] = useState("login");
  return (
    <body style={{ backgroundImage: "url('https://uploads-ssl.webflow.com/5f6e202c72c71024f95ace21/60eb5e05ee50047b7d61c3b6_goal-setting-tracking-system-notion.jpg')" }}>
      <div >
        {
          type == "login" ? <Login setType={setType} /> : <Register setType={setType} />
        }
      </div>

    </body>
  )

}
export default MainPage;