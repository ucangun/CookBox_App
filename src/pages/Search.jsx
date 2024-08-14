import React, { useContext } from "react";
import Container from "../components/style/ContainerStyle";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import SearchedList from "../components/SearchResult";
import { RecipesContext } from "../contexts/RecipesProvider";

const Search = () => {
  const { recipes } = useContext(RecipesContext);
  return (
    <Container>
      <Navbar />
      <SearchBox />
      {recipes.length > 0 && <SearchedList />}
    </Container>
  );
};

export default Search;
