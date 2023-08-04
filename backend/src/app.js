import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipe.routes.js";
import ingredientRoutes from "./routes/ingredient.routes.js";
import testRoutes from "./routes/test.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/recipe", recipeRoutes);
app.use("/ingredient", ingredientRoutes);
app.use("/test", testRoutes);

export default app;
