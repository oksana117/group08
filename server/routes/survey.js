/* Team: Group 8
  Web site name : Pandora-Survey
  Date : July 18, 2021
  Author's names & Student IDs:
  Oksana Koshulap: 301167025
  Remedios Meneses: 300691712
  Anmary Gain: 301152014 
  Tesmine Poulose: 301151876
  Sapna: 301152192 */


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let surveyController = require('../controllers/survey');


// function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
      return res.redirect('/login');
  }
  next();
}


/* GET Route for the Survey page - READ Operation */
router.get('/', surveyController.displaySurvey);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, surveyController.displayAddPage);  


/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, surveyController.processAddPage);
    

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);
     

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, surveyController.processEditPage);
       

/* GET Route to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, surveyController.performDelete);

/* GET to perform  Answer - ANSWER Operation */
router.get('/answer/:id', surveyController.displayAnswerPage);

/* POST to perform  Answer - ANSWER Operation */
router.post('/answer/:id', surveyController.processAnswerPage);

/* GET Route for the Answer List page - READ Operation */
router.get('/answers', requireAuth, surveyController.displayAnswerList);


module.exports = router;