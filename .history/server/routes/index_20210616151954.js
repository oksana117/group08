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
router.get('/login', indexController.displayLoginPage);

/* GET Route for processing Login Page  */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying Register Page */
router.get('/register', indexController.displayRegisterPage);

/* GET Route for processing Register Page  */
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform User Logout Page - delete operation */
//router.get('/logout', businessController.performDelete);



module.exports = router;
