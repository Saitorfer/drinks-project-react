import { create } from "zustand";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";


//the ...a take a copy of all the posible arguments, gets, sets, etc..
export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
})));
