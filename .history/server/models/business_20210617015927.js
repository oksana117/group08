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

[
  {
    '$sort': {
      'nameCustomer': 1
    }
  }
]