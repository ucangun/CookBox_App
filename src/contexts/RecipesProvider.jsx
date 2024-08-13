import { createContext, useState } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const APP_ID = "633135cc";
const APP_KEY = "4e352366e820300289821caacf64d308";
const BASE_URL = "https://api.edamam.com/search?";

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");

  const url = `${BASE_URL}&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}${
    mealType === "" ? "" : `&mealType=${mealType}`
  }`;

  const getRecipes = async () => {
    const { data } = await axios.get(url);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
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
