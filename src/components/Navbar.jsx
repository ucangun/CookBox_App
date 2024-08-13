import React from "react";
import Nav, { Navlink } from "./style/NavbarStyle";

const Navbar = () => {
  return (
    <Nav>
      <p>Logo</p>
      <Navlink>
        <p>About</p>
        <p>Search</p>
        <p>Login</p>
      </Navlink>
    </Nav>
  );
};

export default Navbar;
