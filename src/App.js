import { Helmet } from "react-helmet";
import { Searchbar } from "./SearchBar.js";
import Header from "./Header.js";
import { useState } from "react";
import { RecipesList } from "./RecipesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Helmet>
        <title>Strona z Przepisami</title>
      </Helmet>
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;