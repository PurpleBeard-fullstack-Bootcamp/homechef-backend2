"use strict";

const express = require("express");
const recipesRouter = express.Router();
const recipesHandlers = require("../controllers/homechef");
//console.log(recipesHandlers);

recipesRouter.get("/recipesapi", recipesHandlers.getRecipesAPIHandler);

recipesRouter.get("/recipes", recipesHandlers.getRecipesHandler);

// recipesRouter.get(
//   "/recipes/ingredients",
//   recipesHandlers.getRecipesIngredientsHandler
// );

// recipesRouter.get(
//   "/recipes/instructions",
//   recipesHandlers.getRecipesinstructionsHandler
// );

recipesRouter.post("/recipes", recipesHandlers.addRecipesHandler);

recipesRouter.delete("/recipes/:id", recipesHandlers.deleteRecipesHandler);

recipesRouter.put("/recipes/:id", recipesHandlers.updateRecipesHandler);

module.exports = recipesRouter;
