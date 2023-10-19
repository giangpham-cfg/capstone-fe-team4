import React from "react";
import chef from "../assets/chef-icon.png";
import "./navbarCss.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ user, isLoggedIn, logout }) {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
<div className="icon-container">
  <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="no-underline">
    <div className="icon-text-container">
      <img src={chef} style={{ width: "50px" }} alt="chef-icon" />
      <h1>TasteBUD</h1>
    </div>
  </a>
</div>

      <div className="nav-login" style={{ display: "flex", gap: "30px" }}>
        {isLoggedIn ? (
          <button onClick={logout} style={{ width: "100px", height: "30px" }}>
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            style={{ width: "100px", height: "30px" }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
