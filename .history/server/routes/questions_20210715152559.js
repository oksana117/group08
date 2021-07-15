let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let questionsController = require('../controllers/questions');


router.get('/', questionsController.displayView);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/create/:id', questionsController.displayCreatePage);  


/* POST Route for processing the Add page - CREATE Operation */
router.post('/create/:id',  questionsController.processCreatePage);
    

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/update/:id',  questionsController.displayUpdatePage);
     

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/update/:id',  questionsController.processUpdatePage);
 
router.get('/view/:id', questionsController.displayNewSurvey);



module.exports = router;
