import React from "react";
import Navbar from "../components/Navbar";
import HomeContainer from "../components/style/ContainerStyle";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Header />
      <Button>Get Started !</Button>
    </HomeContainer>
  );
};

export default Home;
