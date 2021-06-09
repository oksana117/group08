let mongoose = required('mongoose');

//create a model class

let businessModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
  collections: "business"
});

module.exports = mongoose.model('Business', businessModel);