const express = require('express');
const noteModel = require('./model/notes.model');
const app = express();

app.use(express.json())

// POST /notes
// (req.body) -> {title,description}

app.post('/notes', async (req, res)=>{
  const {title, description} = req.body;
  
  const note = await noteModel.create({title,description,})

  res.status(201).json({
    message:'Note is created', note
  })

})

module.exports = app;