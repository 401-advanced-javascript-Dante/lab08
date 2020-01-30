'use strict' ;

// 3d party dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


// internal files 
const categoriesRoutes = require('../routes/categories-route.js');
const productsRoutes = require('../routes/products-route.js');



// applications constants 
const app = express();

// 3d party middleware 
app.use(express.json());





// 3d party dependencies
app.use(cors());
app.use(morgan('dev'));


// 1st party middle
app.use('/api/v1' , categoriesRoutes);
app.use('/api/v1' , productsRoutes);






module.exports = {
  server : app ,
  start : (port) => {
    let PORT = port || process.env.PORT || 3000 ;
    // prove of life !
    app.listen(PORT ,()=> {
      console.log(`Lets Rock ${PORT}!!! `);
    });
  },
};
