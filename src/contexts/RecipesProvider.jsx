import { createContext, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const APP_ID = "633135cc";
const APP_KEY = "4e352366e820300289821caacf64d308";

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");

  const getRecipes = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

    const { data } = await axios.get(url);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query && !mealType) {
      alert("Please enter a recipe name and select a meal category");
    } else {
      getRecipes();
    }
  };

  return (
    <RecipesContext.Provider
      value={{ recipes, query, setQuery, mealType, setMealType, handleSubmit }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
