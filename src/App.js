import { useState } from 'react';
import FoodContainer from './FoodContainer';
import foodsJSON from './foods.json';
import AddFood from './AddFood';
import SearchInput from './SearchInput';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  const [searchTerm, setSearchTerm] = useState('');

  function handleNewFood(newFood) {
    setFoods([...foods, newFood]);
  }

  function handleDeleteFood(name) {
    const newFoods = foods.filter((food) => {
      if (food.name === name) {
        return false;
      }
      return true;
    });

    setFoods(newFoods);
  }

  return (
    <>
      <AddFood handleNewFood={handleNewFood} />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FoodContainer
        foods={foods.filter((food) =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        handleDeleteFood={handleDeleteFood}
      />
    </>
  );
}

export default App;
