const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  img_url: {
    type: String,
    required: [true, "Image is needed to creating an post"],
  },
  userId: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user id is required for creating an post"],
  },
});
// 2rd collection
const postModel = mongoose.model("posts", postSchema); //its going to be post collection, so post data will store

module.exports = postModel;
