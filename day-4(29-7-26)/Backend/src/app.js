// its work is to create the server
const express = require('express');
const noteModel = require('./model/note.model'); // to perform curd operation
const app = express();
app.use(express.json())

app.set('json spaces', 2);
/**
 * - POST /api/notes
 * - create new note and save in mongodb
 * - (req.body) -> {title,description}
 */
app.post('/api/notes', async (req, res) => {
  const {
    title,
    description
  } = req.body;
  const note = await noteModel.create({
    title,
    description,
  }) // mdb - > create(method)// create notes and its take time // without model we can not make crud
  res.status(201).json({ // 201 -> new resource is created 
    message: 'Note created successfully.',
    note
  })
})
/**
 * - GET /api/notes
 * - fetch all the notes data from mongoDb and send them in the response
 */
app.get('/api/notes', async (req, res) => {
  const notes = await noteModel.find() // .find: written data in array format and it use get all the notes data and save them in notes
  res.status(200).json({
    message: "Notes fetched successfully.",
    notes
  })
})
/**
 * DELETE /api/notes/:id (unique id provided by mongodb
 */
app.delete('/api/notes/:id', async (req,res)=>{
  const id = req.params.id
  await noteModel.findByIdAndDelete(id)
  console.log(id)
  res.status(200).json({
    message:"Note Deleted Successfully."
  })
})

/**
 * - PATCH /api/notes/:id
 * - update the description of the note by id
 * - req.body = {description}
 */
app.patch('/api/notes/:id',async (req,res)=>{
  const id = req.params.id
  const {description} = req.body
  await noteModel.findByIdAndUpdate(id,{description})  // (jo find karna hai, and {jo update and in object form })
  res.status(200).json({
    message:"Note Updated successfully."
  })
})

module.exports = app;