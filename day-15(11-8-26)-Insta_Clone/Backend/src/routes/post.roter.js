const express = require("express");
const postController = require("../controller/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

// POST -> /api/posts [protected]
// req.body -> {caption, img_url}

postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

// GET -> /api/posts -> all user posts
postRouter.get("/", postController.getPostController);

// GET -> /api/posts -> get spesific post so need id
postRouter.get("/details/:postId", postController.getPostDetailsController);

module.exports = postRouter;
