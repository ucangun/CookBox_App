import React from "react";
import { CardImage, CardTitle, SearchCard } from "./style/SearchResultStyle";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <SearchCard>
      <CardTitle>{item.recipe.label}</CardTitle>
      <CardImage src={item.recipe.image} alt="food" />
      <Button
        secondary
        onClick={() => navigate("/search/details", { state: { item } })}
      >
        View Details
      </Button>
    </SearchCard>
  );
};

export default SearchItem;
