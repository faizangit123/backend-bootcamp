const express = require("express");
const postController = require("../controller/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({storage:multer.memoryStorage()})

/**
 * POST /api/posts [protected] -> means user should have a token, if now then 401->unauthorized access
 * - req.body = {caption, img_file}
 */

// /api/posts/          // name should be same as in form data
postRouter.post("/",upload.single('image'), postController.createPostController); 

module.exports = postRouter;
