const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title:{
    type:String,
    required:true,
    unique:true
  },
  level:{
    type:String,
    enum:["Easy Peasy","Amateur Chef","UltraPro Chef"]
  },
  ingredients:{
    type:[]
  },
  cuisine:{
    type:String,
    required:true
  },
  dishTipe: {
    type:String,
    enum:["Breakfast","Dish","Snack","Drink","Dessert","Others"]
  },
  image: {
    type:String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration:{
    type:Number,
    min:0
  },
  creator:{
    type:String
  },
  created:{
    type:Date,
    default:Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
