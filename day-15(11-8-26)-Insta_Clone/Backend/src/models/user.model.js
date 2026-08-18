const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User with this name already exists."],
    required: [true, "Username is requireed."],
  },
  email: {
    type: String,
    unique: [true, "User with this eamil already exists."],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profile_img:{
    type:String,
    default:"https://ik.imagekit.io/Arman123/Screenshot_2023-10-01-23-40-13-586_com.brave.browser.jpg",
  }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
