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
            res.render('business/list', { title:'Business List', BusinessList: businessList });
            
        }
    });
   
});

/* GET Route for displaying  Add Page - create operation */
router.get('/add', (req, res, next) => {
    res.render('business/add', { title: 'Add Contact'})

});

/* GET Route for processing Add Page - create operation */
router.post('/add', (req, res, next) => {
    let newBusiness = Business({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    Business.create(newBusiness, (err, Business) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        { //refresh list
            res.redirect('business-list');
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
            res.render('book/edit', {title: 'Edit Book', book: businessToEdit})
        }
    });

});

/* GET Route for processing Edit Page - update operation */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updatedBusiness = Business({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

});

/* GET Route to perform   Deletion Page - delete operation */
router.get('/delete/:id', (req, res, next) => {

});

module.exports = router;