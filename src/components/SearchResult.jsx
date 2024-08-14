import React, { useContext } from "react";
import SearchResultContainer from "./style/SearchResultStyle";
import SearchItem from "./SearchItem";
import { RecipesContext } from "../contexts/RecipesProvider";

const SearchResult = () => {
  const { recipes } = useContext(RecipesContext);
  return (
    <SearchResultContainer>
      {recipes.map((item, i) => (
        <SearchItem key={i} item={item} />
      ))}
    </SearchResultContainer>
  );
};

export default SearchResult;
