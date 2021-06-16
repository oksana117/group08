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

/* GET Route for displaying Login Page - access operation */
router.get('/login', businessController.displayAddPage);

/* GET Route for processing Login Page - access/read operation */
router.post('/login', businessController.processAddPage);

/* GET Route for displaying Register Page - access operation */
router.get('/register', businessController.displayAddPage);

/* GET Route for processing  Page - access/read operation */
router.post('/register', businessController.processAddPage);
module.exports = router;
