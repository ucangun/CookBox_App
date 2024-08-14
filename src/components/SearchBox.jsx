import { useContext } from "react";
import Button from "./Button";
import SearchContainer, {
  SearchInput,
  SearchSelect,
} from "./style/SearchBoxStyle";
import { RecipesContext } from "../contexts/RecipesProvider";

const SearchBox = () => {
  const { query, setQuery, mealType, setMealType, handleSubmit } =
    useContext(RecipesContext);
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchSelect
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
      >
        {/* <option value="">Search Category</option> */}
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="brunch">Brunch</option>
        <option value="teatime">TeaTime</option>
      </SearchSelect>
      <Button secondary onClick={(e) => handleSubmit(e)}>
        Search
      </Button>
    </SearchContainer>
  );
};

export default SearchBox;
