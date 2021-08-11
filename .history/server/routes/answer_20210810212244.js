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


/* GET Route for displaying the view page - CREATE Operation */
router.get('/', answerController.displayAnswer);


/* GET Route for displaying the create page - CREATE Operation */
router.get('/answer/:id', requireAuth, answerController.displayAnswerPage);  


/* POST Route for processing the create page - CREATE Operation */
router.post('/answer',requireAuth,  answerController.processAnswerPage);
    

/* GET Route for displaying the update page - UPDATE Operation */
//router.get('/update/:id', requireAuth, answerController.displayUpdatePage);
     

/* POST Route for processing the update page - UPDATE Operation */
//router.post('/update/:id', requireAuth, answerController.processUpdatePage);


module.exports = router;
