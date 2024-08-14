import { useContext } from "react";
import Button from "./Button";
import SearchContainer, {
  SearchInput,
  SearchSelect,
} from "./style/SearchBoxStyle";
import { RecipesContext } from "../contexts/RecipesProvider";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const { query, setQuery, mealType, setMealType, handleSubmit } =
    useContext(RecipesContext);
  const { isAuthenticated } = useContext(AuthContext);
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
        <option value="">Search Category</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="brunch">Brunch</option>
        <option value="teatime">TeaTime</option>
      </SearchSelect>
      <Button
        secondary="true"
        onClick={(e) =>
          isAuthenticated ? handleSubmit(e) : navigate("/login")
        }
      >
        Search
      </Button>
    </SearchContainer>
  );
};

export default SearchBox;
