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
            //console.log(businessList);
            //book view, and pushing the object to the view
            res.render('business', {title: 'Business List', BusinessList: businessList})  
            
        }
    });
   
});

/* GET Route for displaying  Add Page - create operation */
router.get('')

/* GET Route for processing Add Page - create operation */

/* GET Route for displaying  Edit Page - update operation */

/* GET Route for processing Edit Page - update operation */

/* GET Route to perform   Deletion Page - delete operation */

module.exports = router;