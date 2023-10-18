import React, { useState } from "react";
import { API } from "../lib";
import "./submitCss.css";
export default function SubmitPage() {
  const [name, setName] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [ingredients, setIngredients] = useState([""]); // Start with one empty ingredient
  const [instruction, setInstruction] = useState("");
  const [instructions, setInstructions] = useState([""]); // Start with one empty instruction

  async function handleSubmit(e) {
    e.preventDefault();
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
    if (info.success) {
      console.log("Failed to submit the post.");
    } else {
      setName("");
    }
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
    setInstructions([...instructions, ""]);
  };
  const handleInstructionChange = (index, value) => {
    const newInstruction = [...instructions];
    newInstruction[index] = value;
    setInstructions(newInstruction);
  };
  const handleRemoveInstruction = (index) => {
    const newInstruction = [...instructions];
    newInstruction.splice(index, 1);
    setInstructions(newInstruction);
  };
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
        {/* Other form fields here... */}
        <div>
          <p className="paragrap">Meal-Time</p>
          <div className="recipes-type">
            <div style={{ display: "flex" }}>
              {/* put name its mean you can select only 1 thing */}
              <input type="radio" name="recipes" />
              <p>BREAKFAST</p>
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="recipes" />
              <p>LUNCH</p>
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="recipes" />

              <p>DINNER</p>
            </div>{" "}
            <div style={{ display: "flex" }}>
              <input type="radio" name="recipes" />
              <p>DESSERT</p>
            </div>
          </div>
        </div>
        <div>
          <p className="paragrap">Total Time</p>
          <input
            className="instrctionInput-container"
            type="text"
            name=""
            id=""
            placeholder="How long to take to make the food"
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
          {instructions.map((instruction, index) => (
            <div>
              <div key={index}>
                <div style={{ display: "flex" }}>
                  <span className="span-index">{index + 1}.</span>
                  <input
                    className="instrctionInput-container"
                    value={instruction}
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
