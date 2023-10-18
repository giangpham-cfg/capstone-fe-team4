import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { API } from "./api";
import { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setToken("");
    setUser({});
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  

  async function fetchRecipes() {
    const res = await fetch(`${API}/recipes`);
    const info = await res.json();
    setRecipes(info.recipes);

    console.log("check", info);
  }

  async function fetchUser() {
    if (!token) {
      return;
    }

    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    console.log("info:", info);

    if (info.success) {
      setUser(info.user);
    }
  }

  useEffect(() => {
    fetchRecipes();
    fetchUser();
  }, [token]);

  return (
    <>
      <Navbar user={user} isLoggedIn={!!token} logout={logout} />
      <Outlet
        context={{
          recipes,
          fetchRecipes,
          token,
          setToken,
          user,
          setUser,
  
        }}
      />
    </>
  );
}