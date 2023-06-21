import { RecipeService } from "./RecipeService.js";

export class InputSearch {
  constructor() {
    this.recipeService = new RecipeService();

    this.recipeData = this.recipeService.getRecipe();
    this.recipesFromInput = [];
  }

  // get input entry, filter data using "for of" loop
  filter(entry) {
    let filteredRecipe = [];
    for (let i of this.recipeData) {
      if (
        i._name?.toLowerCase().includes(entry.toLowerCase()) ||
        i._description?.toLowerCase().includes(entry.toLowerCase()) ||
        i._ingredients?.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(entry.toLowerCase())
        )
      )
        filteredRecipe.push(i);
    }
    this.recipesFromInput = [];
    filteredRecipe.map((recipe) => this.recipesFromInput.push(recipe));
  }
}

