import "./RecipeCards.css";
import Lunch from "../../assets/images/lunch.png";
import Clock from "../../assets/images/clock.png";

export default function LunchRecipeCard() {
  return (
    <div className="each-recipe-container">
      <div className="title-container">
        <div className="recipe-title">Chili Mac and Cheese</div>
        <img src={Lunch} alt="Lunch icon" width={60} />
      </div>
      <div className="recipe-content">
        <div className="recipe-type">
          <div>Type: Lunch</div>
          <div className="time">
            <img src={Clock} alt="Clock icon" width={30} />
            <p>30 minutes</p>
          </div>
        </div>
        <div className="recipe-part">
          <div className="main-text">Ingredients:</div>
          <ul>
            <li>1 tbsp olive oil</li>
            <li>1 tbsp olive oil</li>
            <li>1 tbsp olive oil</li>
            <li>1 tbsp olive oil</li>
          </ul>
        </div>
        <div className="recipe-part">
          <div className="main-text">Directions:</div>
          <p>
            Heat olive oil in a large skillet or Dutch oven over medium-high
            heat.
          </p>
          <p>
            Add garlic, onion and ground beef together. Cook 3-5 minutes until
            browned, crumbling the beef as it cooks. Drain excess fat from pan.
          </p>
          <p>
            Stir in chicken broth, tomatoes, beans, chili powder, cumin, salt
            and pepper.
          </p>
          <p>
            Bring to a simmer and stir in pasta. Bring to a boil, then cover,
            reduce heat and simmer until pasta is cooked through, about 13
            minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
