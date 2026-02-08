import { mockRecipes } from "./mockRecipes";

async function getList() {
  return mockRecipes;
}

async function getById(id: string) {
  const recipe = mockRecipes.find(recipe => recipe.id === id);

  if (!recipe) {
    throw new Error(`Recipe with id ${id} not found`);
  }

  return recipe;
}

export const recipeAPI = {
  getList,
  getById
}