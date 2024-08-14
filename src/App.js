import AuthProvider from "./contexts/AuthProvider";
import RecipesProvider from "./contexts/RecipesProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <RecipesProvider>
          <AppRouter />
        </RecipesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
