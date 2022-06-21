import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Logout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav className="justify-content-end" activeKey="logout"
        onSelect={(selectedKey) => {
          console.log(`selected ${selectedKey}`);
          if (selectedKey == "mainpage") {
           localStorage.removeItem("authToken")
            localStorage.removeItem("userdetails")
            navigate("/mainpage");

          }
        }}
      >
        <Nav.Item>
          <Nav.Link href="mainpage" style={{ fontSize: "22px" }}>Logout</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
export default Logout;