import React from "react";
import "./RecipeCards.css";
import Chef from "../assets/chef.png";
import Clock from "../assets/clock.png";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { API } from "../api";

export default function RecipeCard() {
  const { recipes, user, token, fetchRecipes } = useOutletContext();
  const { name } = useParams();
  const filteredRecipes = recipes.filter((recipe) => recipe.mealTime === name);
  // console.log("check filtered", filteredRecipes);

  const handleDeleteRecipe = async (recipeId) => {
    console.log("check check check");
    const res = await fetch(`${API}/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      console.log("check delete", info.success);
      fetchRecipes();
    }
  };

  return (
    <div className="home-page-container">
      <div className="all-recipes-container">
        {filteredRecipes.map((recipe) => (
          <div className="each-recipe-container">
            <div className="title-container">
              <div className="recipe-title">{recipe.name}</div>
              <div className="picture-and-delete">
                <img src={Chef} alt="Lunch icon" width={60} />
                {user && user.id === recipe.user.id ? (
                  <div
                    className="function-icon"
                    onClick={() => handleDeleteRecipe(recipe.id)}
                  >
                    <RiDeleteBin6Line />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <Link
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
            >
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
