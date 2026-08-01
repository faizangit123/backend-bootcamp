/**
 * iska kam server ko create karna hai
 */
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const noteModel = require('./model/note.model');
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))
// POST /api/notes
app.post('/api/notes', async (req, res) => {
  const {
    title,
    description
  } = req.body;
  const note = await noteModel.create({
    title,
    description
  })
  res.status(200).json({
    message: 'Note is created.',
    note
  })
})
// GET /api/notes
app.get('/api/notes', async (req, res) => {
  const notes = await noteModel.find();
  res.status(201).json({
    message: 'Notes fetched Successfully.',
    notes
  })
})
// PATCH /api/notes
app.patch('/api/notes/:id', async (req, res) => {
  const id = req.params.id
  // or const {id} = req.body
  const {
    description
  } = req.body
  await noteModel.findByIdAndUpdate(id, {
    description
  })
  console.log(id)
  res.status(200).json({
    message: 'Modified Successfully.'
  })
})
// DELETE /api/notes
app.delete('/api/notes/:id', async (req, res) => {
  const {
    id
  } = req.params;
  await noteModel.findByIdAndDelete(id)
  res.status(200).json({
    message: "Note Deleted Successfully."
  })
})
console.log(__dirname);  // // jis folder ke under ho waha tuck ka path dhakhna ke leye miljata hai
app.use('*name', (req, res) => {
  // res.send("This is wind Card")
  res.sendFile(path.join(__dirname,"..","/public/index.html"))       // we need to go back one step "src" ke under hai and we need public we go back with .. then , then its path 
}) // astric : we call this * "wild card" rount with name(in express new version) // use handle those api we dont create
// we are doing this because we dont want to deploy them seprately like first frontend then backendf

module.exports = app;