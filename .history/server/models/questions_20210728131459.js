/* Team: Group 8
  Web site name : Pandora-Survey
  Date : July 18, 2021
  Author's names & Student IDs:
  Oksana Koshulap: 301167025
  Remedios Meneses: 300691712
  Anmary Gain: 301152014 
  Tesmine Poulose: 301151876
  Sapna: 301152192 */

let mongoose = require('mongoose');
mongoose.Schema.Types.Boolean.convertToFalse.add('');

//create a model class
let  questionsModel = mongoose.Schema({
  
  //question: String,
  question: [],
  questionType: [] Boolean,
  surveyID: String,
  username: String,
  questionsAnswer: String 
},
{
    collection: "questions"
});



module.exports = mongoose.model('Questions',   questionsModel);


