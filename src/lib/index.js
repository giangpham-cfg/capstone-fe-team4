export const API = import.meta.env.PROD
  ? "https://capstone-be-k4c5.onrender.com"
  : "http://localhost:3000";
export const recipe = {
  id: 0,
  name: "One Pot Creamy Pasta",
  image: "🍔",
  type: "lunch",
  time: "25 minutes",
  ingredients: [
    "4 garlic cloves, peeled & sliced",
    "7 oz (1 jar) sun dried tomatoes, drained",
    "5¼ cups (1.25L) vegetable broth",
    "1 lb penne pasta",
    "2 cups broccoli",
    "2 carrots, peeled",
    "4 oz cream cheese",
    "grated Parmesan cheese",
    "1/2 tbsp vegetable oil",
    "1/2 tsp ground black pepper",
    "1/4 tsp salt",
  ],
  directions: [
    "Place sliced garlic and 1 tbsp oil from sun dried tomatoes into a large pot.",
    "Cook over medium heat 2-3 minutes or until garlic is golden brown, stirring occasionally.",
    "Remove from heat, then add broth. Return pot to burner and increase heat to high. Cover pot and bring to a boil.",
    "Once boiling, add pasta, then cover and simmer 8-10 minutes or until pasta is almost cooked but still firm.",
    "Meanwhile, chop broccoli and place into medium to large sized bowl. Cut carrots in half and thinly slice.",
    "Drain tomatoes and slice them into thin strips. Cut cream cheese into cubes.",
    "Add vegetables, cream cheese, black pepper and salt to pasta. Stir until cream cheese is melted, then reduce heat to medium and cover.",
    "Cook an additional 2-3 minutes, until vegetables are tender.",
    "Top with grated parmesan and you're done!",
  ],
};
