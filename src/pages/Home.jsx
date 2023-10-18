import React from "react";
import { useNavigate } from "react-router-dom";
import MenuPic from "../../images/navbar chef.png";
import { FiLogIn } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";

function Box({ img, title }) {
  return (
    <div className="box">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default function Home() {
  const { user } = useOutletContext();
  const mealTime = ["BREAKFAST", "LUNCH", "DINNER", "DESSERT"];
  const navigate = useNavigate();

  const boxes = [
    { img: "https://i.pinimg.com/736x/63/c0/09/63c009d72d0648100aee353553cc327a.jpg", title: "Fresh Ingredients" },
    { img: "https://th.bing.com/th/id/R.c5f870374207bbc62e92c444cf198d90?rik=7vtrfDhZ1FO6JQ&pid=ImgRaw&r=0", title: "Vegan Options" },
    { img: "https://th.bing.com/th/id/OIP.OAAYnB6IrQAQvkZVdw1WkgHaJQ?pid=ImgDet&rs=1", title: "Simple Meal Prep" },
    { img: "https://th.bing.com/th/id/R.456c471dd80d6a2751dede485fa86498?rik=y5P4mJ6Sl8yO2Q&pid=ImgRaw&r=0", title: "Global Flavors" },
    { img: "https://th.bing.com/th/id/R.515a17877af7d6834f148abe082c80c7?rik=%2fV%2b2Ba9BIpM6lg&pid=ImgRaw&r=0", title: "Seasonal Dishes" },
  ];

  return (
    <div className="home-page-container">
      <div className="content-container">
      <div className="mealtime-list-container">
        {user.username ? <p>Welcome, {user.username}!</p> : null}
        <img src={MenuPic} alt="" width={70} />
        <div className="type-container">
          {mealTime.map((item, index) => (
            <div
              className="type"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/types/${item}`)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="submit" onClick={() => navigate("/submit")}>
          <span>
            <FiLogIn />
          </span>
          Submit Recipe
        </div>
      </div>
      <div className="boxes-container">
        {boxes.map((box, index) => (
          <Box key={index} img={box.img} title={box.title} />
        ))}
      </div>
    </div>
    </div>
  );
}

