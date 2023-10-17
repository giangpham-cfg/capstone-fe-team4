import React, { useState } from "react";
import chef from "../assets/chef-icon.png";
import "./navbarCss.css";
// import SideBar from "./components/sidebar/SideBar";
// import Content from "./components/content/Content";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="icon-container">
        <img src={chef} style={{ width: "50px" }} />
        <h1>Taste BUD</h1>
      </div>

      <div className="nav-login" style={{ display: "flex", gap: "30px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{ width: "100px", height: "30px" }}
        >
          {" "}
          Login
        </button>
      </div>
    </div>
  );
}
