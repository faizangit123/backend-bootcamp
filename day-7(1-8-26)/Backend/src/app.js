const express = require('express');
const noteModel = require('./model/note.model')
const authRouter = require('./routes/auth.routes') // it will now work if we dont export it
const cookieParser = require('cookie-parser')


const app = express();

app.use(express.json());
app.use(cookieParser())
app.use('/api/auth', authRouter)       // we showing the our register url with a prefix : /api/auth/ then register

app.post('/api/notes', async (req, res) => {
  const {
    title,
    description
  } = req.body
  const note = await noteModel.create({
    title,
    description
  })
  res.status(201).json({
    message: 'Note is Created Successfully.',
    note
  })
})

app.get('/api/notes', async (req, res) => {
  const notes = await noteModel.find()
  res.status(200).json({
    message: 'Note fetched Successfully.',
    notes
  })
})

app.delete('/api/notes/:id', async (req, res) => {
  const {
    id
  } = req.params;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: 'Note deleted Successfully.'
  })
})

app.patch('/api/notes/:id', async (req, res) => {
  const {
    description
  } = req.body;
  const {
    id
  } = req.params;
  const note = await noteModel.findByIdAndUpdate(id, {
    description
  }, {
    new: true
  })
  console.log(id)
  res.status(200).json({
    message: 'Note is Modified Succcessfully.',
    note
  })
})
module.exports = app;