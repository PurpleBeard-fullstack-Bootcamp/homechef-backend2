"use strict";

const express = require("express");
const recipesRouter = express.Router();
const recipesHandlers = require("../controllers/homechef");
console.log(recipesHandlers);

recipesRouter.get("/recipesapi", recipesHandlers.getRecipesAPIHandler);

recipesRouter.get("/recipes", recipesHandlers.getRecipesHandler);

recipesRouter.post("/receipes", recipesHandlers.addRecipesHandler);

recipesRouter.delete("/recipes/:id", recipesHandlers.deleteRecipesHandler);

recipesRouter.put("/recipes/:id", recipesHandlers.updateRecipesHandler);

module.exports = recipesRouter;
