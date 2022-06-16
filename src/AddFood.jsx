import { useState } from 'react';
import { Divider, Input, Button } from 'antd';

const AddFood = ({ handleNewFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = { name, image, calories, servings };

    handleNewFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food</Divider>
      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />
      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(event) => {
          setCalories(event.target.value);
        }}
        min="0"
      />
      <label>Servings</label>
      <Input
        min="0"
        value={servings}
        type="number"
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />
      <Button htmlType="submit">Create</Button>
    </form>
  );
};

export default AddFood;
