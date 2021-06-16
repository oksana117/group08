/*Oksana Koshulap, 301167025, June 4, 2021 */

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about me page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact me page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying Login Page */
router.get('/login', businessController.displayAddPage);

/* GET Route for processing Login Page  */
router.post('/login', businessController.processAddPage);

/* GET Route for displaying Register Page */
router.get('/register', businessController.displayAddPage);

/* GET Route for processing Register Page  */
router.post('/register', businessController.processAddPage);

/* GET Route to perform   Lo Page - delete operation */
router.get('/delete/:id', businessController.performDelete);



module.exports = router;
