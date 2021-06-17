let mongoose = require('mongoose');

//create a model class

let businessModel = mongoose.Schema({
    nameCustomer: String,
    numberCustomer: String,
    emailCustomer: String
},
  
{
  collection: "business"
});

module.exports = mongoose.model('Business', businessModel);

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/*

const agg = [
  {
    '$sort': {
      'nameCustomer': 1
    }
  }
];