import React from 'react';
import { Link } from 'react-router-dom';
import './Login';


const Home = () => {
  return (
    <div>
      <h1>Taste BUD</h1>
      <nav>
        <div className="login">
          <Link to="/Login">
            <button id="loginButton">Login</button>
          </Link>
        </div>
      </nav>
      <header>
        <div className="header">
          <img src="./images/cover.png" alt="Cover" />
        </div>
        <div className="search-container">
          <h2>Search recipes by title or ingredients!</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>&#128269;</button>
          </div>
        </div>
        <div className="menu-toggle" id="menuToggle">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="side-menu" id="sideMenu">
          <h1 id="chef">
            <img
              src="./images/navbar chef.png"
              style={{ width: '70px', height: '70px' }}
              alt="Navbar Chef"
            />
          </h1>
          <hr width="60%" color="#333" />
          <ul>
            <li><img src="./images/breakfast.png" alt="Breakfast" /><a href="#">Breakfast</a></li>
            <li><img src="./images/lunch.png" alt="Lunch" /><a href="#">Lunch</a></li>
            <li><img src="./images/dinner.png" alt="Dinner" /><a href="#">Dinner</a></li>
            <li><img src="./images/dessert.png" alt="Dessert" /><a href="#">Dessert</a></li>
            <hr width="60%" color="#333" />
            <li>
              <img src="./images/submit.png" alt="Submit Recipe" /><a href="#">Submit Recipe</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;
