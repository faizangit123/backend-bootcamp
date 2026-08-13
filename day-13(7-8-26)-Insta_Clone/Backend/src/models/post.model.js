const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  img_url: {
    type: String,
    required: [true, "Image is need for creation a post."],
  },
  userId: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user id is required for creating an post"],
  },
});

const postModel = mongoose.model('posts', postSchema)

module.exports = postModel;