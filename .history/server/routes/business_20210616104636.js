let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contacts schema model

let Business = require('../models/business');

let businessController = require('../controllers/business');

/* GET Route for the Contacts List Page - read operation */
router.get('/', businessController.displayBusinessList);

/* GET Route for displaying  Add Page - create operation */
router.get('/add', businessController.displayAddPage);

/* GET Route for processing Add Page - create operation */
router.post('/add', businessController.processAddPage);

/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id', businessController.displayEditPage);

/* GET Route for processing Edit Page - update operation */
router.post('/edit/:id', );

/* GET Route to perform   Deletion Page - delete operation */
router.get('/delete/:id', (req, res, next) => {
      let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/business-list');
        }
    });
});

module.exports = router;