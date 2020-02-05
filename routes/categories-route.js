'use strict';

const express = require('express');
const categories = require('../models/categories/categories-model.js');
// const app = express();

// With routers you can modularize your code more easily
const router = express.Router();

router.get('/categories',getCategories);
router.get('/categories/:_id',getCategoriesId);
router.post('/categories',postCategories);
router.put('/categories/:_id',updateCategories);
router.delete('/categories/:_id',deleteCategories);


function getCategories(req , res , next){
  categories.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}


function getCategoriesId(req , res , next){
  let id = req.params._id ;
  categories.get(id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}


function postCategories(req , res , next){
  let value = req.body ;
  categories.create(value)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function updateCategories(req , res , next){

  let value = req.body ;
  let id = req.params._id ;
  categories.update(id , value)
    .then(data => {
      res.status(201).json(data);
    });
}


function deleteCategories(req , res , next){
  let id = req.params._id ;
  categories.delete(id)
    .then(data => {
      res.status(200).json(data);
    });
}

module.exports = router ;