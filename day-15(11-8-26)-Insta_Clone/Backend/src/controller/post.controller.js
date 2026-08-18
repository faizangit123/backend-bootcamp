const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const { toFile } = require('@imagekit/nodejs')
  
const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized.(token not provided)",
    });
  }

  let deCoder;
  try {
    deCoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid user or token is expire",
    });
  }

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    filename: "tesFile",
    folder: "/Instagram-Clone/posts",
  });

  const { caption } = req.body;

  const post = await postModel.create({
    caption,
    img_url: file.url,
    userId: deCoder.id,
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

module.exports = {
  createPostController,
};
