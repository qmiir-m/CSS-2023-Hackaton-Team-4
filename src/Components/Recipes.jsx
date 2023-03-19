import React, { useState } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  

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
</div>
);
}

export default RecipeSearch;
