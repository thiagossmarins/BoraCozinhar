import { mockRecipes } from "./mockRecipes";

async function getList() {
  return mockRecipes;
}

export const recipeAPI = {
  getList
}