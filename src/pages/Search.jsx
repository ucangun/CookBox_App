import React from "react";
import Container from "../components/style/ContainerStyle";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const Search = () => {
  return (
    <Container>
      <Navbar />
      <SearchBox />
    </Container>
  );
};

export default Search;
