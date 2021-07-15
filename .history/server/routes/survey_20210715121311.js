let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let surveyController = require('../controllers/survey');


/* GET Route for the Business Contacts page - READ Operation */
router.get('/', surveyController.displaySurvey);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', surveyController.displayAddPage);  


/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',  surveyController.processAddPage);
    

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id',  surveyController.displayEditPage);
     

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id',  surveyController.processEditPage);
       

/* GET Route to perform Deletion - DELETE Operation */
router.get('/delete/:id', surveyController.performDelete);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/create/:id', surveyController.displayCreatePage);  



/* POST Route for processing the Add page - CREATE Operation */
router.post('/create/:id',  surveyController.processCreatePage);
    

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/update/:id',  surveyController.displayUpdatePage);
     

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/update/:id',  surveyController.processUpdatePage);
 
router.get('/view/:id', surveyController.displayNewSurvey);

router.post('/survey/view:id',  surveyController.displayView);


module.exports = router;
