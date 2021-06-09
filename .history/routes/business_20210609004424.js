let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contacts schema model

let Business = require('../models/business');

/* GET Route for the Contacts List Page - read operation */
router.get('/', (req, res, next) => {
    Business.find((err, businessList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            console.log(businessList);
            //res.render('business', {title: 'Book List', BookList: bookList})  
            
        }
    });
   
});
module.exports = router;