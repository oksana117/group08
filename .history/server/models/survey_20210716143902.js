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

//create a model class
let surveyModel = mongoose.Schema({
  username: String,
  displayName: String,
  author: String,
  questionsNumber: String, // need to change it to int 
  question: String,
  startDate: Date,
  endDate: Date,
  active: Boolean,
  surveyID: String
},
{
    collection: "survey"
});



module.exports = mongoose.model('Survey', surveyModel);


