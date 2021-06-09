let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contacts schema model

let Contacts = require('../models/contacts');

/* GET Route for the Contacts List Page - read operation */
router.get('/', (res, res, next) =>
{
    Contacts.find(err, ContactsList) => {
        if
    }
   
});