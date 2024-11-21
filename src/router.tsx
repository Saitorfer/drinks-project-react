import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import IndexPage from "./pages/IndexPage";
//import FavoritesPage from './pages/FavoritesPage'
import Layout from "./layouts/Layout";

//improvement for Routes pages
const IndexPage = lazy(() => import("./pages/IndexPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              //can use a loader animation here
              <Suspense fallback="Charging">
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/favorites"
            element={
              //can use a loader animation here
              <Suspense fallback="Charging">
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
