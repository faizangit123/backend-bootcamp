const express = require("express");
const postController = require("../controller/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const identifiUser = require("../middleware/auth.middleware");
const upload = multer({ storage: multer.memoryStorage() });

// POST -> /api/posts [protected]
// req.body -> {caption, img_url}

postRouter.post("/",upload.single("image"),identifiUser,postController.createPostController);

//GET-> /api/posts -> all user posts
postRouter.get("/", identifiUser, postController.getPostController);

//GET-> /api/posts -> get spesific post so need postId and user ask for his own post: userID
postRouter.get("/details/:postId", identifiUser ,postController.getPostDetailsController);

module.exports = postRouter;
