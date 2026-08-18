const express = require("express");
const postController = require("../controller/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage()});

// POST -> /api/posts [protected]
// req.body -> {caption, img_url}

postRouter.post("/",upload.single("image"),postController.createPostController,);

module.exports = postRouter;