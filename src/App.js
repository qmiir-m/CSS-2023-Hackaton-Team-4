import './App.css';
import Recipes from './Components/Recipes'
import SearchBar from './Components/SearchBar';

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <Recipes />
      
    </div>
  );
}

export default App;
