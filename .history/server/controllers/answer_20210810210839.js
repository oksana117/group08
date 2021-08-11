


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
                title: 'Questions List',
                  QuestionsList: questionList,

            displayName: req.user ? req.user.displayName : ''});      
        }
    });
  }
  
module.exports.displayAnswerPage= (req, res, next) => {
     
      res.render('survey/answer', {title: 'Survey Answers',
      displayName: req.user ? req.user.displayName : ''});
  }
  
module.exports.processAnswerPage = (req, res, next) => {
    
    let newQuestions = Questions({
        "question": req.body.question,
        "questionsAnswer": req.body.questionsAnswer
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
    
    
    
    
    
    /*
    
    
    (req, res, next) => {
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
            res.redirect('/survey-answer');

        }
    });
}*/

