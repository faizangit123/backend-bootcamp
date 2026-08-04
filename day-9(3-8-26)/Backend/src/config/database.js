const mongoose = require('mongoose');

function connectToDb(){
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("Databse is connected.")
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = connectToDb;