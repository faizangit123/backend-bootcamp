const mongoose = require('mongoose');

function connectToDb(){
  mongoose.connect("uir/day-3c(28-7-26")
  .then(() => {
    console.log("Database is connected")
  })
  .catch((err) => {
    console.log(`Fail to connect with the database : ${err}`)
  })
}

module.exports = connectToDb()