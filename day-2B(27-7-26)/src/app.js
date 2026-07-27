/*
-  server create karna hai
-  server ko config karna
*/
const express = require('express');

const app = express();

app.use(express.json())

const posts = [];

// POST :-> /posts , user can create a posts
app.post('/posts', (req, res) => {
  posts.push(req.body)
  console.log(req.body) // body when we are showing large data
  res.send('Posts is created')
})

// GET :-> /posts , user can see all the posts
app.get('/posts', (req, res) => {
  res.send(posts)
})

// Delete :-> /posts(API), now user can delete the post
// delete : params , and which : params will not work 
app.delete('/posts/:index', (req, res) => {
  delete posts[req.params.index]
  console.log(req.params) // when we are dynamin samll value(data)
  res.send("Post deteted successfully")
})

// patch :-> because we are just modifying one thing here which is desc
// PATCH : /post/:index
// modify -> req.body -> {description}
app.patch('/posts/:index', (req, res)=>{
  posts[req.params.index].description = req.body.description;
  res.send("Post is updated successfully")
})

module.exports = app;