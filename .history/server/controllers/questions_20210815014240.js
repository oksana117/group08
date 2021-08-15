  /* Team: Group 8
  Web site name : Pandora-Survey
  Date : July 30, 2021
  Author's names & Student IDs:
  Oksana Koshulap: 301167025
  Remedios Meneses: 300691712
  Anmary Gain: 301152014 
  Tesmine Poulose: 301151876
  Sapna: 301152192 */

let express = require('express');
  let router = express.Router();
  let mongoose = require('mongoose');
  
  //let jwt = require('jsonwebtoken');
  
  //create a reference to the model
  let Questions = require('../models/questions');
  let Survey = require('../models/survey');

  module.exports.displayView= (req, res, next) => {
    Questions.find((err, questionList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            
            res.render('survey/view', {
                title: 'Questions List',
                  QuestionsList: questionList,

            displayName: req.user ? req.user.displayName : ''});      
        }
    });
  }
  
module.exports.displayCreatePage = (req, res, next) => {
     
      res.render('survey/create', {title: 'Add New Survey',
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processCreatePage = (req, res, next) => {
    
    let newQuestions = Questions({
        "question": req.body.question,
       // "questionType": req.body.question
        
    });

    Questions.create(newQuestions , (err, question) =>{
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            //refresh the surveys
            res.redirect('/survey-view');
        }
    });

  
  }




  module.exports.displayUpdatePage = (req, res, next) =>{
    let id = req.params.id;

    Questions.findById(id, (err, questionToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/update', {title: 'Update Questions ', questions: questionToEdit})
        }
    });
}
  
  module.exports.processUpdatePage= (req, res, next) =>{
    let id = req.params.id

    let updatedSurvey =Questions({
        "_id": id,
        "question": req.body.question,
      "questionsAnswer": req.body.questionsAnswer
    });

    Questions.updateOne({_id: id}, updatedSurvey, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the survey
            res.redirect('/survey-view');

        }
    });
}
  
  module.exports.performDelete = (req, res, next) =>{
    let id = req.params.id;

    Questions.remove({_id: id}, (err) =>{
        if(err)
       {
           console.log(err);
           res.end(err);
       }
       else
       {
            //refresh the refresh survey
            res.redirect('/survey-view');
       }
    });
  }
  


import { ExportToCsv } from 'export-to-csv';

var data = [
  {
    name: 'Test 1',
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
];

  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

const csvExporter = new ExportToCsv(options);

csvExporter.generateCsv(data);
