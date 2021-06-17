module.exports =
{
    //"URI": "mongodb://localhost/business_contacts"
    "URI": "mongodb+srv://oksana:lgYAtBXvMQ1BkEUX@mongodbserver.wuevp.mongodb.net/business_contacts?retryWrites=true&w=majority"
    
    
}



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const agg = [
  {
    '$sort': {
      'nameCustomer': 1
    }
  }
];