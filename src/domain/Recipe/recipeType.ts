export interface Recipe {
  id: string,
  title: string,
  description: string,
  category: string,
  prepTime: number,
  cookTime: number,
  servings: number,
  difficulty: string,
  imageUrl: string,
  ingredients: string[],
  instructions: string[],
  isFavorite: boolean,
}