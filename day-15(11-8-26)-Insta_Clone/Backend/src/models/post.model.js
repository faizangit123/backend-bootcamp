const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  img_url: {
    type: String,
    required: [true, "Image is needed to create an post."],
  },
  userId: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id is required for creating an post."],
  },
});

const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;