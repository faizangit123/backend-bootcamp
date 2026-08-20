const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// POST
async function createPostController(req, res) {
 
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "tesFile",
    folder: "/Instagram-Clone/posts",
  });

  const { caption } = req.body;

  const post = await postModel.create({
    caption,
    img_url: file.url,
    userId: decoder.id,
  });

  res.status(201).json({
    message: "Post created successfully.",
    post: {
      caption: post.caption,
      img_url: post.img_url,
      userId: post.userId,
    },
  });
}

// GET -> All posts
async function getPostController(req, res) {
  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user.",
    });
  }

  let decoder;
  try {
    decoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid usesr or token is expires.",
    });
  }

  const post = await postModel.find({
    userId: decoder.id,
  });

  res.status(200).json({
    message: "Post fetched successfully.",
    post,
  });
}

// GET -> Get user own specific post
async function getPostDetailsController(req, res) {
  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user.",
    });
  }
  let decoder;
  try {
    decoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token or token expires.",
    });
  }

  const userId = decoder.id;
  const postId = req.params.postId;

  const post = await postModel.findById( postId );
  if (!post) {
    return res.status(404).json({
      message: "Post not found.",
    });
  }
  // verify if user is asking for his own post
  const isValidUser = post.userId.toString() === userId;
  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbbiden content",
    });
  }

  res.status(200).json({
    message: "Post fetched successfully.",
    post
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
