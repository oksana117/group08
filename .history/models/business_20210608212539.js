let mongoose = required('mongoose');

//create a model class

let businessModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},

{
        collection: "contacts"
});

module.exports = mongoose.module('Contact', contactsModel);