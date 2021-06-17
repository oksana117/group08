/* Oksana Koshulap, 301167025, June 18, 2021 */

let mongoose = require('mongoose');

//create a model class and reference collection

let businessModel = mongoose.Schema({
    nameCustomer: String,
    numberCustomer: String,
    emailCustomer: String
},
  
{
  collection: "business"
});

module.exports = mongoose.model('Business', businessModel);

