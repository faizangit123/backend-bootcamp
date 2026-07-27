const express = require('express');

const app = express();

app.use(express.json()) // middleware, as express can not read the data from the body without it

const notes = []

app.post("/notes", (req, res) => {
  notes.push(req.body)
  console.log(req.body)
  res.send('Notes is created')
})

app.get("/notes", (req, res) => {
  res.send(notes)
})

app.listen(3000, () => {
  console.log('server is running')
})