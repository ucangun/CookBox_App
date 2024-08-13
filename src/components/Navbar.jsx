import React from "react";
import Nav, { Navlink } from "./style/NavbarStyle";
import Logo from "./style/LogoStyle";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo src={logo} alt="logo" onClick={() => navigate("/")} />
      <Navlink>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/search")}>Search</p>
        <p onClick={() => navigate("/login")}>Login</p>
      </Navlink>
    </Nav>
  );
};

export default Navbar;
