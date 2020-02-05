'use strict';

const express = require('express');
const products = require('../models/products/products-model.js');
// const app = express();

// With routers you can modularize your code more easily
const router = express.Router();

router.get('/products',getProducts);
router.get('/products/:_id',getProductsId);
router.post('/products',postProducts);
router.put('/products/:_id',updateProducts);
router.delete('/products/:_id',deleteProducts);


function getProducts(req , res , next){
  products.get()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}


function getProductsId(req , res , next){
  let id = req.params._id ;
  products.get(id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}


function postProducts(req , res , next){
  let value = req.body ;
  products.create(value)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function updateProducts(req , res , next){

  let value = req.body ;
  let id = req.params._id ;
  products.update(id , value)
    .then(data => {
      res.status(201).json(data);
    });
}


function deleteProducts(req , res , next){
  let id = req.params._id ;
  products.delete(id)
    .then(data => {
      res.status(200).json(data);
    });
}

module.exports = router ;