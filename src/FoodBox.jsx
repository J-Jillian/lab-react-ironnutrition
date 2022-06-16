import { Button, Card, Divider } from 'antd';

const FoodBox = ({ food, handleDeleteFood }) => {
  return (
    <Card style={{ textAlign: 'center' }}>
      <p>{food.name}</p>
      <Divider />
      <img src={food.image} alt={food.name} style={{ height: '100px' }} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>Total calories: {food.calories * food.servings}</p>
      <Button type="primary" onClick={() => handleDeleteFood(food.name)}>
        Delete
      </Button>
    </Card>
  );
};

export default FoodBox;
