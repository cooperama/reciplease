const express = require('express');
const router = express.Router();

const db = require('../models');   // database


// ------------------------------ INDEX

router.get('/', (req, res) => {
  db.Recipe.find({}, (err, allRecipes) => {
    if (err) return console.log(err);
    res.render('recipes/indexRecipes', {
      recipes: allRecipes
    });
  })
});



// ------------------------------ NEW

router.get('/new', (req, res) => {
  res.render('recipes/newRecipes');
});



// ------------------------------ CREATE

router.post('/', (req, res) => {
  db.Recipe.create(req.body, (err, newRecipe) => {
    if (err) return console.log(err);
    res.redirect(`recipes/${newRecipe._id}`);
  })
})



// ------------------------------ SHOW

router.get('/:recipeId', (req, res) => {
  db.Recipe.findById(req.params.recipeId, (err, foundRecipe) => {
    if (err) return console.log(err);
    res.render('recipes/showRecipes', {
      recipe: foundRecipe
    });
  })
});



// ------------------------------ EDIT

router.get('/:recipeId/edit', (req, res) => {
  db.Recipe.findById(req.params.recipeId, (err, recipeToEdit) => {
    if (err) return console.log(err);
    res.render('recipes/editRecipes', {
      recipe: recipeToEdit
    });
  })
});


// ------------------------------ UPDATE

router.put('/:recipeId', (req, res) => {
  db.Recipe.findByIdAndUpdate(
    req.params.recipeId, 
    req.body,
    {new: true},
    (err, updatedRecipe) => {
    if (err) return console.log(err);
    res.redirect(`/recipes/${updatedRecipe._id}`);
  })
});


// ------------------------------ DELETE

// router.delete('/:recipeId', (req, res) => {
//   res.redirect('recipes/indexRecipes');
// });



module.exports = router;