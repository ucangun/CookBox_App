import React, { useContext } from "react";
import SearchResultContainer from "./style/SearchResultStyle";
import SearchItem from "./SearchItem";
import { RecipesContext } from "../contexts/RecipesProvider";
import Spinner from "./Spinner";

const SearchResult = () => {
  const { recipes, loading } = useContext(RecipesContext);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <SearchResultContainer>
          {recipes.map((item, i) => (
            <SearchItem key={i} item={item} />
          ))}
        </SearchResultContainer>
      )}
    </>
  );
};

export default SearchResult;
