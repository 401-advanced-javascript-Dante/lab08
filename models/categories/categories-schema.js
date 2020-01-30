'use strict' ;

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type : String , require : true},
  kills : {type : Number , require : true},
  titles : {type : Array , require : true },
});

module.exports = mongoose.model('categories', categories);