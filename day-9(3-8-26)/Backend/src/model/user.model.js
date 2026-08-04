const mongoose = require('mongoose');
// 1) create schema
const userSchema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique:true
  },
  password:String
})

// 2) create model
const userModel = mongoose.model('users',userSchema);   // where you want you collection to be in we say users

// 3) export model
module.exports = userModel;
