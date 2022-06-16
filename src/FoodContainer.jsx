import FoodBox from './FoodBox';

const FoodContainer = ({ foods, handleDeleteFood }) => (
  <div
    style={{
      display: 'grid',
      gridTemplate: '1fr / 1fr 1fr 1fr',
      gridAutoRows: '1fr',
      gap: '15px',
      margin: '15px',
    }}
  >
    {foods.map((food) => (
      <FoodBox
        key={food.name}
        food={food}
        handleDeleteFood={handleDeleteFood}
      />
    ))}
  </div>
);

export default FoodContainer;

