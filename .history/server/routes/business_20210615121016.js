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
router.get('/add', (req, res, next) => {
    

});

/* GET Route for processing Add Page - create operation */
router.post('/add', (req, res, next) => {
    

});

/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id', (req, res, next) => {
    

});

/* GET Route for processing Edit Page - update operation */
router.post('/edit/:id', (req, res, next) => {
    

});

/* GET Route to perform   Deletion Page - delete operation */

module.exports = router;