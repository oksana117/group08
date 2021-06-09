var mongoose = required('mongoose');

//create a model class

vae businessModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
  collection: "business"
});

module.exports = mongoose.model('Business', businessModel);