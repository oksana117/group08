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
  let Survey = require('../models/survey');
  


module.exports.displaySurvey = (req, res, next) => {
    
    req.body.name = req.user.author;
    Survey.find((err, surveyList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            
            res.render('survey/list', {
                title: 'Survey List',
                SurveyList: surveyList,

            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}
  
  module.exports.displayAddPage = (req, res, next) =>{
      res.render('survey/add', {title: 'Add New Survey',
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "author": req.body.author,
        "endDate": req.body.endDate
    });

    Survey.create(newSurvey, (err, survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the survey-list
            res.redirect('/survey-list');
        }
    });
}
  
  module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if(err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit})
        }
    });
}
  
  module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id

    let updatedSurvey =Survey({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "endDate": req.body.endDate
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the survey list 
            res.redirect('/survey-list');

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
            //refresh the survey 
            res.redirect('/survey-list');
       }
    });
  }
  

