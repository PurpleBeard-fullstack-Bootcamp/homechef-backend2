"use strict";

const mongoose = require("./index");

const recipesSchema = new mongoose.Schema({
  username: String,
  recipeTitle: String,
  recipeImage: String,
});

const recipesModel = mongoose.model("recipes", recipesSchema);

function seedData() {
  const newRecipes = new recipesModel({
    username: "tasha@gmail.com",
    recipeTitle: "Berry Banana Smoothie",
    recipeImage: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
  });
  newRecipes.save();
}
//seedData();

module.exports = recipesModel;
