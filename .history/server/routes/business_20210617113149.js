let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to contacts schema model

//let Business = require('../models/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let businessController = require('../controllers/business');

/* GET Route for the Contacts List Page - read operation */
router.get('/', businessController.displayBusinessList);

/* GET Route for displaying  Add Page - create operation */
router.get('/add', requireAuth, businessController.displayAddPage);

/* GET Route for processing Add Page - create operation */
router.post('/add',requireAuth, businessController.processAddPage);

/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

/* GET Route for processing Edit Page - update operation */
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* GET Route to perform   Deletion Page - delete operation */
router.get('/delete/:id', requireAuth, businessController.performDelete);

module.exports = router;


/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$sort': {
      'nameCustomer': 1
    }
  }
];

MongoClient.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('').collection('');
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  });