const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({    // we dont call it format we call it Schema in mongoDb
  title: String,
  description: String,
})

const noteModel = mongoose.model('notes', noteSchema)  // we need model for perform CURD operation
// what is this sting? as we are not creation only one note in our applic we are going to create many, and as all the note have same format tile and desc, and we are storing it in one place we called it Collection, we can have notes collections, users collections and more 
// and our notes collectino will store on this string, and string name can be any like : YOYO
module.exports = noteModel

