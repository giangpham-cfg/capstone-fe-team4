// import React from "react";
// import { useNavigate } from "react-router-dom";
// import MenuPic from "../../images/navbar chef.png";
// import { FiLogIn } from "react-icons/fi";

// export default function Home() {
//   const mealTime = ["BREAKFAST", "LUNCH", "DINNER", "DESSERT"];
//   const navigate = useNavigate();
//   return (
//     <div className="home-page-container">
//       <div className="mealtime-list-container">
//         <img src={MenuPic} alt="" width={70} />
//         <div className="type-container">
//           {mealTime.map((item, index) => (
//             <div
//               className="type"
//               key={index}
//               style={{ cursor: "pointer" }}
//               onClick={() => navigate(`/types/${item}`)}
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//         <div className="submit" onClick={() => navigate("/submit")}>
//           <span>
//             <FiLogIn />
//           </span>
//           Submit Recipe
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuPic from "../../images/navbar chef.png";
import { FiLogIn, FiMenu } from "react-icons/fi";

export default function Home() {
  const mealTime = ["BREAKFAST", "LUNCH", "DINNER", "DESSERT"];
  const navigate = useNavigate();

  // Step 1: Create a state variable to control the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Step 2: Create a function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="home-page-container">
      {/* Step 3: Apply CSS classes based on the isSidebarOpen state */}
      <div className={`mealtime-list-container ${isSidebarOpen ? "open" : ""}`}>
        <div className="hamburger-icon" onClick={toggleSidebar}>
          <FiMenu />
        </div>
        <img src={MenuPic} alt="" width={70} />
        <div className="type-container">
          {mealTime.map((item, index) => (
            <div
              className="type"
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/types/${item}`);
                // Close the sidebar when a menu item is clicked
                setIsSidebarOpen(false);
              }}
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
    </div>
    
  );
}
