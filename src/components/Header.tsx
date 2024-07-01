import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const { pathname } = useLocation();

  //we verify if we are in the index
  const isHome = useMemo(() => pathname === "/", [pathname]);
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);

  //we fetch the categories just when the class is loaded
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="logo.svg" alt="logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to="favorites"
            >
              Favorites
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-4">
            <div className="space-y-4">
              <label
                htmlFor="ingredients"
                className="block text-white uppercase font font-extrabold text-lg"
              >
                Name or Ingredients
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredients"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Name or Ingredients, Ejem. Vodka, Pineapple"
              ></input>
            </div>

            <div className="space-y-4">
              <label
                htmlFor="ingredients"
                className="block text-white uppercase font font-extrabold text-lg"
              >
                Category
              </label>
              <select
                id="category"
                name="ingredients"
                className="p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">-- Select Category --</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search Drinks"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white
                    font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
