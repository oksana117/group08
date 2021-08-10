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
  

