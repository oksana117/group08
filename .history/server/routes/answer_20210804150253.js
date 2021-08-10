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

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let answerController = require('../controllers/answer');

router.get('/', surveyController.displaySurvey);

/* GET to perform Answer - ANSWER Operation */
router.get('/answer/:id', answerController.displayAnswerPage);

 /* POST to perform  Answer - ANSWER Operation */
 router.post('/answer/:id', surveyController.processAnswerPage);

 /* GET Route for the Answer List page - READ Operation */
 router.get('/answer', requireAuth, surveyController.displayAnswerList);

module.exports = router;