import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType={
    favorites: Recipe[], 
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType>=(set,get)=>({
    favorites:[],
    handleClickFavorite: (recipe) => {
        //Thats how we use the get, to call other variables from the same Slice
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
            //if its already and the user cli9ck again it remove from favorites
            set({
                favorites: [...get().favorites.filter(favorite => favorite.idDrink!==recipe.idDrink )]
            })
        }else{
            set({
                favorites: [...get().favorites, recipe]
            })
        }
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})