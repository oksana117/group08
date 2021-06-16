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
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services'});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact'});
});

module.exports = router;
