import React from "react";
import { useState } from 'react';
import { Nav } from "react-bootstrap";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
const Header=()=>{

    <>
   
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">SignUp</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Login</Nav.Link>
    </Nav.Item>
  </Nav>
    </>
}
export default Header;