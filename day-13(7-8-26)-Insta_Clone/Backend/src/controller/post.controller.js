const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// POST /api/posts -> createPostCntoroller
async function createPostController(req, res) {
  console.log(req.body, req.file);
  // 1. Check JWT token
  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(401).json({
      message: "Unauthrozied access(token not found).",
    });
  }
  // 2. Verify JWT
  let deCoder = null;
  try {
    deCoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token or expires.",
    });
  }

  // 3. Upload image to ImageKit
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "testfile",
    folder: "/Instagram-Clone/posts",
  });

  // 5. Create post in database
  const post = await postModel.create({
    caption: req.body.caption,
    img_url: file.url,
    userId: deCoder.id,
  });

  // 6. Response
  res.status(201).json({
    message: "Post created successfully.",
    post,
  });
}

// GET /api/posts -> getPostController
async function getPostController(req, res) {
  const token = req.cookies.JWT_TOKEN;

  if (!token) {
    return res.status(401).json({
      message: "Unauthrozied access",
    });
  }

  let deCoder = null;
  try {
    deCoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const post = await postModel.find({
    userId: deCoder.id,
  });

  res.status(200).json({
    message: "Post fetched successfully.",
    post,
  });
}

// GET /api/posts -> getPostDetails
async function getPostDetailsController(req, res) {
  // 1st we need to know which user is requestion the post, for that we use token
  const token = req.cookies.JWT_TOKEN;

  // if we dont get the token
  if (!token) {
    return res.status(401).json({
      message: "Unauthrozied access",
    });
  }
  // 2rd that requested should belong to that user, we use .verify
  let deCoder;
  try {
    // its ask for 2 things: 1st token(jwt-token),2rd porcess
    deCoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  // now i am getting 2 id userId and postId
  const userId = deCoder.id;
  const postId = req.params.postId;

  // now we can get the sepecific post
  const post = await postModel.findById( postId );
  // if we dont find that post
  if (!post) {
    return res.status(404).json({
      message: "Post not found.",
    });
  }

  // now we have to check if user is asking for his own post
  // so we compare the userId with postId
  const idValidUser = post.userId.toString() === userId;  // we conver ojid to string

  if (!idValidUser) {
    // Forbidder
    return res.status(403).json({
      message: "Forbidder content.",
    });
  }

  // if post req is requested the the same user
  res.status(200).json({
    message: "Post fetched successfully.",post
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
