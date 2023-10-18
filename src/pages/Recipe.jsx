// import { recipe } from "../lib";
import "./Recipe.css";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../api";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import img from "../assets/dinner.png";

export default function Recipe() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [recipe, setRecipe] = useState();
  const { user, token, fetchRecipes } = useOutletContext();
  console.log("check recipeId", recipeId);

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

  const handleComment = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/recipes/${recipeId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text,
      }),
    });
    const info = await res.json();
    if (!info.success) {
      return setError("You must login to comment on a recipe!");
    }
    fetchRecipe();
    setText("");
  };

  //navigation logic getting the mealtime from recipes obj and using that to navigate
  const handleGoBack = () => {
    if (recipe && recipe.mealTime) {
      const mealTime = recipe.mealTime;
      navigate(`/types/${mealTime}`);
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <>
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
      <div className="comment-box">
        <p>
          Comment as
          <span
            style={{
              color: "#0279d3",
              fontWeight: "600",
              paddingLeft: "5px",
            }}
          >
            {user.username}
          </span>
        </p>
        <form className="comment-form" onSubmit={handleComment}>
          <textarea
            className="input-text-comment"
            type="text"
            placeholder="What are your thoughts?"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="comment-button">Comment</button>
        </form>
        <div className="error-post">{error}</div>
      </div>
      <div className="all-comment-container">
        {recipe &&
          recipe.comments.map((comment) => (
            <div className="user-comment">
              <div style={{ fontWeight: "600" }}>{comment.user.username}</div>
              <div className="text text-comment">{comment.text}</div>
            </div>
          ))}
      </div>
    </>
  );
}
