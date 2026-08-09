const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type:String,
    default:""
  },
  img_url:{
    type:String,
    require:[true,"Image is needed to creating an post"]
  },
});

const postModel = mongoose.model("posts", postSchema);//its going to be post collection, so post data will store

module.exports = postModel;
