import React from "react";
import Container from "../components/style/ContainerStyle";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import DetailBox from "../components/DetailsBox";

const Details = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <Container>
      <Navbar />
      <DetailBox item={item} />
    </Container>
  );
};

export default Details;
