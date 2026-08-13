const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name already exists"],
    required: [true, "name is required."],
  },
  email: {
    type: String,
    unique: [true, "user with this email already exists"],
    required: [true, "email is required."],
  },
  password: {
    type: String,
    required: true,
  },
  bio:String,
  profilPic:{
    type:String,
    default:'Imagekit'
  }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
