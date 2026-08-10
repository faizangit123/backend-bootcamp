const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// for POST we need 3 things as per the schema
/**
 * (1) caption -> done (form data)
 * (2) img_url -> done (form data) -> by imagekit(not in server, but on cloud->save money)
 * (3) userId -> done (only when user login) -> get the auth -> token(by ref)
 */

async function createPostController(req, res) {
  console.log(req.body, req.file);

  // #3 server need token to know who make the post
  // we need token so that server will know who send the post and save as per the id
  const token = req.cookies.jwt_token;
  // what if user dont have the token : means hes not login or register
  if (!token) {
    return res.status(401).json({
      message: "token is not provided, unauthorized",
    });
  }

  // but if we have token then we need to get the data from the token
  let deCoder;
  try {
    deCoder = jwt.verify(token, process.env.JWT_SECRET); //if token is wrong it say invalid signature and 500
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token or Token expires.",
    });
  }
  //it will send you the id->user
  // console.log(deCoder); // give id(with the help of token)->for the userId

  // #2
  // send image from server to imagekit that all
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "testFile",
    folder: "/Instagram-Clone/posts", // now we are storing posts on this folder on imagekit, structure way
  });
  // res.send(file);
  // now we finally have all 3 things so let create post
  const post = await postModel.create({
    caption: req.body.caption,
    img_url: file.url,
    userId: deCoder.id,
  });
  res.status(201).json({
    message: "Post created successfully.",
    post,
  });
}
module.exports = {
  createPostController,
};
