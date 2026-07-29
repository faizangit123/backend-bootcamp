const express = require('express');
const noteModel = require('./model/notes.model');  // to perform curd operation
const app = express();
app.use(express.json())

/**
 * - POST /notes(api)
 * - (req.body) -> {title,description}
*/
app.post('/notes', async (req, res)=>{
  const {title, description} = req.body;
  const note = await noteModel.create({title,description,})   // create notes and its take time // without model we can not make crud
  res.status(201).json({
    message:'Note created successfully',
    note
  })
})

/**
 * - GET /notes(Api)
 * - fetch all the notes data
 * 
*/ 
app.get('/notes', async (req,res)=>{
  const notes = await noteModel.find()
  res.status(200).json({
    message:"Notes fetched successfully",notes
  })
})

module.exports = app;