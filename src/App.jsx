import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { API } from "./api";
import { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  async function fetchRecipes() {
    const res = await fetch(`${API}/recipes`);
    const info = await res.json();
    setRecipes(info.recipes);

    console.log("check", info);
  }

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
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
      <Navbar />
      {user.username ? <p>Welcome, {user.username}!</p> : null}
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
