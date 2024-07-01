import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string()
})
//singular
export const DrinkAPIResponse= z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string()
})
//plural
export const DrinksAPIResponse= z.object({
  drinks: z.array(DrinkAPIResponse)
})