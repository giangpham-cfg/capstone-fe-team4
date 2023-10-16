import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../api";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setToken } = useOutletContext();

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const res = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await res.json();

    if (!info.success) {
      return setError(info.error);
    }

    setToken(info.token);
    localStorage.setItem("token", info.token);

    navigate("/");
  }

  return (
    <div>
      <div>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button>Register</button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}
