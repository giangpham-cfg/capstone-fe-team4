// import { recipe } from "../lib";
import "./Recipe.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api";

import img from "../assets/dinner.png";

export default function Recipe() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState();

  async function fetchRecipe() {
    const res = await fetch(`${API}/recipes/${recipeId}`);
    const info = await res.json();
    console.log(info.recipe);
    if (info.success) {
      setRecipe(info.recipe);
    }
  }

  useEffect(() => {
    fetchRecipe();
  }, []);

  //navigation logic getting the mealtime from recipes obj and using that to navigate
  const handleGoBack = () => {
    if (recipe && recipe.mealTime) {
      const mealTime = recipe.mealTime;
      navigate(`/types/${mealTime}`);
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-container">
      <div className="first-column-container column">
        <div className="recipe-name">{recipe.name}</div>
        <div className="back-button-container">
          <button onClick={handleGoBack} className="back-button">
            &lt; Back to Recipes
          </button>
        </div>
        <div className="image-container">
          <div className="recipe-image">
            <img src={img} />
          </div>
        </div>
      </div>
      <div className="second-column-container column">
        <div className="">
          <span className="">Meal:</span>
          <span style={{ marginLeft: "5px" }}>{recipe.mealTime}</span>
        </div>
        <div className="flex items-center mb-10">
          <span>⏰</span>
          <span style={{ marginLeft: "5px" }}>{recipe.cookTime}</span>
        </div>

        <div className="">
          <div className="bold-text">Ingredients:</div>
          <ul className="">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="third-column-container column">
        <div className="bold-text">Directions:</div>
        <ol>
          {recipe.instruction.map((direction) => (
            <li key={direction} className="">
              {direction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
