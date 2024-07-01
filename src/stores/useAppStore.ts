import { create } from "zustand";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";


//the ...a take a copy of all the posible arguments, gets, sets, etc..
export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
})));
