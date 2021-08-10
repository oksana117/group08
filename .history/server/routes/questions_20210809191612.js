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
let questionsController = require('../controllers/questions');


/* GET Route for displaying the view page - CREATE Operation */
router.get('/', questionsController.displayView);

//router.get('/survey/view', questionsController.displayView);

/* GET Route for displaying the create page - CREATE Operation */
router.get('/create/:id', requireAuth, questionsController.displayCreatePage);  


/* POST Route for processing the create page - CREATE Operation */
router.post('/create/:id',requireAuth,  questionsController.processCreatePage);
    

/* GET Route for displaying the update page - UPDATE Operation */
router.get('/update/:id', requireAuth, questionsController.displayUpdatePage);
     

/* POST Route for processing the update page - UPDATE Operation */
router.post('/update/:id', requireAuth, questionsController.processUpdatePage);
 
//router.get('/view/:id', questionsController.displayNewSurvey);

router.get('/delete/:id', requireAuth, questionsController.performDelete);

/* GET to perform Answer - ANSWER Operation */
router.get('/answer/:id', questionsController.displayAnswerPage);

 /* POST to perform  Answer - ANSWER Operation */
 router.post('/answer/:id', questionsController.processAnswerPage);

 /* GET Route for the Answer List page - READ Operation */
 router.get('/answer', requireAuth, surveyController.displayAnswerList);
module.exports = router;
