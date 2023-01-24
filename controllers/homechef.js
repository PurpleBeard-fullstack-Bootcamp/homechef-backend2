"use strict";

const axios = require("axios");
const recipesModel = require("../models/homechef");

async function getRecipesAPIHandler(req, res) {
  let allRecipes = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=bb722ae513d24c0da33e587bf7f50f42&includeNutrition=true&offset&query&instructionsRequired=true"
  );
  res.send(allRecipes.data);
}

async function getRecipesHandler(req, res) {
  let username = req.query.username;
  let allRecipes = await recipesModel.find({ username: username });
  res.send(allRecipes);
}

async function addRecipesHandler(req, res) {
  const { img, title } = req.body;
  let newRecipes = await recipesModel.create({
    recipeTitle: title,
    recipeImage: img,
  });
  res.send(newRecipes);
}

async function deleteRecipesHandler(req, res) {
  const id = req.params.id;
  let deletedRecipes = await recipesModel.findByIdAndDelete(id);
  let allRecipes = await recipesModel.find({ username });
  res.send(allRecipes);
}

async function updateRecipesHandler(req, res) {
  const id = req.params.id;
  const { recipeTitle, recipeImage } = req.body;
  console.log("inside update", req.body);
  let updatedRecipes = await recipeModel.findByIdAndUpdate(id, {
    recipeTitle,
    recipeImage,
  });

  let allRecipes = await recipesModel.find({ username });
  res.send(allRecipes);
}

module.exports = {
  getRecipesAPIHandler,
  getRecipesHandler,
  addRecipesHandler,
  deleteRecipesHandler,
  updateRecipesHandler,
};
