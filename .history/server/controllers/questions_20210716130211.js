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
/*module.exports.displayView = (req, res, next) => {
    res.render('view', {title: 'Questions List', displayName: req.user ? req.user.displayName : ''});
}*/

  
module.exports.displayCreatePage = (req, res, next) =>{
      res.render('survey/create', {title: 'Add New Survey',
      displayName: req.user ? req.user.displayName : ''});
  }
  
  module.exports.processCreatePage = (req, res, next) => {
    let newQuestions = Questions({
        "question": req.body.question
        
    });

    Questions.create(newQuestions , (err, question) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesscontactlist
            res.redirect('/survey-view');
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
            //refresh the businesscontactlist
            res.redirect('/survey-view');
       }
    });
  }
  
