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
let Questions = require('../models/question');


 module.exports.processAnswerPage = (req, res, next) => {

     let id = req.params.id



     let newResponse = Response({
         "_id": id,
         "name": req.body.name,
         "author": req.body.author,
         "endDate": req.body.endDate
     });

     Response.create( newResponse, (err) => {
         if(err)
         {
             console.log(err);
             res.end(err);
         }
         else
         {
             // refresh the survey list
             res.redirect('/survey-list');
         }
     }); 

 }

 module.exports.displayAnswerList = (req, res, next) => {
     Response.find((err, responseList) => {
         if(err)
         {
             return console.error(err);
         }
         else
         {
             //console.log(SurveyList);

             res.render('survey/answer_list', 
             {title: 'Answers', 
             ResponseList: responseList, 
             displayName: req.user ? req.user.displayName : ''});      
         }
     });
 }
