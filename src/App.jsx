import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { API } from "./api";
import { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes() {
    const res = await fetch(`${API}/recipes`);
    const info = await res.json();
    setRecipes(info.recipes);

    console.log("check", info);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet
        context={{
          recipes,
        }}
      />
    </>
  );
}
