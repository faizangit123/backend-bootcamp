const express = require("express");

const app = express();


const notes =[]

app.use(express.json());

app.post("/api/notes", (req, res) => {
  notes.push(req.body);
  console.log(req.body);
  res.status(201).json({
    message: "done",
  });
});

app.get("/api/notes", (req, res) => {
  res.status(200).json({
    message: "fetched",
    notes: notes,
  });
});

app.patch("/api/notes/:id", (req, res) => {
  notes[req.params.id].title = req.body.title;
  res.status(200).json({
    message: "updated",
  });
});

app.delete("/api/notes/:id",(req,res)=>{
  delete notes[req.params.id]
  res.status(204).json({
    message:'deleted'
  })
})

module.exports = app
