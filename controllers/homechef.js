"use strict";

const axios = require("axios");
require ("dotenv").config();
const recipesModel = require("../models/homechef");

async function getRecipesAPIHandler(req, res) {
  let searchQuery = req.query.searchQuery;
  let allRecipes = await axios.get(

    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&includeNutrition=true&offset&query=${searchQuery}&instructionsRequired=true&addRecipeInformation=true`
  );
  res.send(allRecipes.data);
}

//async function getRecipesIngredientsHandler(req, res) {
//let recipesIngredients = await axios.get(
//"https://api.spoonacular.com/recipes/complexSearch?apiKey=bb722ae513d24c0da33e587bf7f50f42&query"
//);
//res.send(recipesIngredients.data);
//}

// async function getRecipesinstructionsHandler(req, res) {
//   let recipesinstructions = await axios.get(
//     "https://api.spoonacular.com/recipes/complexSearch?apiKey=bb722ae513d24c0da33e587bf7f50f42&includeNutrition=true&offset&query&instructionsRequired=true"
//   );
//   res.send(recipesinstructions.data);
// }
async function getRecipesHandler(req, res) {
  //let username = req.query.username;
  //let allRecipes = await recipesModel.find({ username: username });
  let allRecipes = await recipesModel.find({});
  res.send(allRecipes);
}

async function addRecipesHandler(req, res) {
  const { image, title, summary } = req.body;
  let newRecipes = await recipesModel.create({
    //username: email,
    recipeTitle: title,
    recipeImage: image,
    recipeSummary: summary,
  });
  res.send(newRecipes);
}

async function deleteRecipesHandler(req, res) {
  const id = req.params.id;
  //let username = req.query.username;
  let deletedRecipes = await recipesModel.findByIdAndDelete(id);
  let allRecipes = await recipesModel.find({ });
  res.send(allRecipes);
}

async function updateRecipesHandler(req, res) {
  const id = req.params.id;
  const { recipeSummary, recipeTitle, recipeImage } = req.body;
  console.log("inside update", req.body);
  let updatedRecipes = await recipeModel.findByIdAndUpdate(id, {
    recipeTitle,
    recipeImage,
    recipeSummary,
  });

  let allRecipes = await recipesModel.find({ });
  res.send(allRecipes);
}

module.exports = {
  getRecipesAPIHandler,
  getRecipesHandler,
  addRecipesHandler,
  deleteRecipesHandler,
  updateRecipesHandler,
  //getRecipesIngredientsHandler,
  //getRecipesinstructionsHandler,
};
