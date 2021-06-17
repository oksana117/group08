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
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$sort': {
      'nameCustomer': 1
    }
  }
];