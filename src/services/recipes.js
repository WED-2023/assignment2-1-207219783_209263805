// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  const totalRecipes = recipe_preview.length;

  // for(let i = 0; i < amount; i++){
  //   recipes.push(recipe_preview);
  // }
  for (let i = 0; i < amount; i++) {
    // const randomIndex = Math.floor(Math.random() * totalRecipes);
    recipes.push(recipe_preview[i]);
  }

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
  return { data: { recipe: recipe_full_view } };
}

