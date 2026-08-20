// just see the code and req the package use in this code like you can see jwt
const jwt = require("jsonwebtoken");

// iden..() : its work like it will take token from the req and by reading the data it can tell which user requested the post.(is () ka kam identify karna which user request the post)
// and we are going to use this () in the middle of POST /api/posts and createPostController
async function identifiUser(req, res, next) {
  // if it use as a middleware then one more parameter will add called next

  const token = req.cookies.JWT_TOKEN;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized.(token not provided)",
    });
  }

  let decoder;
  try {
    decoder = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid user or token is expire",
    });
  }
  req.user = decoder;
  next(); // when we want to forward our request
}

module.exports = identifiUser; // as we want to use this in our controller
