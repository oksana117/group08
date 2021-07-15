let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let questionsController = require('../controllers/questions');

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/create/:id', questionsController.displayCreatePage);  



/* POST Route for processing the Add page - CREATE Operation */
router.post('/create/:id',  questionsController.processCreatePage);
    

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/update/:id',  surveyController.displayUpdatePage);
     

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/update/:id',  surveyController.processUpdatePage);
 
router.get('/view/:id', surveyController.displayNewSurvey);

router.post('/survey:id',  surveyController.displayView);


module.exports = router;
