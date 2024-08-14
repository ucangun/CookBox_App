import Nav, { Navlinks } from "./style/NavbarStyle";
import Logo from "./style/LogoStyle";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Nav>
      <Logo src={logo} alt="logo" onClick={() => navigate("/")} />
      <Navlinks>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "orangered" : "inherit",
            textDecoration: "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          style={({ isActive }) => ({
            color: isActive ? "orangered" : "inherit",
            textDecoration: "none",
          })}
        >
          Search
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "orangered" : "inherit",
            textDecoration: "none",
          })}
        >
          About
        </NavLink>
        <Button secondary="true" onClick={() => navigate("/login")}>
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
      </Navlinks>
    </Nav>
  );
};

export default Navbar;
