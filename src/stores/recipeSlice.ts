import { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService";
import { Categories, Drinks,Drink, searchFilter, Recipe } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: searchFilter) => Promise<void>;
  selectRecipe: (id:Drink['idDrink']) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  drinks: {
    drinks: [],
  },
  //We put it like that because is a big object
  selectedRecipe: {} as Recipe,


  fetchCategories: async () => {
    const categories = await getCategories();

    set({
      categories,
    });
  },

  searchRecipes: async (searchFilters) => {
    const drinks = await getRecipes(searchFilters);
    set({
      drinks,
    });
  },

  selectRecipe: async (id)=>{
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe,
    });
  }
});
