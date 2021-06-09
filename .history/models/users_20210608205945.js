let mongoose = required('mongoose');

//create a model class

let usersModel = moongoose.Schema({
    name: String,
    number: String,
    email: String
},
    {
     collection : "users'; 
}
   

)
