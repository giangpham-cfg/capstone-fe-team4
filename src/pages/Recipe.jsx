import { recipe } from "../lib";
import "./Recipe.css";
import { useNavigate } from "react-router-dom";

export default function Recipe() {
  const navigate = useNavigate();

  return (
    <div className="recipe-container">
      <div className="first-column-container column">
        <div className="recipe-name">{recipe.name}</div>
        <div className="back-button-container">
          <button
            onClick={() => navigate("/types/lunch")}
            className="back-button"
          >
            &lt; Back to Recipes
          </button>
        </div>
        <div className="image-container">
          <div className="recipe-image">{recipe.image}</div>
        </div>
      </div>
      <div className="second-column-container column">
        <div className="">
          <span className="">Type:</span>

          {/* {types.map((type, index) => ( */}
          <span
            // key={index}
            style={{ marginLeft: "5px" }}
          >
            {recipe.type}
          </span>
        </div>

        <div className="flex items-center mb-10">
          <span>⏰</span>
          <span style={{ marginLeft: "5px" }}>{recipe.time}</span>
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
          {recipe.directions.map((direction) => (
            <li key={direction} className="">
              {direction}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
