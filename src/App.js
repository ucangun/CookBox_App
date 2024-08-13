import RecipesProvider from "./contexts/RecipesProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <RecipesProvider>
        <AppRouter />
      </RecipesProvider>
    </div>
  );
}

export default App;
