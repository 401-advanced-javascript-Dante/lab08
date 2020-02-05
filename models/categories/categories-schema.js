'use strict' ;

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type : String , require : true},
  kills : {type : Number },
  titles : {type : Array },
});

module.exports = mongoose.model('categories', categories);