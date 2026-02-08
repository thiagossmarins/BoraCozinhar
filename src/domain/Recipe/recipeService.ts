import { recipeAPI } from './recipeAPI'
import { Recipe } from './recipeType';

async function getList(): Promise<Recipe[]> {
  const response = await recipeAPI.getList();
  return response;
}

async function getById(id: string): Promise<Recipe> {
  const response = await recipeAPI.getById(id);
  return response;
}

export const recipeService = {
  getList,
  getById
}