let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contacts schema model

let Business = require('../models/business');

let businessController = require('../controllers/business');

/* GET Route for the Contacts List Page - read operation */
router.get('/', businessController.displayBusinessList);

/* GET Route for displaying  Add Page - create operation */
router.get('/add', businessController.;

/* GET Route for processing Add Page - create operation */
router.post('/add', (req, res, next) => {
    let newBusiness = Business({
        "nameCustomer": req.body.nameCustomer,
        "numberCustomer": req.body.numberCustomer,
        "emailCustomer": req.body.emailCustomer
    });
    Business.create(newBusiness, (err, Business) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        { //refresh list
            res.redirect('/business-list');
        }
    })

});
//0.25 min
/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/edit', {title: 'Edit Contact Information', business: businessToEdit})
        }
    });

});

/* GET Route for processing Edit Page - update operation */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedBusiness = Business({
        "_id": id,
        "nameCustomer": req.body.nameCustomer,
        "numberCustomer": req.body.numberCustomer,
        "emailCustomer": req.body.emailCustomer
    });
    
    Business.updateOne({ _id: id }, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-list');
        }
    });

});

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