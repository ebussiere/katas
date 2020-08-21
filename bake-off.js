const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let passedRecipes = '';
  for (const recipe of recipes) {
    let bakeryACheck = ingredientCheck(bakeryA, recipe);
    let bakeryBCheck = ingredientCheck(bakeryB, recipe);
    if (bakeryACheck && bakeryBCheck) {
      passedRecipes = passedRecipes + recipe.name;
    }
  }
  return passedRecipes;
};

function ingredientCheck(bakery, recipe) {
  let hasIngredient = false;
  for (let b = 0; b < bakery.length; b++) {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      if (bakery[b] === recipe.ingredients[i]) {
        hasIngredient = true;
      }
    }
  }
  return hasIngredient;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
