


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

  module.exports.displayAnswer= (req, res, next) => {
    Questions.find((err, questionList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            
            res.render('survey/answer', {
                title: 'Survey Answers',
                  QuestionsList: questionList,

            displayName: req.user ? req.user.displayName : ''});      
        }
    });
  }


module.exports.displayAnswerPage = (req, res, next) => {
     
      res.render('survey/answer', {title: 'Survey Answers',
      displayName: req.user ? req.user.displayName : ''});
  }
  

module.exports.processAnswerPage = (req, res, next) => {
    
     let id = req.params.id

    let updatedAnswers =Questions({
        "_id": id,
        "question": req.body.question,
        "questionsAnswer": req.body.questionsAnswer
     
    });

    Questions.updateOne({_id: id}, updatedAnswers, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the answers page
            res.redirect('/survey-answer');

        }
    });
  
}


  modukimport { ExportToCsv } from 'export-to-csv';

var data = [
  {
    name: 'Test 1',
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  }
];

  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Survey Data',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

const csvExporter = new ExportToCsv(options);

csvExporter.generateCsv(data);

/*  
module.exports.displayAnswerPage= (req, res, next) => {
     
      res.render(' survey/answer', {title: 'Survey Answers',
      displayName: req.user ? req.user.displayName : ''});
  }
  
module.exports.processAnswerPage = (req, res, next) => {
    let id = req.params.id

    let updatedAnswers =Questions({
        "_id": id,
        "question": req.body.question,
        "questionsAnswer": req.body.questionsAnswer
     
    });

    Questions.updateOne({_id: id}, updatedAnswers, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the answers page
            res.redirect('/survey-answer');

        }
    });
}
*/
 

