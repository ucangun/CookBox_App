import React from "react";
import Navbar from "../components/Navbar";
import HomeContainer from "../components/style/ContainerStyle";
import Header from "../components/Header";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Header />
    </HomeContainer>
  );
};

export default Home;
