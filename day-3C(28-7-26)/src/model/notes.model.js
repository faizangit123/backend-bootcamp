const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
})


const noteModel = mongoose.model('notes', noteSchema)        // we have a collection called notes and it will have all the collection of notes

module.exports = noteModel