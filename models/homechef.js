"use strict";

const mongoose = require("./index");

const recipesSchema = new mongoose.Schema({
  //username: String,
  recipeTitle: String,
  recipeImage: String,
  recipeSummary: String,
});

const recipesModel = mongoose.model("recipes", recipesSchema);

function seedData() {
  const newRecipes = new recipesModel({
    
    recipeTitle: "Berry Banana Smoothie",
    recipeImage: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    recipeSummary:"Rice Pilaf is a <b>dairy free</b> hor d'oeuvre. This recipe makes 4 servings with <b>201 calories</b>, <b>5g of protein</b>, and <b>3g of fat</b> each. For <b>58 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals."
  });
  newRecipes.save();
}
//seedData();

module.exports = recipesModel;
