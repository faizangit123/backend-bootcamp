const express = require("express");
const postController = require("../controller/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/posts   [protected]
// req.body = {caption, image-file}
postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

// GET /api/posts (7-8-26) [protected]
postRouter.get("/", postController.getPostController);

// GET /api/posts/details/:postId
/** // what it does
 *  req -> it will return user ka secific post jo wo chata hai, and 2rd check karna ki requested post should belong to that user only
 */
postRouter.get("/details/:postId",postController.getPostDetailsController)

module.exports = postRouter;
