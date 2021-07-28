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
  let Questions = require('../models/questions');
  


module.exports.displaySurvey = (req, res, next) => {
  
    Survey.find({ username: req.user.displayName }, (err, surveyList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            
           surveyList = surveyList.filter(i => i && i.endDate).filter(survey => {
                let currentDate = new Date();
                let previousDay = new Date(currentDate.getTime());
                previousDay.setDate(previousDay.getDate() - 1);
                const surveyDate = new Date(survey.endDate);
                currentDate.setHours(0,0,0);
                surveyDate.setHours(0,0,0);
                if(surveyDate < previousDay){
                    return false;
                }
                return true;
            });
            console.log(surveyList);
            res.render('survey/list', {
                title: 'Survey List',
                minDate: new Date(),
                SurveyList: surveyList,

            displayName: req.user ? req.user.displayName : ''});          
        }
    });
}
  
  module.exports.displayAddPage = (req, res, next) =>{
      res.render('survey/add', {title: 'Add New Survey',minDate: new Date().toISOString().split('T')[0],
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "username": req.body.username,
        "endDate": req.body.endDate
    });

      Survey.create(newSurvey, (err, survey) => {
          req.body.username = req.user.displayName;
          req.body.displayName = req.body.displayName;
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
            //surveyToEdit.formattedDate = surveyToEdit.endDate.toISOString().split('T')[0]
            res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit})
        }
    });
}
  
  module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id

    let updatedSurvey =Survey({
        "_id": id,
        "name": req.body.name,
        "username": req.body.username,
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
  

