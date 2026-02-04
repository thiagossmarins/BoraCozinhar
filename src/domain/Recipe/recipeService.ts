import { recipeAPI } from './recipeAPI'
import { Recipe } from './recipeType';

async function getList(): Promise<Recipe[]> {
  const response = await recipeAPI.getList();
  return response;
}

export const recipeService = {
  getList
}