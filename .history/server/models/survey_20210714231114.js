/*File name : businesscontacts.js
  Author's name : Remedios Meneses
  Student ID : 300691712
  Web site name : RM
  date : June 18, 2021 */

let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
    name: String,
    author: String,
  questionsNumber: String
  question": String
},
{
    collection: "survey"
});



module.exports = mongoose.model('Survey', surveyModel);


