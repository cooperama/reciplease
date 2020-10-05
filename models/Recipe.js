const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  time: Number,
  ingredients: [
    {type: String}
  ],
  directions: {
    type: String,
    required: true
  },
}, {timestamps: true});


module.exports = mongoose.model('Recipe', recipeSchema);