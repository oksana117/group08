/*Oksana Koshulap, 301167025, June 4, 2021 */

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', ide);

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', {title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services'});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact'});
});

module.exports = router;
