const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const createIngredients = document.querySelector('#ingredients')

const newIngredientItems = ingredient=> {
  const ingredientItems= document.createElement('li');
  ingredientItems.classList.add('item');
  ingredientItems.textContent= ingredient;
  return ingredientItems;
}

const ingredientsRef= ingredients.map(newIngredientItems);

createIngredients.append(...ingredientsRef)

