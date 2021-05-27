var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about me page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'});
});

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'});
});

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'});
});

/* GET contact me page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'});
});

module.exports = router;
