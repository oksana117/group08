var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//connect to contacts schema model

let Business = require('../models/business');

/* GET Route for the Contacts List Page - read operation */
router.get('/', function(req, res, next) {
    Business.find((err, BusinessList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            console.log(BusinessList);
            
        }
    });
   
});
module.exports = router;