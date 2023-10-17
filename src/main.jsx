import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "./pages/submitCss.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Recipe from "./pages/Recipe.jsx";
import RecipeType from "./pages/RecipeType.jsx";
import LunchRecipeCard from "./components/recipes/LunchRecipeCard.jsx";
import SubmitPage from "./pages/SubmitPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "recipes/:recipeId", element: <Recipe /> },
      { path: "types/lunch", element: <LunchRecipeCard /> },
      { path: "submit", element: <SubmitPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
