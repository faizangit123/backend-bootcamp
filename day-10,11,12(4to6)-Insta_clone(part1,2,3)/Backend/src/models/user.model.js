const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exists."], // no 2 username should be same
    required: [true, "User name is required."], // need to enter user name
  },
  bio: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default:
      "https://ik.imagekit.io/Arman123/Screenshot_2023-10-01-23-40-13-586_com.brave.browser.jpg", // when we dont have user image, by cloud porvider : imagekit.io
  },
});

// 1st collection
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
