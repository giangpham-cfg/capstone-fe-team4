import React from "react";
import "./RecipeCards.css";
import Chef from "../assets/chef.png";
import Clock from "../assets/clock.png";
import { Link, useOutletContext, useParams } from "react-router-dom";

export default function RecipeCard() {
  const { recipes } = useOutletContext();
  const { name } = useParams();
  const filteredRecipes = recipes.filter((recipe) => recipe.mealTime === name);
  console.log("check filtered", filteredRecipes);
  return (
    <div className="all-recipes-container">
      {filteredRecipes.map((recipe) => (
        <Link
          style={{ textDecoration: "none", color: "#1c1c1c" }}
          key={recipe.id}
          to={`/recipes/${recipe.id}`}
        >
          <div className="each-recipe-container">
            <div className="title-container">
              <div className="recipe-title">{recipe.name}</div>
              <img src={Chef} alt="Lunch icon" width={60} />
            </div>
            <div className="recipe-content">
              <div className="recipe-type">
                <div>Type: {recipe.mealTime}</div>
                <div className="time">
                  <img src={Clock} alt="Clock icon" width={30} />
                  <p>{recipe.cookTime}</p>
                </div>
              </div>
              <div className="recipe-part">
                <div className="main-text">Ingredients:</div>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="recipe-part">
                <div className="main-text">Directions:</div>
                {recipe.instruction.map((step, index) => (
                  <p key={index}>{step}</p>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
