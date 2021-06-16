let mongoose = require('mongoose');

//create a model class

let businessModel = mongoose.Schema({
    nameCustomer: String,
    number: String,
    email: String
},
  
{
  collection: "business"
});

module.exports = mongoose.model('Business', businessModel);