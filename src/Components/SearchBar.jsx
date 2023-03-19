import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

const SearchRecipeResults = ({ results }) => {
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}> {result.title}</li>
      ))}
    </ul>
  );
};

const SearchIngredientResults = ({ nutritionResults }) => {
    return (
      <ul>
        {nutritionResults.map((result, index) => (
          <li key={index}> {result.calories}</li>
        ))}
      </ul>
    );
  };

const App = () => {
  const [results, setResults] = useState([]);
  const [nutritionResults, setNutritionResults] = useState([])

    const handleRecipeSearch = (searchTerm) => {
        axios
        .get(`https://api.api-ninjas.com/v1/recipe?query=${searchTerm}`, {
            headers: {
            "X-Api-Key": "P+gKnOUU1wup1ghmrQJ7Pw==jG1HW9CLi3Jl8tTF"
            }
        })
        .then((response) => {
            setResults(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const handleIngredientSearch = (searchTerm) => {
          axios
          .get(`https://api.api-ninjas.com/v1/nutrition?query=${searchTerm}`, {
            headers: {
              "X-Api-Key": "P+gKnOUU1wup1ghmrQJ7Pw==jG1HW9CLi3Jl8tTF"
            }
          })
          .then((response) => {
            console.log(response);
            setNutritionResults(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    }

    return (
        <div>
            <p>Search Recipes</p>
            <SearchBar onSearch={handleRecipeSearch} />
            <SearchRecipeResults results={results}/>

            <p>Nutrition Value</p>
            <SearchBar onSearch={handleIngredientSearch} />
            <SearchIngredientResults nutritionResults={nutritionResults}/>
        </div>
    );
};

export default App;