import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../api";
import "./Register.css";

export default function SignUp() {
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
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit">Register</button>
        <p>{error}</p>
      </form>
    </div>
  );
}
