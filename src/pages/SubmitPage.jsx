import React, { useState, useEffect } from "react";
import { API } from "../api/index";
import "./submitCss.css";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function SubmitPage() {
  const [name, setName] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [ingredients, setIngredients] = useState([]); // Start with one empty ingredient
  const [instruction, setInstruction] = useState([]);

  const [mealTime, setMealTime] = useState(""); // Initialize mealTime
  const [cookTime, setCookTime] = useState(""); // Initialize cookTime
  const [error, setError] = useState("");
  const { token, fetchRecipes } = useOutletContext();
  // const navigate = useNavigate();

  if (!token) {
    return alert("Please login or register");
  }
  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    console.log({ name, ingredients, instruction, mealTime, cookTime });
    const res = await fetch(`${API}/recipes/submit`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        ingredients,
        instruction,
        mealTime,
        cookTime,
      }),
    });
    const info = await res.json();
    console.log(info);
    setError(info.error);
    if (!info.success) {
      return alert("Unsuccessful");
    } else {
      // setName("");
      // setMealTime("");
      // setCookTime("");
      // setTotalTime("");
      // setIngredients([]);
      // setInstruction([]);
      fetchRecipes();
    }
    // navigate("/");
  }

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  //Instruction
  const handleAddInstruction = () => {
    setInstruction([...instruction, ""]);
  };
  const handleInstructionChange = (index, value) => {
    const newInstruction = [...instruction];
    newInstruction[index] = value;
    setInstruction(newInstruction);
  };
  const handleRemoveInstruction = (index) => {
    const newInstruction = [...instruction];
    newInstruction.splice(index, 1);
    setInstruction(newInstruction);
  };
  console.log({ mealTime });
  return (
    <div className="submit-container">
      <h1>Submit Your Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="recipes-container">
          <p className="paragrap">Recipe Name</p>
          <input
            className="instrctionInput-container"
            value={name}
            type="text"
            placeholder="Enter recipes name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <p className="paragrap">Meal-Time</p>
          <div className="recipes-type">
            <label htmlFor="mealTimeSelect">Select Mealtime:</label>
            <select
              id="mealTimeSelect"
              className=""
              value={mealTime}
              onChange={(e) => setMealTime(e.target.value)}
              // onChange={(e) => setMealTime(e.target.value)}
            >
              <option disabled value="">
                Select Mealtime:
              </option>
              <option value="BREAKFAST">Breakfast</option>
              <option value="LUNCH">Lunch</option>
              <option value="DINNER">Dinner</option>
              <option value="DESSERT">Dessert</option>
            </select>
          </div>
        </div>
        <div>
          <p className="paragrap">Total Time</p>
          <input
            className="instrctionInput-container"
            type="text"
            name="cookTime"
            value={cookTime}
            id=""
            placeholder="How long to take to make the food"
            onChange={(e) => setCookTime(e.target.value)}
          />
        </div>

        <div>
          <p className="paragrap">Ingredients</p>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                value={ingredient}
                placeholder="Enter ingredient"
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className="instrctionInput-container"
              />
              <button
                // style={{ borderRadius: "50px", color: "red" }}
                onClick={() => handleRemoveIngredient(index)}
                className="ingredient-button"
              >
                x
              </button>
            </div>
          ))}
          <button
            style={{
              backgroundColor: "#fed7aa",
              borderRadius: "5px",
              border: "none",
              marginTop: "10px",
              height: "30px",
            }}
            onClick={handleAddIngredient}
          >
            ➕
          </button>
        </div>

        <div>
          <p className="paragrap">Instructions</p>
          {instruction.map((_instruction, index) => (
            <div key={index}>
              <div style={{ display: "flex" }}>
                <span className="span-index">{index + 1}.</span>
                <input
                  className="instrctionInput-container"
                  value={_instruction}
                  type="text"
                  placeholder="Add a step"
                  onChange={(e) =>
                    handleInstructionChange(index, e.target.value)
                  }
                />
                <button
                  className="instrction-button"
                  onClick={() => handleRemoveInstruction(index)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
          <button
            style={{
              backgroundColor: "none",
              borderRadius: "5px",
              border: "none",
              marginTop: "10px",
              height: "30px",
            }}
            onClick={handleAddInstruction}
          >
            ➕
          </button>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// {/* <label htmlFor="breakfast">
// {/* put name its mean you can select only 1 thing */}
// <input
//   id="breakfast"
//   value={"BREAKFAST"}
//   type="checkbox"
//   style={{ marginBottom: "15px" }}
//   onChange={onMealTimeChange}
//   checked={mealTime === "BREAKFAST"}
// />
// BREAKFAST
// </label>
// <label style={{ display: "flex" }}>
// <input
//   value={"LUNCH"}
//   type="radio"
//   style={{ marginBottom: "15px" }}
//   onChange={onMealTimeChange}
//   checked={mealTime === "LUNCH"}
// />
// <p style={{ padding: "5px" }}>LUNCH</p>
// </label>
// <label style={{ display: "flex" }}>
// <input
//   value={"DINNER"}
//   type="radio"
//   style={{ marginBottom: "15px" }}
//   onChange={onMealTimeChange}
//   checked={mealTime === "DINNER"}
// />

// <p style={{ padding: "5px" }}>DINNER</p>
// </label>
// <label style={{ display: "flex" }}>
// <input
//   value={"DESSERT"}
//   type="radio"
//   style={{ marginBottom: "15px" }}
//   onChange={onMealTimeChange}
//   checked={mealTime === "DESSERT"}
// />
// <p style={{ padding: "5px" }}>DESSERT</p>
// </label> */}
