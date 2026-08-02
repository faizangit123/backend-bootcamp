const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type:String,
    unique:true  // it use to create a unique index 
  },
  password: String,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;