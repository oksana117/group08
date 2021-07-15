

  let express = require('express');
  let router = express.Router();
  let mongoose = require('mongoose');
  
  //let jwt = require('jsonwebtoken');
  
  //create a reference to the model
  let Survey = require('../models/survey');
  
let Questions = require('../models/questions');

module.exports.displaySurvey = (req, res, next) => {
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
        "questionsNumber": req.body.questionsNumber
    });

    Survey.create(newSurvey, (err, survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
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
        "questionsNumber": req.body.questionsNumber
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
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
            //refresh the businesscontactlist
            res.redirect('/survey-list');
       }
    });
  }
  


  module.exports.displayView= (req, res, next) => {
    Questions.find((err, questionList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            
            res.render('survey-list/view', {
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
    let newSurvey = Survey({
        "question": req.body.question
        
    });

    Questions.create(newSurvey, (err, survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
            res.redirect('surveyview');
        }
    });
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
            //refresh the businesscontactlist
            res.redirect('survey/view');

        }
    });
}
  

 module.exports.displayNewSurvey = (req, res, next) =>{
      res.render('survey/view', {title: 'New Survey',
      displayName: req.user ? req.user.displayName : ''});
  }

