import Nav, { Navlink } from "./style/NavbarStyle";
import Logo from "./style/LogoStyle";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo src={logo} alt="logo" onClick={() => navigate("/")} />
      <Navlink>
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/search")}>Search</p>
        <Button secondary onClick={() => navigate("/login")}>
          Login
        </Button>
      </Navlink>
    </Nav>
  );
};

export default Navbar;
