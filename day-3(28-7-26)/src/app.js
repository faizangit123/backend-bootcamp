const express = require('express');

const app = express();

app.use(express.json());

const notes = []
// POST -> /notes(API) and 201 status code , for creating successfully
app.post('/notes', (req, res) => {
  notes.push(req.body);
  console.log(req.body);
  res.status(201).json({
    message: "Note is created"
  })
})

// GET -> /notes and 200
app.get('/notes', (req, res) => {
  res.status(200).json({
    notes: notes
  })
})

app.patch('/notes/:index', (req, res) => {   // patch because we are just modifying only title not but so no put
  notes[req.params.index].title = req.body.title;
  res.status(200).json({
    message: "Your notes is updated successfully"
  })
})

app.delete('/notes/:index', (req, res) => {
  delete notes[req.params.index]
  res.send(204).json({                              // 204 dont show the data in postman
    message: "Your notes is deleted successfully"
  })
})

module.exports = app;