import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/style/ContainerStyle";
import LoginBox from "../components/LoginBox";

const Login = () => {
  return (
    <Container>
      <Navbar />
      <LoginBox />
    </Container>
  );
};

export default Login;
