import Button from "./Button";
import SearchContainer, {
  SearchInput,
  SearchSelect,
} from "./style/SearchBoxStyle";

const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search recipes" />
      <SearchSelect>
        <option value="">Search Category</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="brunch">Brunch</option>
        <option value="teatime">TeaTime</option>
      </SearchSelect>
      <Button secondary>Search</Button>
    </SearchContainer>
  );
};

export default SearchBox;
