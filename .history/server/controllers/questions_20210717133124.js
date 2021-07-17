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
  
  //let jwt = require('jsonwebtoken');
  
  //create a reference to the model
let Questions = require('../models/questions');

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
  
module.exports.displayCreatePage = (req, res, next) =>{
      res.render('survey/create', {title: 'Add New Survey',
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processCreatePage = (req, res, next) => {

    // receive all the question text and the types here

    // construct the newQuestions object

    // loop that creates multiple questions

    // start loop here
    let newQuestions = Questions({
        "question": req.body.question1,
        "questionType: ":req.body.question1,
        
        
        //question type
        //question/survey id
    });

    Questions.create(newQuestions , (err, question) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the surveys
            res.redirect('/survey-view');
        }
    });

    // end loop here
}
  module.exports.displayUpdatePage = (req, res, next) =>{
    let id = req.params.id;

    Questions.findById(id, (err, surveyToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/update', {title: 'Update Survey', survey: surveyToEdit})
        }
    });
}
  
  module.exports.processUpdatePage= (req, res, next) =>{
    let id = req.params.id

    let updatedSurvey =Survey({
        "_id": id,
        "question": req.body.question
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

    Survey.remove({_id: id}, (err) =>{
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
  
