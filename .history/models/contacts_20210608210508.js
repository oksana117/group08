let mongoose = required('mongoose');

//create a model class

let usersModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},

{
        collection: "contacts"
});

module.exports = mongoose.module('Users', usersModel);