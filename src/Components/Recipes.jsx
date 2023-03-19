import React, { useState } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    axios.get("https://api.api-ninjas.com/v1/recipe?query=", {
      headers: {
        "X-Api-Key": "P+gKnOUU1wup1ghmrQJ7Pw==jG1HW9CLi3Jl8tTF"
      }
    }).then(response => {
      console.log(response.data);
      setRecipes(response.data)
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
  <div className="recipes">
  {recipes && (
    <div className="lista">
      {recipes.map((recipe) => (
        <div className="recipe">
          <div className="country-name">
            <h3>{recipe.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )}
  <button onClick={fetchRecipes}>Submmit</button>
</div>
);
}

export default RecipeSearch;
