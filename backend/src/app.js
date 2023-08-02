import express from "express";
import cors from "cors";
import recetteRoutes from "./routes/recette.routes.js";
import ingredientRoutes from "./routes/ingredient.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/recette", recetteRoutes);
app.use("/ingredient", ingredientRoutes);

export default app;
